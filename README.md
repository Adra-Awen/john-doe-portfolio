Créez un Portfolio avec REACT.JS

1. VOTRE MISSION
Votre mission, si vous l’acceptez, est de créer et de rendre fonctionnel le site internet d’un futur
développeur Web, comme vous : John DOE.
Il termine sa formation de développeur web au CEF et souhaite pouvoir se présenter sur le
marché de l’emploi.
Les contenus textuels qui vous sont présentés peuvent être modifiés et personnalisés selon vos
besoins. Toutefois, la charte graphique doit être respectée.
Des maquettes vous sont fournies, ainsi qu’un dossier avec des images libres de droits, issues
du site de Pixabay.
Vous pouvez remplacer certaines images par les vôtres, comme la photo de la section « à
propos » et les maquettes de vos réalisations.
Le site doit être travaillé pour le SEO.
Le code doit être valide au regard des normes du W3C.

2. LE CLIENT
John Doe, en formation de développeur web et a besoin d’un site internet pour se présenter
sur le marché de l’emploi et rechercher un emploi en alternance.
Son site est développé en HTML, CSS, avec l’utilisation du framework Bootstrap.
Vous devrez cependant ajouter un minimum de CSS personnalisé, en particulier pour les effets
graphiques.
John Doe souhaite que le site soit développé en utilisant REACT et qu'une utilisation régulière
de GitHub lui permette de suivre l'avancée du projet.

3. L'IDENTITE GRAPHIQUE
3.1. Polices
La police choisie est une police Google, sans-serif, dénommée « Nunito Sans ». Elle est
implémentée avec une graisse de 400 pour le corps du texte et de 600 pour les titres et les
balises <strong>.
Les icônes utilisées sur les maquettes sont celles de Bootstrap : https://icons.getbootstrap.com/

3.2. Images
Les images sont fournies en annexe.

3.2.1. Logo
Il s’agit d’un logo textuel, qui sera repris dans la zone navbar-brand de la barre de navigation
de Bootstrap.

3.2.2. Favicon
Le favicon est disponible sur le site Flaticon : https://www.flaticon.com/de/kostenloseicons/john-doe

3.3. Palette de couleurs
Les couleurs utilisées sur les maquettes sont celles disponibles avec Bootstrap, sans
personnalisation : https://getbootstrap.com/docs/5.2/customize/color/

4. LIVRABLE ATTENDU
Le livrable attendu est un lien vers le repository GitHub contenant le code du projet.
Le projet contiendra :

4.1. Contenu des pages
 1 Page d'accueil
o Une image de fond en pleine page (Hero),
o Des balises h1 et h2 centrées horizontalement par rapport à l'image,
o Un bouton "En savoir plus" (voir § La Modale),
o Une section contenant la présentation de John Doe et la liste de ses compétences
(progress bar Bootstrap),

 1 page de services
o La présentation des offres de services que John Doe propose (sous forme de Card
Bootstrap),
o Chaque Card doit changer de couleur de fond (#efefef) et voir une légère ombre
sur son pourtour au survol,
o La disposition des Cards en fonction du media de visualisation est celui des
maquettes fournies,

 1 page réalisations
o Le portfolio de John Doe, avec un minimum de 6 projets, présentés sous forme
de Card Bootstrap. Vous pouvez personnaliser et ajouter des réalisations si vous
le souhaitez,
o Chaque Card doit changer de couleur de fond (#efefef) et voir une légère ombre
sur son pourtour au survol,
o Le couleur de fond du bouton doit s'éclaircir légèrement au survol de celui-ci,
o La disposition des Cards en fonction du media de visualisation est celui des
maquettes fournies,

 1 page de contact
o Un formulaire de contact intégrant les champs nom, courriel, numéro de
téléphone, sujet et message (tous obligatoires).
o Les coordonnées de John Doe : adresse, numéro de téléphone, mail et Google
Map,

 1 page avec les mentions légales
o L’éditeur du site,
o L’hébergeur du site,
o Les crédits, avec un lien vers le site de Pixabay pour les images et vers Flaticon
pour le favicon,
o La mise en page est réalisée en utilisant le composant accordéon de Bootstrap,
o Cette page ne doit pas être indexée par les moteurs de recherche.

4.2. Sur tout le site
 Le header
o Le header est présent sur toutes les pages,
o Il reprend le logo à gauche et la navigation vers les pages à droite. Sur mobile et
tablette, la navigation s’affiche sous forme d’icône de « hamburger »,
o L’élément actif doit pouvoir être affiché dans une autre couleur ou nuance
(https://reactrouter.com/en/main/components/nav-link),
o Le texte des hyperliens est affiché en majuscule, en utilisant des règles CSS ou
une classe Bootstrap,

 Le footer
o Le footer est identique sur toutes les pages,
o Il contient des colonnes de largeur égale :
o La 1ère avec le nom du développeur, son adresse, son numéro de téléphone et les
icônes vers ses réseaux professionnels (Github, Twitter et LinkedIn),

 Les icônes doivent être cliquables et mener vers les comptes que John
Doe possède sur les différents réseaux. Leur couleur doit s’éclaircir au
survol,

 Les liens doivent s’ouvrir dans une nouvelle fenêtre et ne doivent pas être
suivis pour le SEO,
o La 2ème colonne reprend les liens vers les différentes pages,
o La 3ème colonne reprend les liens vers les dernières réalisations (tant que les
contenus de chaque réalisation ne sont pas disponibles, le lien se fera sur la page
Portfolio,

 La modale
o Une fenêtre modale doit permettre de présenter des éléments du profil GitHub
de John Doe. Cette modale sera ouverte au clic sur le bouton "En savoir plus" du
Hero de la page d'accueil,
o Les informations sont disponibles ici : https://api.github.com/users/github-johndoe, Si vous préférez utiliser les informations de votre propre profil, libre à vous,
o Les informations ne doivent être récupérées qu'une fois, au moment du
chargement de la page (pensez à utilise le hook useEffect).

4.3. Effets graphiques
Les effets suivants sont demandés (CSS) :
 Dans le menu du header
o Le lien actif doit être mis en évidence (gras + souligné),
o Les liens doivent être soulignés au survol,

 Cards
o Une ombre doit être appliquée autour de la Card au survol,
o La couleur de fond de la Card doit être modifiée au survol de la Card,

 Boutons
o La couleur de fond des boutons doit s'assombrir au survol,

 Pied de page
o Les images des réseaux sociaux doivent devenir blancs au survol,
o Les liens du pied de page doivent passer en gras au survol.
N'hésitez pas à utiliser des transitions CSS.

4.4. Quelques conseils
Ce projet mobilise principalement deux compétences : Bootstrap et React. Sans un minimum
d'organisation, vous risquez rapidement de vous perdre.

 Commencez par étudier les maquettes fournies :
o Repérez les différences entre les 3 formats d'affichage,
o Identifiez les parties qui peuvent être réalisées avec des composants réutilisables,
o Réfléchissez aux imbrications possibles.

 En partant de l'étude des pages et des composants identifiés, réfléchissez à une structure
de fichiers (arborescence) pratique afin d'éviter que tous vos composants se retrouvent
dans le même dossier,

 Imaginez l'ordre dans lequel vous allez traiter les différents points et établissez un
ordonnancement des tâches : cela vous donnera une base pour créer des issues sur
GitHub v






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
