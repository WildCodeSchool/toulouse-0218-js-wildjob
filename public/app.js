
// HTML accueil
const accueil = paragraphe => /* @html */`
<!--main menu-->
<div class ="container">
  <div class="row">
    <input type="checkbox" id="smashMe"/>
    <label for="smashMe">
      <div class="btnBurger">
        <img alt="icone burger" src="img/Navigation/Rectangle 1.png" class="btnBurger1"/>
        <img alt="icone burger" src="img/Navigation/Rectangle 1.png" class="btnBurger2"/>
      </div>
    </label>
    <div class="menu">
      <a href="admin" data-toggle="modal"  class="administrateur"  data-target="#modal">Administrateur</a>

      <a href="https://wildcodeschool.fr/" class="ecole" target="_blank">L'école</a>
    </div>
  </div>
</div>
<!--main menu end-->

<!--accueil-->
<div class="section">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 accueil">
        <img class="fondAccueil" alt="accueil" src="https://sylvainkosc.github.io/img/NEWFONDBLEU.png"/>
        <img class="logoAccueil" alt="logo" src="https://sylvainkosc.github.io/img/NEWLOGO.png"/>
        <div class="texteAccueil">
          <p id="paragraphe">${paragraphe}</p>
        </div>
      </div>
    </div>
  </div>
</div>
<!--accueil end-->`




const texteEcosysteme = `La Wild Code School est une école de code <span>dont chaque campus est connecté à son écosystème local</span>`
const texteEntreprise = `94% des élèves formés à la Wild Code School sont en stage/emploi <span>un mois après la fin de leur formation de développeur</span>`
// HTML accueil end

// HTML map
const checkboxEntreprises = /* @html */ `<div class="filtreCheckboxes">
  <input type="checkbox" id="grandGroupe"/>
  <label for="grandGroupe"><p>Grand Groupe</p></label>
  <input type="checkbox" id="pme"/>
  <label for="pme"><p>PME</p></label>
</div>`
const checkboxEcosysteme = /* @html */ `<div class="filtreCheckboxes"></div>`
const checkboxCommuns = /* @html */ `<div class="filtresCommuns"></div>`
const filtreEntreprises = checkboxEntreprises + checkboxCommuns
const filtreEcosysteme = checkboxEcosysteme + checkboxCommuns

const mapHtml = filtre => /* @html */`
<div class="section">
  <!--map-->
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 map">
        <!--filter-->
        <div class="container">
          <div class="row">
            <input type="checkbox" id="clickMe"/>
            <div class="col-5 col-sm-4 col-md-3 col-lg-2 filter">
              <div class="mask">
                <h1>Filtres:</h1>
                <label for="clickMe"><img class="cross" alt="retour" src="img/Navigation/ferme.png"/></label>
                ${filtre}
              </div>
            </div>
          </div>
          <div class="row">
            <label for="clickMe">
              <div class="btnFilter">
                <img class="arrow" alt="ouvrir" src="https://sylvainkosc.github.io/img/Navigation/2.0fleche.png"/>
                <h3 class="texteBtnFilter">Filtres</h3>
              </div>
            </label>
          </div>
        </div>
        <!-- filter end-->
        <div id="mapWrapper">
          <div id="map"></div>
          <div id="legend" class="container" style="right:40px;">
            <div class="row">
              <div class="col-12 elementLegend">
                <h3>Légende:</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--map end-->
</div>`
const maps = /* @html */ `<div id="map"></div>
<div id="legend" class="container" style="right:40px;">
  <div class="row">
    <div class="col-12 elementLegend">
      <h3>Légende:</h3>
    </div>
  </div>
</div>`
// HTML map end

// HTML sidebar
const sidebar = /* @html */`
<!-- sidebar-->
<div class="row">
  <div class="sidepanel">
    <div class="sidemenu">
      <nav>
        <ul>
          <li>
            <a class="payTone" href="/eco">écosystème</a>
          </li>
          <li>
            <a class="payTone" href="/">entreprises</a>
          </li>
        </ul>
      </nav>
      <div class="social">
        <a href="https://www.facebook.com/wildcodeschool" target="_blank">
          <img src="img/SocialMediaIcons/Facebook/Facebook.png" alt="">
        </a>
        <a href="https://www.instagram.com/wildcodeschool" target="_blank">
          <img src="img/SocialMediaIcons/Instagram/Instagram.png" alt="">
        </a>
        <a href="https://www.linkedin.com/school/10387519/?pathWildcard=10387519" target="_blank">
          <img src="img/SocialMediaIcons/LinkedIn/LinkedIn.png" alt="">
        </a>
        <a href="https://twitter.com/wildcodeschool" target="_blank">
          <img src="img/SocialMediaIcons/Twitter/Twitter.png" alt="">
        </a>
        <a href="https://www.youtube.com/channel/UCi99G_0QPx5sYsK8zdvQzfw" target="_blank">
          <img src="img/SocialMediaIcons/Youtube/Youtube.png" alt="">
        </a>
      </div>
    </div>
  </div>
</div>
<!-- sidebar end-->`
// HTML sidebar end

