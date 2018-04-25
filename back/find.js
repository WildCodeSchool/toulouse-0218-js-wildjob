const fetch = require('node-fetch')

function getGeometryInJson(json) {
  json.results[0].geometry.location
}

if(process.argv.length < 4) {
  console.log('Usage: node find nom ville')
  process.exit()
}
const name = process.argv[2]
const city = process.argv[3]
const key = 'AIzaSyCwC__7psOPTWbszU21xZvnsFL2XdrrpZk'
const geocodeBaseUrl = 'https://maps.googleapis.com/maps/api/geocode/json'
const placesBaseUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'
const geocodeUrl = `${geocodeBaseUrl}?key=${key}&address=${city}`
fetch(geocodeUrl)
.then(response => response.json())
.then(json => {
  const cityLocation = json.results[0].geometry.location
  const { lat, lng } = cityLocation
  const placesUrl = `${placesBaseUrl}?key=${key}&location=${lat},${lng}&radius=15000&name=${name}`
  fetch(placesUrl)
  .then(response => response.json())
  .then(json => {
    // console.log(json)
    for(result of json.results) {
      const loc = result.geometry.location
      console.log(`Name: ${result.name}\n  Adresse: ${result.vicinity}\n  Coords: ${loc.lat},${loc.lng}\n\n`)
    }
  })
})
