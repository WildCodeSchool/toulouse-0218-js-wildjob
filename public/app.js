
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
      <a href="admin" class="administrateur">Administrateur</a>
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
let statusCheckbox = {
  esn: "",
  startup:"checked",
  pme: "checked",
  grandGroupe: "checked",
  agenceWeb: "",
  collectiviteAssociation: "",
  editeur: "",
  coworking:"",
  incubateurAccelerateur:"",
  frenchTech: "",
  clusterNumerique: "checked",
  ecoleDeCode: "checked",
  sudOuest: "checked",
  sudEst: "",
  nordOuest: "",
  nordEst: "",
  centreIDF: "",
  monde: ""
}
const checkboxEntreprises = /* @html */ `
<div class="filtreCheckboxes">
  <input type="checkbox" id="esn" ${statusCheckbox.esn}/>
  <label for="esn">ESN</label>
  </br>
  <input type="checkbox" id="startup" ${statusCheckbox.startup}/>
  <label for="startup">Startup</label>
  </br>
  <input type="checkbox" id="pme" ${statusCheckbox.pme}/>
  <label for="pme">PME</label>
  </br>
  <input type="checkbox" id="grandGroupe" ${statusCheckbox.grandGroupe}/>
  <label for="grandGroupe">Grand Groupe</label>
  </br>
  <input type="checkbox" id="agenceWeb" ${statusCheckbox.agenceWeb}/>
  <label for="agenceWeb">Agence Web</label>
  </br>
  <input type="checkbox" id="collectiviteAssociation" ${statusCheckbox.collectiviteAssociation}/>
  <label for="collectiviteAssociation">Collectivité / Association</label>
  </br>
  <input type="checkbox" id="editeur" ${statusCheckbox.editeur}/>
  <label for="editeur">Editeur</label>
</div>`

const checkboxEcosysteme = /* @html */ `
<div class="filtreCheckboxes">
  <input type="checkbox" id="coworking" ${statusCheckbox.coworking}/>
  <label for="coworking">Coworking</label>
  </br>
  <input type="checkbox" id="incubateurAccelerateur" ${statusCheckbox.incubateurAccelerateur}/>
  <label for="incubateurAccelerateur">Incubateur / Accélerateur</label>
  </br>
  <input type="checkbox" id="frenchTech" ${statusCheckbox.frenchTech}/>
  <label for="frenchTech">French Tech</label>
  </br>
  <input type="checkbox" id="clusterNumerique" ${statusCheckbox.clusterNumerique}/>
  <label for="clusterNumerique">Cluster Numérique</label>
  </br>
  <input type="checkbox" id="ecoleDeCode" ${statusCheckbox.ecoleDeCode}/>
  <label for="ecoleDeCode">Ecole de Code</label>
</div>`

const checkboxCommuns = /* @html */ `
<h1 class="title2">Zones:</h1>
<div class="filtresCommuns">
  <input type="checkbox" id="sudOuest" ${statusCheckbox.sudOuest}/>
  <label for="sudOuest">Sud-Ouest</label>
  </br>
  <input type="checkbox" id="sudEst" ${statusCheckbox.sudEst}/>
  <label for="sudEst">Sud-Est</label>
  </br>
  <input type="checkbox" id="nordOuest" ${statusCheckbox.nordOuest}/>
  <label for="nordOuest">Nord-Ouest</label>
  </br>
  <input type="checkbox" id="nordEst" ${statusCheckbox.nordEst}/>
  <label for="nordEst">Nord-Est</label>
  </br>
  <input type="checkbox" id="centreIDF" ${statusCheckbox.centreIDF}/>
  <label for="centreIDF">Centre IdF</label>
  </br>
  <input type="checkbox" id="monde" ${statusCheckbox.monde}/>
  <label for="monde">Monde</label>
</div>`
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
              <div id="mask">
                <h1 class="title1">Filtres:</h1>
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

const maps = /* @html */ `
<div id="map"></div>
<div id="legend" class="container" style="right:40px;">
  <div class="row">
    <div class="col-12 elementLegend">
      <h3>Légende:</h3>
    </div>
  </div>
</div>`

const mask = filtre => /* @html */`
  <h1 class="title1">Filtres:</h1>
  <label for="clickMe"><img class="cross" alt="retour" src="img/Navigation/ferme.png"/></label>
  ${filtre}
`
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

