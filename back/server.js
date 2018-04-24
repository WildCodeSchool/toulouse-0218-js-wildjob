
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

const indexHtml = /* @html */ `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <title>Wild Job</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossorigin="anonymous" />
  <link rel="stylesheet" href="style.css" />
  <link href="https://fonts.googleapis.com/css?family=Paytone+One" rel="stylesheet">
</head>

<body class="payTone">
  <div id="main"></div>

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
</body>

</html>`


app.post("/contact", (req, res) => {
  let newContact = req.body
  console.log(newContact)
  const query = `INSERT INTO Contact (nom, adresse, mail, site) VALUES ('${newContact.name}', '${newContact.adresse}', '${newContact.email}', '${newContact.site}' )`
  connection.query(query, (error, result) => {
    if(error) {
      return res.status(500).json({
        error: error.message
      })
    }
    res.json({result: result})
  })
  const geocoderQuery = `${req.body.adresse} ${req.body.ville}`.replace(/ /g, '+')
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${geocoderQuery}&key=AIzaSyCwC__7psOPTWbszU21xZvnsFL2XdrrpZk`)
    .then(res => res.json())
    .then(json => {
      res.json(
        json
      )
      let coord = json.results["0"].geometry.location
      // console.log(coord)
    })
})

app.get('*', (req, res) => {
  res.send(indexHtml)
})

app.listen(3000)
console.log('WASSUP BROOOOO ?!?! \nListening on http://localhost:3000')