const rechercheEntite = () => /* @html */ `<h3>Modifier une entreprise/ecole</h3>
<form>
  <div class="form-row">
    <div class="col-12">
      <input type="text" class="form-control form-group" id="inputResearch" action="/existingEntity">
    </div>
  </div>
</form>`

const form = (entite) => /* @html */ `<h3>Créer une entreprise/ecole</h3>
<form id="form-post" method="POST" action="${entite.idContact ? '/contact/' + entite.idContact : '/contact'}">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputName">Nom de l'entreprise</label>
      <input type="text" name="name" class="form-control" id="inputName" value="${entite.name}" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" name="mail" class="form-control" id="inputEmail4" value="${entite.mail}">
    </div>
    <div class="form-group col-md-6">
      <label for="inputWebsite">Site</label>
      <input type="text" name="website" class="form-control" id="inputWebsite" value="${entite.website}">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPhone">Téléphone</label>
      <input type="text" name="phone" class="form-control" id="inputPhone" value="${entite.phone}">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-8">
      <label for="inputAddress">Addresse</label>
      <input type="text" name="address" class="form-control" id="inputAddress" value="${entite.address}">
    </div>
    <div class="form-group col-md-4">
      <label for="inputCity">Ville</label>
      <input type="text" name="city" class="form-control" id="inputCity" value="${entite.city}">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCountry">Pays</label>
      <input type="text" name="country" class="form-control" id="inputCountry" value="${entite.country}">
    </div>
    <div class="form-group col-md-6">
      <label for="inputArea">Region</label>
      <select id="inputArea" class="form-control" name="area" value="${entite.area}">
        <option value=""></option>
        <option value="SW">Sud-Ouest</option>
        <option value="SE">Sud-Est</option>
        <option value="NW">Nord-Ouest</option>
        <option value="NE">Nord-Est</option>
        <option value="Center">Centre-IdF</option>
        <option value="World">Monde</option>>
      </select>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputType">Entreprises / Ecosysteme</label>
      <select id="inputType" class="form-control" name="type" value="${entite.type}">
        <option value=""></option>
        <option value="entreprises">Entreprises</option>
        <option value="ecosysteme">Ecosysteme</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputCategory">Type d'entreprise</label>
      <select id="inputCategory" class="form-control" name="category" value="${entite.category}">
        <option value=""></option>
        <option value="ESN">ESN</option>
        <option value="Start Up">Start Up</option>
        <option value="PME">PME</option>
        <option value="Grand Groupe">Grand Groupe</option>
        <option value="Agence Web">Agence Web</option>
        <option value="Collectivite / Association">Collectivité / Association</option>
        <option value="Editeur">Editeur</option>
        <option value="Coworking">Coworking</option>
        <option value="Incubateur / Accelerateur">Incubateur / Accelerateur</option>
        <option value="French Tech">French Tech</option>
        <option value="Cluster Numerique">Cluster Numérique</option>
        <option value="Ecole de code">Ecole de code</option>
      </select>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputIntern">Stages</label>
      <input type="text" name="intern" class="form-control" id="inputIntern" value="${entite.intern}">
    </div>
    <div class="form-group col-md-4">
      <label for="inputJob">Emplois</label>
      <input type="text" name="job" class="form-control" id="inputJob" value="${entite.job}">
    </div>
    <div class="form-group col-md-4">
      <label for="inputInternJob">Stages puis emplois</label>
      <input type="text" name="internJob" class="form-control" id="internJob" value="${entite.internJob}">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-12">
      <button type="submit" class="btn btn-primary">${entite.idContact ? 'Modifier' : 'Créer'}</button>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-12">
      <a href="/"><button id="exitAdmin" type="button" class="btn btn-primary">Exit</button></a>
    </div>
  </div>
</form>`
// HTML admin
const adminHtml = contenu => /* @html */`
<div class="container titleFormAdmin">
  <h1>Interface Administrateur - Campus Manager</h1>

${contenu}

</div>`
// HTML admin end

