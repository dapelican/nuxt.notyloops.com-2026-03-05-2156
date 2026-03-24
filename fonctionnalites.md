
# Projet
Je veux commercialiser une application en ligne (de type SAAS) qui proposera la création et la révision de notes.
Mon app est différente des offres concurrentes sur les points suivants : 
- Elle a un design simple, minimaliste et moderne. Elle a un comportement similaire sur tous les écrans. Pour les mobiles, l'application sera une progressive web app (PWA) (https://www.pwabuilder.com/ or https://capacitorjs.com/).
- Elle ne propose pas uniquement de la répétition espacée (voir détails dans la section "collections" ci-dessous).

# Concurrents
Mes concurrents sont les applications web de flashcards :
- [Quizlet](https://quizlet.com/). Prix mensuel : 7,99 € ou 9,99 €. Prix annuel : 35,99 € ou 44,99 €.
- [Noji](https://noji.io/). Prix mensuel : 4,99 $. Prix annuel : 29,99 $.
- [Mochi](https://mochi.cards/). Prix mensuel : 6 $. Prix annuel : 60 $.
- [SmarterHumans.ai](https://smarterhumans.ai/). Prix annuel : 79 €.

# Fonctionnalités

## notes - URLs : /manage-notes/*
- Un utilisateur peut créer un nombre limité ou illimité de notes.
- Dans chaque note, il est possible d'ajouter un nombre illimité de blocs.
- Il existe 4 types de blocs :
-- un bloc texte, qui permet d'ajouter du texte au format, normal, markdown ou HTML. Pour l'instant, il y a une zone de texte simple. Prévoir également que l'on puisse écrire des formules mathématiques en Katex. Peut-être faire évoluer en "rich text editor" (en fonction de la complexité technique). 
-- un bloc image, qui permet de téléverser une image.
-- un bloc audio, qui permet de téléverser un fichier audio. Limiter aux abonnés payants.
-- un bloc "générer de l'audio à partir d'un texte", qui permet de générer de l'audio dans une langue au choix à partir d'un texte.
- La position de chaque bloc peut être changée avec des flèches.
- Il y a la possibilité de mettre un bloc en masqué, pour qu'il soit masqué lors des révisions. Un bouton "Afficher" permettra alors d'afficher le bloc de texte caché initialement.
- Il y a la possibilité d'indiquer qu'un bloc est un choix multiple. Les blocs consécutifs ayant cette option seront automatiquement présentés sous la forme QCM lors des révisions. Une case permet également d'indiquer si la réponse est correcte ou non.

## tags - URLs : /manage-tags/*
- Un utilisateur peut créer un nombre illimité de tags.
- Il peut attribuer un nombre illimité de tags à des notes. Il peut également les enlever.

## collections (gestion) - URLs : /collections/*
- Un utilisateur peut créer un nombre illimité de collections de notes.
- Il doit donner un titre à la collection.
- Il peut sélectionner les notes de sa collection par tags de notes à inclure et/ou à exclure. Par défaut, sans tag inclus ou exclu, la collection prendra toutes ses notes. Il peut également choisir le type d'inclusion ou d'exclusion : et/ou.
- Il peut choisir entre différents types de collections : 
-- privée (type par défaut).
-- partagée.
-- payante.
-- publique.
- Il peut déterminer les règles d'affichage des notes de la collection pour ses révisions :
-- par répétition espacée.
-- en mode éphéméride (la note du jour).
-- au hasard.
-- par score du plus faible au plus élevé.
-- par dernière date de révision, de la plus ancienne à la plus récente.
-- par date de création, de la plus ancienne à la plus récente.
-- par ordre lexicographique des titres des notes.
-- par "super hasard" (une des 5 règles précédentes au hasard).
- Il peut donner une description à la collection.

## collections (revoir) - URLs : /review/*
- Sur la page collection, un encart répétition espacée indique le nombre de notes éligibles à la répétition espacée qui doivent être revues aujourd'hui. Sinon, la date de prochaine révision est indiquée.
- Au niveau des collections privées qui n'ont pas la stratégie "répétition espacée", un bouton revoir permet d'aller vers la première note à revoir.
- Au niveau de chaque note à revoir, un bouton avec feedback négatif et un bouton avec feedback positif permet d'enregistrer le score en base de données puis de passer à la note suivante.
- Après la dernière note, une page de fin de session indique le nombre de notes revues ainsi que le score de maîtrise en pourcentage.
- Pour les collections de type partagée, l'URL publique s'affiche au niveau de la collection.
- Pour les collections de type payante, l'URL publique s'affiche au niveau de la collection.
- Pour les collections de type publique, l'URL publique s'affiche au niveau de la collection.

## collections ouvertes - URLS : /pc/*
- Pour les collections de type partagée, mécanisme à définir. import/export ?
- Pour les collections de type payante, parcours à définir.
- Pour les collections de type publique, parcours à définir.
- Chaque page publique permet de copier toutes les notes de la collection publique vers le compte de l'utilisateur.
S'il y a un différentiel entre le nombre de notes publiques et le nombre des notes qu'il a copié de cette collection, un bouton "Compléter la collection" permettra de copier les notes nouvelles ou manquantes (qui auront été supprimées par l'utilisateur).

# Monétisation
Je prévois 2 façons de faire de l'argent avec cette app :
1. avec des abonnements mensuels et/ou annuels payés par les utilisateurs pour accéder à certaines fonctionnalités premium de l'app.
2. avec la vente de notes par des utilisateurs où l'utilisateur reçoit 90 % des revenus HT des ventes et 10 % restant me reviennent. L'utilisateur fixe le prix qu'il veut. L'idée est de faire une sorte de place de marché (à la Udemy) en étant hyper spécialisé au départ.

# Limites pour les utilisateurs gratuits
- Création de 50 notes maximum. Mais il pourra cependant toujours copier des notes de collections ouvertes.
- Pas d'accès au bloc image, audio ou générer de l'audio à partir d'un texte.
- Pas de création de collections partagées ou payantes.

# Prix de l'abonnement payant
- Prix mensuel : 7 €.
- Prix annuel : 70 €.

# Options et stratégies d'acquisition d'utilisateurs - 1
- Viser étudiants de l'enseignement supérieur en France, en particulier les étudiants en classes préparatoires aux grandes écoles (CPGE).
- Faire 2 collections payantes de notes, une en anglais, l'autre en espagnol, pour les étudiants en CPGE. 2 à 3 notes par semaine, traitant de l'actualité marquante, avec pour chaque note : un texte de quelques phrases, les définitions des mots difficiles et un audio du texte. Ce serait une offre concurrente au magazine [Vocable](https://www.vocable.fr/).
- Payer des youtubeurs qui font des vidéos sur les études supérieures pour qu'ils fassent la promotion du site. Viser en priorité les youtubeurs qui ont de petites audiences (moins de 1000 abonnés). Leur porposer un code de réduction pour les collections précédentes en anglais et en espagnol.
- Créer des vidéos courtes TikTok et Instagram Reels pour montrer la simplicité de l'application.

# Options et stratégies d'acquisition d'utilisateur - 2 (plus tard)
- Contacter les maisons d'éditions d'ouvrages scolaires pour le supérieur pour leur proposer de vendre leurs ouvrages sous forme de notes payantes. Format très adapté aux livres scolaires, en particulier ceux ayant des exercices.
- Contacter les maisons d'éditions qui publiquent des éphémérides pour leur proposer de vendre leurs ouvrages sous forme de note quotidienne.

# Pour Claude
Fais-moi tes retours sur projet dont les détails sont en instructions. En particulier, sur les options et stratégies d'acquisition d’utilisateurs. Sois critique et challenge-moi pour m'aider à améliorer la viabilité, la profitabilité et les chances de succès du projet. L'objectif est de faire 100 000 € de chiffre d'affaires par an.