This project was created with [Create React App](https://github.com/facebook/create-react-app).
## Les outils nécessaires
### node.js
### npm
## Commandes disponibles

Dans ce repertoire vous pouvez lancer ces différentes commandes
Avant de lancer la commande pour executer le projet, il suffit de lancer la commande `yarn install`
### `yarn start`

Lance l'application en mode developpement.\
Il suffit d'ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur web pour l'executer.

La page se recharge a chaque modification des fichiers.\


### `yarn install`
### `yarn init`

# Architecture du projet

On fait le choix de développer le projet sur une application React.

React nous permet de gérer les interactions utilisateurs avec la page,
il s'occupe du DOM et de l’affichage traité en “backend” par React de nos data-visualisation.

L’architecture de notre projet se décompose en 3 :

-Un dossier node/:
Ce dossier contient les fichiers relatifs au lancement du serveur Node.

-Un dossier public/ :
Ce dossier contient les données (pour les statistiques et l’affichage de la carte), les images du site, ainsi qu’un fichier html permettant l’ajout d’éléments sur le DOM par React.

-Un dossier src/ :
Ce dossier est le noyau de
notre application, il contient un dossier
components/ où se trouvent les différents composants React. C’est à l'intérieur de ces composants React que nous traitons les données avec D3 et généreront les visualisations.
Il contient le dossier pages/ permettant l'affichage des différentes pages (Souvent des regroupements de composants), différents dossiers pour les médias (images, vidéos, etc..).
Il contient aussi le fichier index.js qui appelle au lancement du serveur le composants App.js permettant l’affichage du site.



