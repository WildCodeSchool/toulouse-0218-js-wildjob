
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const fetch = require('node-fetch')
const connection = require('./sql/db.js')

const app = express()
// console.log(__dirname)
// console.log(path.normalize(__dirname+'/../../../Documents'))
// Node ne va pas comprendre un chemin du type
// /home/wilder/Documents/projet2/toulouse-0218-js-wildjob/back/../public
// Il faut transformer ça en
// /home/wilder/Documents/projet2/toulouse-0218-js-wildjob/public
const staticPath = path.normalize(`${__dirname}/../public`)
app.use(express.static(staticPath))
app.use(bodyParser.json())

const middleware = (req, res, next) => {
  next()
}
app.use(middleware)


const indexHtml = /* @html */ `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <link rel="shortcut icon" type="image/x-icon" href="https://raw.githubusercontent.com/sylvainkosc/sylvainkosc.github.io/master/img/favicon/faviconwildjob.ico"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <title>Wild Job</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossorigin="anonymous" />
  <link rel="stylesheet" href="style.css"  />
  <link href="https://fonts.googleapis.com/css?family=Paytone+One" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/jquery.fullpage.css" />
</head>

<body class="payTone">
  <div id="main">
    <div id="fullpage"></div>
  </div>
<!-- Modal-->
  <div class="modal fade" id="popUpWindow">
    <div class="modal-dialog">
      <div class="modal-content">
          <form id="loginadmin" method="POST" action="/login">
              <input type="text" name="name" class="form-control" placeholder="Name" />
              <input type="password" name="password" class="form-control" placeholder="Password" />
              <button type="sumbit" class="btn btn-primary btn-lg">Log In</button>
          </form>
      </div>
    </div>
  </div>
  <!-- Modal-->

  <!-- script google maps cle API -->
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCwC__7psOPTWbszU21xZvnsFL2XdrrpZk "></script>
  <!-- script google maps cle API end -->

  <!-- script dynamique -->
  <script src="page.js"></script>
  <script src="app.js"></script>
  <!-- script dynamique end -->

  <!--script bootstrap-->
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  <!--script bootstrap end-->

  <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/jquery.fullpage.min.js"></script>


</body>

</html>`
app.post("/login", (req, res) => {
  const query =`select * from Admin where name='${req.body.name}' and password='${req.body.password}'`
  console.log(query)
  connection.query(query, (error, result) => {
    if(error) {
      return res.status(500).json({
        error: error.message
      })
    }
    if (result.length === 0){
      return res.status(401).json({
        error: 'Identifiant erreur'
      })
    }
    // req.session.user
    res.json(
      result[0]
    )
  })
})





app.post("/contact", (req, res) => {
  let newContact = req.body

  const geocoderQuery = `${req.body.adresse} ${req.body.ville}`.replace(/ /g, '+')

  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${geocoderQuery}&key=AIzaSyCwC__7psOPTWbszU21xZvnsFL2XdrrpZk`)
    .then(res => res.json())
    .then(json => {
      let lat = json.results["0"].geometry.location.lat
      let lng = json.results["0"].geometry.location.lng
      const query = `INSERT INTO Entite (nom, adresse, mail, site, telephone, latitude, longitude)
                    VALUES ('${newContact.name}', '${newContact.adresse}', '${newContact.email}', '${newContact.site}', '${newContact.telephone}', ${lat}, ${lng} )`
      connection.query(query, (error, result) => {
        if(error) {
          return res.status(500).json({
            error: error.message
          })
        }
        console.log(result)
        res.json(
          result
        )
      })
    })
})

app.get('*', (req, res) => {
  res.send(indexHtml)
})

app.listen(3000)
console.log('WASSUP BROOOOO ?!?! \nListening on http://localhost:3000')
