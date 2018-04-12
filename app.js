const mainDiv = document.getElementById('main')

const adminHtml =`<div class="container">
<h1>Interface admin</h1>
<h3>Modifier une entreprise/ecole</h3>
<div class="form-row">
    <label for="inputResearch" class="col-2 col-form-label">Entreprise / ecole</label>
    <div class="col-9">
        <input type="text" class="form-control" id="inputResearch" placeholder="Recherche entreprise / ecole auto-complétion">
    </div>
    <button class="btn btn-primary col-1" type="submit">Submit</button>
</div>
<h3>Créer une entreprise/ecole</h3>
    <form>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputName">Nom de l'entreprise</label>
                <input type="text" class="form-control" id="inputName" placeholder="Nom">
            </div>
            <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
            </div>
            <div class="form-group col-md-6">
                <label for="inputWebsite">Site</label>
                <input type="text" class="form-control" id="inputWebsite" placeholder="www.">
            </div>
            <div class="form-group col-md-6">
                <label for="inputPhone">Téléphone</label>
                <input type="text" class="form-control" id="inputPhone">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-8">
                <label for="inputAddress">Addresse</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
            </div>
            <div class="form-group col-md-4">
                <label for="inputCity">Ville</label>
                <input type="text" class="form-control" id="inputCity">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputType">Type d'entreprise</label>
                <select id="inputType" class="form-control">
                    <option selected>Type...</option>
                    <option>ESN</option>
                    <option>Start Up</option>
                    <option>Editeur</option>
                    <option>Autre</option>
                </select>
            </div>
            <div class="form-group col-md-6">
                <label for="inputContact">Contact</label>
                <input type="text" class="form-control" id="inputContact" placeholder="Nom du contact">
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Create</button>
        </div>
		</form>	
		<button id="exitAdmin" type="button" class="btn btn-primary">Exit</button>
	</div>`

const mapHtml = `<div class="container-fluid">
<div class="row">
	<div class="col-12">
		<div id="map"></div>
		<div id="legend"><h3>Legend</h3></div>
	</div>
</div>
</div>
<!--map end-->

<!--Main menu-->
<div class="container-fluid">
<div class="row">
	<input type="checkbox" id="smashMe"/>
	<label for="smashMe"><div class="btnBurger"></div></label>
	<div class="menu">
		<a href="#" class="kesako">kesako?!</a>
		<a href="#" class="ecole">L'école</a>
	<div>      
</div>
</div>
<!--Main menu end-->

<!--sidebar-->
<div class="container">
<div class="row">
	<div class="sidepanel">
		<div class="sidemenu">
			<nav>
				<ul>
					<li>
						<a class="payTone" href="#">écosystème</a>
					</li>
					<li>
						<a class="payTone" href="#">entreprises</a>
					</li>
				</ul>
			</nav>
			<div class="social">
				<a id="adminPage" href="/admin">
					<img src="img/Rond_gris.png" alt"">
				</a>
				<a href="https://www.facebook.com/wildcodeschool" target="_blank">
					<img src="img/SocialMediaIcons/Facebook/Facebook.png" alt="">
				</a>
				<a href="https://www.instagram.com/wildcodeschool/" target="_blank">
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
</div>
<!--sidebar end-->

<!--filter-->
<div class="container">
<div class="row">
	<input type="checkbox" id="clickMe"/>
	<div class="col-5 col-sm-4 col-md-3 col-lg-2 filter">
		<label for="clickMe"><div class="arrow"></div></label>
	</div>
</div>
<div class="row">
	<label for="clickMe">
		<div class="btnFilter">
			<div class="reduce"></div>
			<div class="full"></div>
		</div>
	</label>
</div>
</div>`

mainDiv.innerHTML = mapHtml


const adminInter =  document.getElementById('adminPage')
adminInter.addEventListener('click', event => {
	event.preventDefault()   
	mainDiv.innerHTML = adminHtml
})

const mapInter = document.getElementById('exitAdmin')
mapInter.addEventListener('click', event => {
	event.preventDefault()
	mainDiv.innerHTML = mapHtml
})