// marqueurs et légende
function initMap(markers, path) {

  // configuration de l'icône personnalisée
  let iconBase = 'https://sylvainkosc.github.io/img/';
  let icons = {
    entreprises: [],
    ecosysteme: []
  };
  let categoryEntreprises = ["ESN", "Startup", "PME", "Grand Groupe", "Agence Web", "Collectivite/ Association", "Editeur"]
  let templateEntreprises
  let categoryEcosysteme = ["Coworking", "Incubateur/ Accelerateur", "French Tech", "Cluster Numerique", "Ecole de code"]
  let templateEcosysteme
  let i = 1
  for(category of categoryEntreprises){
    templateEntreprises = {
      name: category,
      icon: iconBase + `MarqeurEntreprises/${i}entre.png`
    }
    icons.entreprises.push(templateEntreprises)
    i = i + 1
  }
  i = 1
  for(category of categoryEcosysteme){
    templateEcosysteme = {
      name: category,
      icon: iconBase + `MarqeurEcosysteme/${i}eco.png`
    }
    icons.ecosysteme.push(templateEcosysteme)
    i = i + 1
  }


  let images = {
    urlEntreprises: "https://sylvainkosc.github.io/img/MarqeurEntreprises/",
    urlEcosysteme: "https://sylvainkosc.github.io/img/MarqeurEcosysteme/"
  };
  let map = new google.maps.Map(document.getElementById('map'),
  {
    zoom: 13,
    center: {lat: 43.6032661, lng: 1.4422609},
    styles: [
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
       { "featureType": "poi.medical",
        "elementType": "labels.text",
         "stylers": [ { "visibility": "off"
         }
       ]
     },
      {
        "featureType": "poi.sports_complex",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      }
    ]
  });
  let marker
  let listMarker = []
  // console.log(markers)
  for (let m of markers) {
    function selectionMarqueur(propriete, nomIcone) {
      const {lat, lng} = m
      marker = new google.maps.Marker({
        position: {lat, lng},
        map: map,
        title: m.name,
        icon: images[propriete] + nomIcone
      });
      listMarker.push(marker.icon)
      return marker
    }
    i = 1
    for(category of categoryEntreprises) {
      if(m.category == category) {
        selectionMarqueur("urlEntreprises", `${i}entre.png`)
      }
      i = i + 1
    }
    i = 1
    for(category of categoryEcosysteme) {
      if(m.category == category) {
        selectionMarqueur("urlEcosysteme", `${i}eco.png`)
      }
      i = i + 1
    }
    // info bulle
    const contentString = `
    <h2>
      <p><b>${m.name}</b></p>
    </h2>
    <h5>
      <p><b>${m.category}</b></p>
    </h5>
    <h6>
      <p><a href="${m.website}" target="_blank">${m.website}</a></p>
      <p>${m.address}</p>
      <p>${m.city}</p>
      <p>${m.country}</p>
    </h6>`;
    let infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    let openInfowindow = []
    // console.log(openInfowindow)
    marker.addListener('click', function() {
        if(openInfowindow.length > 0) {
          openInfowindow[0].close()
          openInfowindow.pop
          // console.log(openInfowindow)
        }
        infowindow.open(map, this)
        openInfowindow.push(infowindow)
        // console.log(openInfowindow)
    });
    map.addListener('click', function() {
      infowindow.close()
      openInfowindow.pop
      // console.log(openInfowindow)
    });
    // info bulle end
  }
    // configuration de l'icone personalisée end

  // légende
  const legend = document.getElementById('legend');
  function legende(type) {
    for (category of icons[type]) {
      const name = category.name;
      const icon = category.icon;
      const dejaAffiche = []
      for(marker of listMarker){
        if(marker == icon && !dejaAffiche.includes(marker)) {
          dejaAffiche.push(marker)
          const div = document.createElement('div');
          div.className = "row"
          div.innerHTML = `
          <div class="col-2 elementLegend">
            <img class="marqueursLegend" src="${icon}">
          </div>
          <div class="col-10 containerLabelLegend elementLegend">
            <p class="labelLegend">${name}</p>
          </div>`;
          legend.appendChild(div);
        }
      }
    }
  }
  if(path == "/") {
    legende("entreprises")
  }
  else if(path == "/eco") {
    legende("ecosysteme")
  }
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legend);
  // légende end
}
// marqueurs et légende end

