
## Projet et concurrents
Je veux commercialiser une application en ligne (de type SAAS) qui proposera la création et la révision de notes.
Mon app est différente des offres concurrentes sur les points suivants : 
- Elle a un design beaucoup plus simple et minimaliste. Elle a un light/dark mode, et aura un comportement similaire sur tous les écrans. Pour les mobiles, l'application sera une progressive web app, disponilbe sur l'App stoer et Google Play Store.
- Elle ne propose pas uniquement de la répétition espacée.

Mes concurrents sont les applications web de flashcards :
- [Quizlet](https://quizlet.com/). Prix annuel : 35,99 $.
- [Noji](https://noji.io/). Prix annuel : 29,99 $.
- [Mochi](https://mochi.cards/). Prix mensuel : 5 $.
- [SmarterHumans.ai](https://smarterhumans.ai/). Prix annuel : 79 €.

## Monétisation
Je prévois 2 façons de faire de l'argent avec cette app :
1. avec des abonnements mensuels et/ou annuels payés par les utilisateurs pour accéder à certaines fonctionnalités premium de l'app.
2. avec la vente de notes par des utilisateurs où l'utilisateur reçoit 90 % des revenus HT des ventes et 10 % restant me reviennent. L'utilisateur fixe le prix qu'il veut. L'idée est de faire une sorte de place de marché (à la Udemy) en étant hyper spécialisé au départ.

## Arbitrages à faire

### Quelles fonctionnalités premium prévoir ?
Actuellement : 
- Pouvoir ajouter une image, un fichier audio ou fichier audio généré à partir de texte dans les notes.
- Pouvoir réviser les notes par ordre aléatoire et ordre optimisé.
- Pouvoir partager une collection de notes à plus de 2 personnes.
- Pouvoir vendre des collections.

### Quel prix pour l'abonnement ?

### Vérifier les notes qui sont vendues ou permettre à n'importe qui de vendre des notes ?

## Les options de conquête d'utilisateurs
- Faire une collection de notes en anglais et espagnol pour les étudiants en CPGE.
Une note quotidienne avec un texte de quelques phases sur une actualité, les définitions des mots difficiles. et un audio du texte.
Je pense que l'offre de place de marché peut être assez différentiente sur le marché francophone.
En particulier, je pourrais même contacter des maisons d'éditions spécialisées dans les ouvrages scolaires pour leur proposer de vendre leurs ouvrages en notes.
Je pensais également faire une offre concurrente au magazine [Vocable](https://www.vocable.fr/).

# Fonctionnalités

## notes - URLs : /manage-notes/*
- Un utilisateur gratuit peut créer un nombre illimité de notes.
- Dans chaque note, il est possible d'ajouter un nombre illimité de blocs.
- Il existe 4 types de blocs :
-- un bloc texte, qui permet d'ajouter du texte au format, normal, markdow ou HTML. Pour l'instant, il y une zone de texte simple. Peut-être faire évoluer en "rich text editor" (en fonction de la complexitéé technique). Prévoir également que l'on puisse écrire des formules mathématiques en Katex.
-- un bloc image, qui permet de téléverser une image.
-- un bloc audio, qui permet de téléverser un fichier audio. Limiter aux abonnés payants.
-- un bloc "générer de l'audio à partir d'un texte", qui permet de générer de l'audio dans une langue au choix à partir d'un texte.
- La position de chaque bloc peut être changée avec des flèches.
- Il y a la possiblité de mettre un bloc en masqué, pour qu'il soit masqué lors des révisions. Un bouton "Afficher" permettra alors d'afficher le bloc de texte caché initialement.
- Il y a la possibilité d'indiquer qu'un bloc est un choix multiple. Les blocs consécutifs ayant cette option seront automatiquement présentés sous la forme QCM lors des révisions. Une case permet également d'indiquer si la réponse est correcte ou non.

## tags - URLs : /manage-tags/*
- Un utilisateur peut créer un nombre illimité de tags.
- Il peut attribuer un nombre illimité de tags à des notes. Il peut également les enlever.

## collections (gestion) - URLs : /collections/*
- Un utilisateur peut créer une collection de notes. Limiter à une collection pour les utilisateurs gratuits.
- Il doit donner un titre à la collection.
- I doit donner une description à la collection.
- Il peut sélectionner les tags à inclure et ou exclure pour sa collection. Par défaut, sans tag inclus ou exclu, la collection prendra toutes ses notes.
- Il peut désactiver le tracking du score de maîtrise pour la collection. Par défaut, il est activé. Lors des révisions, l'utilisateur peut choisir en un bouton "à revoir" et "je maîtrise" pour passer à la note suivante. "Je maîtrise" rajoute automatiquement +1 au score de la note revue.
- Il peut afficher ou masquer les titres des notes lors des révisions. Par défaut, les titres sont cachés.
- Il peut déterminer un ordre d'affichage des notes par défaut pour ses révisions : 
-- par ordre de création.
-- par ordre lexicographique des titres des notes.
-- par score de maîtrise.
-- par répétition espacée.
- Il peut garder sa collection privée (choix par défaut).
- Il peut mettre sa collection en accès contrôlé (tribal_collection). Limiter à 2 personnes le partage d'une collection pour les utilisateurs gratuits. L'URL publique peut alors être partagée. Un utilisateur pourra demander un accès à cette collection par envoi de formulaire au propriétaire de la collection (avec adresse e-email du compte et informations de contrôle). Prévoir une table spécifique pour gérer cela "tribal_collections".
- Il peut mettre sa collection en vente. Il détermine un prix de vente et il recevra 90 % des revenus HT. Prévoir une table "purchased_collections".
- Il peut mettre sa collection publique.

## collections (revoir) - URLs : /r/*
- La page présente un onglet replié avec la stratégie préalablement choisie. Mais l'utilisateur peut la changer à nouveau.
- Un bouton "Revoir" permet de revoir les notes de la collection, l'une après l'autre.
- Une liste des notes avec les titres est disponible.
- Sur une page de note spécifique, prévoir un bouton "Ajouter à mes notes" pour copier cette note.