// HTML admin
const adminHtml = /* @html */`
<div class="container titleFormAdmin">
  <h1>Interface admin</h1>
  <!--formulaire recherche-->
  <h3>Modifier une entreprise/ecole</h3>
  <div class="form-row">
    <label for="inputResearch" class="col-2 col-form-label">Entreprise / ecole</label>
    <div class="col-9">
      <input type="text" class="form-control" id="inputResearch" placeholder="Recherche entreprise / ecole auto-complétion">
    </div>
    <button class="btn btn-primary col-1" type="submit">Submit</button>
  </div>
  <!--formulaire recherche end-->

  <!--formulaire création-->
  <h3>Créer une entreprise/ecole</h3>
  <form id="form-post" method="POST" action="/contact">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputName">Nom de l'entreprise</label>
        <input type="text" name="name" class="form-control" id="inputName" placeholder="Nom">
      </div>
      <div class="form-group col-md-6">
        <label for="inputEmail4">Email</label>
        <input type="email" name="email" class="form-control" id="inputEmail4" placeholder="Email">
      </div>
      <div class="form-group col-md-6">
        <label for="inputWebsite">Site</label>
        <input type="text" name="site" class="form-control" id="inputWebsite" placeholder="www.">
      </div>
      <div class="form-group col-md-6">
        <label for="inputPhone">Téléphone</label>
        <input type="text" name="telephone" class="form-control" id="inputPhone">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-8">
        <label for="inputAddress">Addresse</label>
        <input type="text" name="adresse" class="form-control" id="inputAddress" placeholder="1234 Main St">
      </div>
      <div class="form-group col-md-4">
        <label for="inputCity">Ville</label>
        <input type="text" name="ville" class="form-control" id="inputCity">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputSociety">Type d'entreprise</label>
        <select id="inputSociety" class="form-control">
          <option selected>Type...</option>
          <option>ESN</option>
          <option>Start Up</option>
          <option>PME</option>
          <option>Grand Groupe</option>
          <option>Agence Web</option>
          <option>Collectivité / Association</option>
          <option>Editeur</option>
        </select>
      </div>
      <div class="form-group col-md-6">
        <label for="inputContract">Type de contrat</label>
        <select id="inputContract" class="form-control">
          <option selected>Type...</option>
          <option>Stage</option>
          <option>CDD / CDI</option>
          <option>Stage puis CDD / CDI</option>
        </select>
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
  </form>
  <!--formulaire création end-->
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
    zoom: 10,
    center: {lat: 43.6006785, lng: 1.3626296}
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
let filterWrapper
let initialized = false
let defaultCategoryChecked = ["PME", "Grand Groupe", "Startup", "Ecole de Code", "Cluster Numérique"]
let defaultAreaChecked = ["Sud-Ouest"]

const showHome = (texte, type, filtre) => (context) => {
  let filterCategory = defaultCategoryChecked.join()
  let filterArea = defaultAreaChecked.join()
  fetch (`/data/${type}?category=${filterCategory}&area=${filterArea}`)
  .then(function(response){
    return response.json()
  })
  .then(markers => {
    if(! initialized) {
      slide.innerHTML = accueil(texte) + mapHtml(filtre)
      mapWrapper = document.getElementById('mapWrapper')
      stockageParagraphe = document.getElementById('paragraphe')
      filterWrapper = document.getElementById('mask')
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
      filterWrapper.innerHTML = mask(filtre)
    }
    initMap(markers, context.path)
    for(let id in statusCheckbox) {
      $('#' + id).prop('checked', statusCheckbox[id] !== '')
    }
    $("#mask [type='checkbox']").change(function(){
      const checkbox = $(this)
      const isChecked = checkbox.is(':checked')
      const checkboxId = checkbox.attr('id')
      const label = $(`[for="${checkboxId}"]`).text()

      if(isChecked == true) {
        statusCheckbox[checkboxId] = "checked"
        defaultCategoryChecked.push(label)
        page(context.path)
      }

      if(isChecked == false) {
        // statusCheckbox[checkboxId] = ""
        // for (i = 0; i < defaultCategoryChecked.length; i++) {
        //   for (category of defaultCategoryChecked) {
        //     if (label == category) {
        //       defaultCategoryChecked.splice(i, 1)
        //     }
        //   }
        // }
        statusCheckbox[checkboxId] = ""
        const idx = defaultCategoryChecked.indexOf(label)
        if(idx !== -1) {
          defaultCategoryChecked.splice(idx, 1)
        }
        page(context.path)
      }
    })
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

const showAdmin = () => {
  mainDiv.innerHTML = adminHtml
  const formPost = document.getElementById("form-post")
  formPost.addEventListener("submit", event => {
    let data = {}
    event.preventDefault()
    const inputs = formPost.getElementsByTagName("input")
    for(input of inputs){
      if(input.name !== ""){filtre
        data[input.name] = input.value
      }
    }
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
page("/", showHome(texteEntreprise, "entreprises", filtreEntreprises))
page("/eco", showHome(texteEcosysteme, "ecosysteme", filtreEcosysteme))
page("/admin", showAdmin)
page("*", notFound)

document.addEventListener("DOMContentLoaded", event => {

  page()
})
// modification url end
