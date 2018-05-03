
const express     = require('express')
const bodyParser  = require('body-parser')
const path        = require('path')
const fetch       = require('node-fetch')
const connection  = require('./sql/db.js')
const mysqlEscape = require('./sql/mysqlEscape.js')

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
  <link rel="stylesheet" href="/style.css"  />
  <link href="https://fonts.googleapis.com/css?family=Paytone+One" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/jquery.fullpage.css" />
</head>

<body class="payTone">
  <div id="main">
    <div id="fullpage"></div>
  </div>
<!-- Modal-->
  <div class="modal fade" id="modal">
    <div class="modal-dialog">
      <div class="modal-content">
          <form id="loginadmin" method="POST" action="/login">
              <input type="text" name="name" class="form-control" placeholder="Name" />
              <input type="password" name="password" class="form-control" placeholder="Password" />
              <button type="sumbit" class="btn btn-lg">Log In</button>
          </form>
      </div>
    </div>
  </div>
  <!-- Modal-->

  <!-- script google maps cle API -->
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCwC__7psOPTWbszU21xZvnsFL2XdrrpZk "></script>
  <!-- script google maps cle API end -->

  <!--script bootstrap-->
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  <!--script bootstrap end-->

  <!-- script fullpage -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.7/jquery.fullpage.min.js"></script>
  <!-- script fullpage end -->

  <!-- script autocomplete -->
  <script src="/light-autocomplete.js"></script>
  <!-- script autocomplete end -->

  <!-- script dynamique -->
  <script src="/page.js"></script>
  <script src="/app.js"></script>
  <!-- script dynamique end -->

</body>
</html>`

app.get("/data", (req, res) => {
  connection.query("SELECT * FROM Entite", (error, data) => {
    if(error) {
      return res.status(500).json({
        error: error.message
      })
    }
    res.json(data)
  })
})

app.get("/data/:type", (req, res) => {
  const type = req.params.type
  const query = `SELECT * FROM Entite WHERE type = "${type}"`
  connection.query(query, (error, data) => {
  if(error) {
    return res.status(500).json({
      error: error.message
    })
  }
  if(data.length === 0) {
    return res.status(404).json({
      error: `Company with id ${dataId} not found`
    })
  }
  res.json(data)
  })
})



//debut modal//
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
        error: 'Authentification erronée'
      })
    }
    // req.session.user
    res.json(
      result[0]
    )
  })
})
//fin modal//


app.post("/contact", (req, res) => {
  let newContact = req.body

  const geocoderQuery = encodeURIComponent(`${req.body.address} ${req.body.city}`.replace(/ /g, '+'))

  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${geocoderQuery}&key=AIzaSyCwC__7psOPTWbszU21xZvnsFL2XdrrpZk`)
    .then(res => res.json())
    .then(json => {
      console.log(json)
      if (json.results.length === 0){
        return res.status(400).json({
          error: "Adresse improbable"
        })
      }
      let lat = json.results["0"].geometry.location.lat
      let lng = json.results["0"].geometry.location.lng
      const query = `INSERT INTO Entite (name, address, mail, website, phone, type, category, area, city, country, lat,
                    lng, job, intern, internJob)
                    VALUES ("${newContact.name}", "${newContact.address}", "${newContact.mail}", "${newContact.website}",
                            "${newContact.phone}", "${newContact.type}", "${newContact.category}", "${newContact.area}",
                            "${newContact.city}", "${newContact.country}", ${lat}, ${lng}, ${newContact.job ? newContact.job : 0},
                            ${newContact.intern ? newContact.intern : 0}, ${newContact.internJob ? newContact.internJob : 0} )`
      connection.query(query, (error, result) => {
        if(error) {
          return res.status(500).json({
            error: error.message
          })
        }
        res.json(
          result
        )
      })
    })
})

app.post("/contact/:id", (req, res) => {
  let id = req.params.id
  console.log(id)
  let updatedContact = req.body
  console.log(updatedContact)

  const geocoderQuery = encodeURIComponent(`${req.body.address} ${req.body.city}`.replace(/ /g, '+'))

  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${geocoderQuery}&key=AIzaSyCwC__7psOPTWbszU21xZvnsFL2XdrrpZk`)
    .then(res => res.json())
    .then(json => {
      console.log(json)
      if (json.results.length === 0){
        return res.status(400).json({
          error: "Adresse improbable"
        })
      }
      let lat = json.results["0"].geometry.location.lat
      let lng = json.results["0"].geometry.location.lng
      const query = `UPDATE Entite SET name = "${updatedContact.name}", address = "${updatedContact.address}", mail = "${updatedContact.mail}", website = "${updatedContact.website}",
            phone = "${updatedContact.phone}", type = "${updatedContact.type}", category = "${updatedContact.category}", area = "${updatedContact.area}",
            city = "${updatedContact.city}", country = "${updatedContact.country}", lat = ${lat}, ng = ${lng}, job = "${updatedContact.job}",
            intern = "${updatedContact.intern}", internJob = "${updatedContact.internJob}" WHERE idContact = ${id}`
      connection.query(query, (error, result) => {
        if(error) {
          return res.status(500).json({
            error: error.message
          })
        }
        res.json(
          result
        )
    })
  })
})

app.get("/existingEntity", (req, res) =>{
  const search = mysqlEscape(req.query.search)
  const query = `SELECT * FROM Entite WHERE name LIKE '%${search}%'`

  connection.query(query, (error, result) => {
    if(error) {
      return res.status(500).json({
        error: error.message
      })
    }
    res.json(
      result.map(function(obj){
        obj.label = obj.name
        return obj
      })
    )
  })
})

app.get('*', (req, res) => {
  res.send(indexHtml)
})

app.listen(3000)
console.log('WASSUP BROOOOO ?!?! \nListening on http://localhost:3000')