// appel HTML
const mainDiv = document.getElementById('main')
const slide = document.getElementById('fullpage')
let fullpageDiv
let lateralMenu = document.createElement('div')
lateralMenu.className = "container"
lateralMenu.innerHTML = sidebar

let mapWrapper
let stockageParagraphe
let initialized = false

const showHome = (texte, type, filtre) => (context) => {
  fetch (`/data/${type}`)
  .then(function(response){
    return response.json()
  })
  .then(markers => {
    if(! initialized) {
      slide.innerHTML = accueil(texte) + mapHtml(filtre)
      mapWrapper = document.getElementById('mapWrapper')
      stockageParagraphe = document.getElementById('paragraphe')
      mainDiv.appendChild(lateralMenu)
      fullpageDiv = $('#fullpage')
      fullpageDiv.fullpage({
        scrollingSpeed:500
      });
      initialized = true
    }
    else {
      stockageParagraphe.innerHTML = texte
      mapWrapper.innerHTML = maps
    }

    initMap(markers, context.path)
  })
}

// const showEco = () => {
//   fetch ('/markers.json')
//   .then(function(response){
//     return response.json()
//   })
//   .then( markers => {
//     mainDiv.innerHTML = accueil(texteEcosysteme) + mapHtml + sidebar
//     // $('#fullpage').fullpage({
//     //   scrollingSpeed:500
//     // });
//     initMap(markers)
//   })
// }
//debut  modal connexion//
const formLogin = document.getElementById('loginadmin')
  formLogin.addEventListener('submit', evt => {
    evt.preventDefault()
    const data ={}
    const inputs = document.getElementsByTagName('input')
    for (input of inputs) {
      data[input.name] = input.value
    }
    fetch('/login',{
      method: 'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(data => {
      if (data.error){
        alert(data.error)
      }
      else {
        loggedInuser = data
        page("/admin")
      }
      $('#modal').modal('hide')
    })
  })
  const chekLoginMidleware = (context, next) => {
    if (loggedInuser === undefined) {
        page("/", showHome(texteEntreprise))
    }
    next()
  }
//fin modal connexion//

const autoCompletion = () => {
  $('#inputResearch').lightAutocomplete({
    sourceData: function(search, success) {
      $.ajax({
        url: '/existingEntity',
        method: 'GET',
        dataType: 'json',
        data: {
          search: search
        },
        success: function(data) {
          success(data);
        }
      })
    },
    onClick: item => {
      $('#inputResearch').val(item)
      affichage(item)
      displayEntity()
    },
    onPressEnter: item => {
      $('#inputResearch').val(item)
      affichage(item)
      displayEntity()
      console.log(item);
    },
  })
}

const displayEntity = () => {
  const formPost = document.getElementById("form-post")
  formPost.addEventListener("submit", event => {
    let data = {}
    event.preventDefault()
    const inputs = formPost.getElementsByClassName("form-control")
    for(input of inputs){
      if(input.name !== ""){
        data[input.name] = input.value
      }
    }
    const body = JSON.stringify(data)
    fetch(formPost.action,
    {
      method: "POST",
      body: body,
      headers: {
        Accept:"application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      console.log(response)
      let decodedData = response.json()
      if(response.status >= 400){
        alert("Adresse improbable")
      }
      return decodedData
    })
    .then(data => {
      // console.log(data)
    })
  })
}

const affichage = (entity) => {
  mainDiv.innerHTML = adminHtml(rechercheEntite() + form(entity))
  $('#inputArea').val(entity.area)
  $('#inputType').val(entity.type)
  $('#inputCategory').val(entity.category)
  autoCompletion()
}

const showAdmin = () => {
  const emptyEntity = {
      name:'', address:'', mail:'', website:'', phone:'', type:'', category:'', area:'', city:'', country:'',
      lat:'',lng:'', job:'', intern:'', internJob:''
  }
  affichage(emptyEntity)
  displayEntity()
}

const notFoundHtml = `<img src="https://fab404.com/wp-content/uploads/2009/06/simpsoncrazy404.jpg" alt="">`
const notFound = () => {
  mainDiv.innerHTML = notFoundHtml
}
// appel HTML end

// modification url
page("/", showHome(texteEntreprise, "entreprises", filtreEntreprises))
page("/eco", showHome(texteEcosysteme, "ecosysteme", filtreEcosysteme))
page("/admin", showAdmin)
page("*", notFound)

document.addEventListener("DOMContentLoaded", event => {

  page()
})



// modification url end
