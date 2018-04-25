# Roadmap WildJob 25/04 - 04/05

## Schéma BDD

* Mineur : renommer les clés primaires des tables. Par convention on utilise en général `id` tout court comme clé primaire. Donc:
* Avant de se lancer dans ce renommage, simplification du schéma
    * L'actuelle table `Entite` disparaît. Comme elle sert essentiellement à stocker le *type* (ESN, Startup...), on peut faire ce stockage directement dans la table `Contact`.
    * La table `Contact` est à renommer en `Entite`. Changements dans cette table:
        * renommer `idContact` en `id`
        * ajouter une colonne `nomContact` de type `VARCHAR` (longueur à déterminer mais 45 comme pour les autres paraît assez)
        * ajouter une colonne `type` correspondant au `type` de l'ancienne table `Entite`. Les systèmes SQL comme MySQL ont un type `enum` qui permet de prédéfinir un certain nombre de valeurs possibles. Par exemple ENUM('ESN', 'Startup') si on voulait juste deux types. Outre les types d'entreprise, on pourrait y mettre les types liés à l'écosystème : Incubateur, Coworking, etc. Ensuite dans le code JS, le choix du filtre "écosystème" ou "entreprise" fera qu'on va chercher, dans la BDD, toutes les entités "entreprise" (donc type='ESN' OU type='Startup', etc.) ou toutes les entités "écosystème" (type='Incubateur' OU type='Coworking', etc.). Une autre possibilité (qui faciliterait le filtrage) serait d'avoir un ENUM pour un "type général" (Entreprise ou Ecosystème) puis un sous-type (ESN, Startup pour une Entreprise, etc.)
        **NOTE** : si on voulait prendre en compte les entités qui ont différent types... cela concerne moins les entreprises (on est en général ESN ou startup, pas les deux), par contre les lieux de l'écosystème peuvent être à la fois incubateur et coworking... ce serait faisable mais rendrait la chose plus complexe. On devrait garder une table `TypeEntite` (l'ancienne table `Entite` en fait), et il y aurait une relation "plusieurs à plusieurs" entre entité, avec une table de jointure ou table pivot (un type peut être associé à plusieurs entités, une entité à plusieurs types). **On peut simplifier et mettre le type principal de l'entité**.
        * On peut supprimer la table `Region` et mettre aussi une colonne de type ENUM dans `Entite` avec juste 5 valeurs (Nord-Ouest, Nord-Est, Sud-Ouest, Sud-Est, IdF-Centre)
        * De même toutes les infos de `Lieu` pourraient être aussi dans `Entite`. Sans oublier `latitude` et `longitude` qui doivent être des colonnes de type `FLOAT`.
        * Enfin pour les contrats. Plutôt que d'avoir une table `Contrat` on pourrait là aussi mettre ces infos dans l'entité directement. 4 colonnes `nbStage`, `nbCDI`, `nbCDD`, `nbAlternance`, avec des champs correspondants dans le formulaire d'admin, pour renseigner le nombre d'élèves par type de contrat. A voir si c'est pratique côté utilisation, mais côté schéma de DB ça serait simple.

## Backend

### Liste des routes

* login / authentification de l'Administrateur
* logout
* création entité
* mise à jour entité
* effacement entité
* recherche entité par nom
* lecture des marqueurs. Recherche entité par:
    * zone géographique, voir partie frontend ci-dessous pour plus de détails, mais côté serveur, une fois qu'on aura récupéré les paramètres de latitude et longitude qui délimitent un rectangle, on peut faire une requête SQL pour avoir les marqueurs dont la latitude est comprise entre les latitudes min et max, et la longitude est comprise entre les longitudes min et max, ces quatre variables étant envoyées en paramètre par le client.
    * type

### Dans les routes

* Accès DB avec INSERT (création), SELECT (lecture), UPDATE (màj), DELETE
* Accès APIs Google
    * Geocode (recherche entreprise par nom et ville dans un certain rayon en km).
    * [Places](https://developers.google.com/places/documentation/). Format d'URL à respecter: https://maps.googleapis.com/maps/api/place/nearbysearch/json?parameters les `parameters` devant obligatoirement inclure `key`, `location` (latitude et longitude d'un point central comme une ville), `radius` (rayon en mètres, prendre 15000 ou 20000 pour ratisser large). Enfin paramètre optionnel mais qu'il va falloir ici donner: `name` avec le nom de l'entité (s'il comporte des espaces ou autres caractères spéciaux, transformer ce paramètre avec la fonction `encodeURIComponent` native en JavaScript qui transforme les espaces en %20, etc.)
    * **Combiner les deux pour entrer l'adresse d'une entreprise dans la BDD**: d'abord https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCwC__7psOPTWbszU21xZvnsFL2XdrrpZk&address=Toulouse pour rechercher les coordonnées d'une ville (ça marche comme pour une adresse complete, on récupère latitude et longitude), puis **au retour de cette requête** une deuxième pour obtenir les adresses précises.

## Frontend

* Redécouper la fonction initMap()
    * Sortir les constantes qui ne vont pas bouger
    * Créer une fonction createMarkerAndInfo() qui prendra en paramètre un objet entité récupéré du backend
    * Dans cette fonction on fera 1/ la création du marqueur, 2/ la création de la popup d'infos associée
* Récupérer les marqueurs depuis l'URL du backend permettant de les lire dans la BDD. On doit pouvoir passer
en paramètre :
  * le type (écosystème ou entreprise)
  * les limites de la carte en latitude et longitude. Devant ce genre de problème, on se demande forcément "comment" ? C'est là qu'il faut devenir expert de la recherche Google, particulièrement en anglais. La bonne traduction de [limite](https://www.wordreference.com/fren/limite) en anglais est "boundary". Donc une recherche "get boundaries google maps" doit nous pointer dans la bonne direction. La [1ère réponse, sur StackOverFlow](https://stackoverflow.com/questions/6910847/get-boundaries-longitude-and-latitude-from-current-zoom-google-maps) permet de récupérer les dites limites (longitudes ouest et est, latitudes nord et sud). On envoie ça dans la requête de lecture marqueurs au backend.
* Pour éviter le clignotement quand on bascule entre "Entreprise" et "Ecosystème":
    * Au lieu de remplacer le innerHTML de mapWrapper comme on l'a fait, le laisser tel quel, mais créer une fonction
    qui permette d'effacer les marqueurs en s'inspirant de [cet exemple sur la doc](https://developers.google.com/maps/documentation/javascript/examples/marker-remove?hl=fr). En gros faire `marker.setMap(null)` sur un objet marqueur permet de l'effacer.

## Si on a le temps

* Séparer admin du reste ?
