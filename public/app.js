
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
      <a href="https://wildcodeschool.fr/" class="ecole" target="_blank">L'école</a>
      <a href="admin" class="administrateur">Admin</a>
    </div>
  </div>
</div>
<!--main menu end-->

<!--accueil-->
<div class="section">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 accueil">
        <img class="fondAccueil" alt="accueil" src="img/fond-fini.png"/>
        <img class="logoAccueil" alt="logo" src="img/LOGOFINI.png"/>
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
const mapHtml = /* @html */`
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
              </div>
            </div>
          </div>
          <div class="row">
            <label for="clickMe">
              <div class="btnFilter">
                <img class="arrow" alt="ouvrir" src="img/Navigation/2.0fleche.png"/>
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
const maps = `<div id="map"></div>
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
<div class="form-row">
  <label for="inputResearch" class="col-1 col-form-label">Recherche</label>
  <div class="col-10">
    <input type="text" class="form-control" id="inputResearch" action="/existingEntity">
  </div>
  <button class="btn btn-primary col-1" type="submit">Submit</button>
</div>`

const form = (entite) => /* @html */ `<h3>Créer une entreprise/ecole</h3>
<form id="form-post" method="POST" action="/contact">
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
      <input type="text" name="country" class="form-control" id="inputCity" value="${entite.country}">
    </div>
    <div class="form-group col-md-6">
      <label for="inputArea">Region</label>
      <select id="inputArea" class="form-control" name="area" value="${entite.area}">
        <option value=""></option>
        <option value="Sud-Ouest">Sud-Ouest</option>
        <option value="Sud-Est">Sud-Est</option>
        <option value="Nord-Ouest">Nord-Ouest</option>
        <option value="Nord-Est">Nord-Est</option>
        <option value="Centre-Idf">Centre-IdF</option>
        <option value="Monde">Monde</option>>
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
      <label for="inputSousType">Type d'entreprise</label>
      <select id="inputSousType" class="form-control" name="category" value="${entite.category}">
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
      <button type="submit" class="btn btn-primary">Create</button>
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
function initMap(markers) {
  const wildcodeschool = {lat: 43.601433, lng: 1.442133};

  // info bulle
  const contentString = `
  <div id="content">
    <div id="Wildcode School Toulouse">
  </div>
  <h1 id="firstHeading" class="firstHeading"Wildcode School>
    <div id="bodyContent">
      <p><b>Wildcode School Toulouse</b></p>
      <p>The Best place</p>
      <p>28 eleves</p>
      <a href="https://wildcodeschool.fr/toulouse/" target="_blank">https://wildcodeschool.fr/toulouse</a>
    </div>
  </h1>`;
  let infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  // info bulle end

  // configuration de l'icône personnalisée
  let iconBase = 'https://sylvainkosc.github.io/marqeurs/';
  let icons = {
    school: {
      name: 'School',
      icon: iconBase + 'marqeurschool.png'
    },
    library: {
      name: 'Entreprise',
      icon: iconBase + 'marqeurentreprise.png'
    },
    info: {
      name: 'Incubateur',
      icon: iconBase + 'marqeurincubateur.png'
    }
  };

  let images = {
    /* adresse de l'icône personnalisée */
    url: 'https://sylvainkosc.github.io/marqeurs/marqeurschool.png'
  };
  let map = new google.maps.Map(document.getElementById('map'),
  {
    zoom: 10,
    center: wildcodeschool
  });
  for ( let m of markers){
    let marker = new google.maps.Marker({
      position: m,
      map: map,
      title: m.title,
      icon: images
    });
  }
  let marker = new google.maps.Marker({
    position: wildcodeschool,
    map: map,
    title: 'Wildcode School (Toulouse)',
    icon: images
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  // configuration de l'icone personalisée end

  // légende
  var legend = document.getElementById('legend');
  for (var key in icons) {
    var type = icons[key];
    var name = type.name;
    var icon = type.icon;
    var div = document.createElement('div');
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

const showHome = (texte) => () => {

  fetch ('/markers.json')
  .then(function(response){
    return response.json()
  })
  .then( markers => {
    if(! initialized) {
      slide.innerHTML = accueil(`${texte}`) + mapHtml
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

    initMap(markers)
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

const autoCompletion = () => {
  console.log($('#inputResearch'))
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
          console.log(data)
          success(data);
        }
      });
    }
  });
}

const showAdmin = () => {
  const emptyEntity = {
    name:'', address:'', mail:'', website:'', phone:'', type:'', category:'', area:'', city:'', country:'',
    latitude:'',longitude:'', job:'', intern:'', internJob:''
  }
  mainDiv.innerHTML = adminHtml(rechercheEntite() + form(emptyEntity))
  autoCompletion()
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
    console.log(data)
    const body = JSON.stringify(data)

    fetch("/contact",
    {
      method: "POST",
      body: body,
      headers: {
        Accept:"application/json",
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
  })
}

const notFoundHtml = `<img src="https://fab404.com/wp-content/uploads/2009/06/simpsoncrazy404.jpg" alt="">`
const notFound = () => {
  mainDiv.innerHTML = notFoundHtml
}
// appel HTML end

// modification url
page("/", showHome(texteEntreprise))
page("/eco", showHome(texteEcosysteme))
page("/admin", showAdmin)
page("*", notFound)

document.addEventListener("DOMContentLoaded", event => {

  page()
})
// modification url end
