
# Projet
Je veux faire connaître une application web (de type SAAS) qui proposera la création et la révision de notes.

# Caractéristiques
- La proposition de valeur : "Les notes faites pour être revues".
- Le nom de l'application : NotyLoops.
- L'application est disponible en anglais et en français, sur 2 sous-domaines distincts.
- Elle a un design simple, minimaliste et moderne. C'est une application web entièrement responsive. Elle est donc compatible sur tous les navigateurs et sur tous les écrans.
- Elle ne propose pas uniquement de la répétition espacée (voir ci-dessous).
- Le modèle de l'application est du freemium. Un utilisateur gratuit a accès un nombre limité de fonctionnalités. Un utilisateur payant (premium) a accès à toutes les fonctionnalités.

# Fonctionnalités

## Notes
- Dans chaque note, il est possible d'ajouter un nombre illimité de blocs.
- Il existe 4 types de blocs :
-- un bloc texte, qui permet d'ajouter du texte au format normal, markdown ou HTML. On peut également écrire des formules mathématiques en Katex. A noter qu'il n'y a pas de "rich text editor", mais juste une zone de texte classique.
-- un bloc image, qui permet de téléverser une image.
-- un bloc audio, qui permet de téléverser un fichier audio.
-- un bloc "générer de l'audio à partir d'un texte", qui permet de générer de l'audio dans une langue au choix à partir d'un texte (synthèse vocale).
- La position de chaque bloc peut être changée avec des flèches.
- Il y a la possibilité de mettre un bloc en masqué, pour qu'il soit masqué lors des révisions. Un bouton "Afficher" permettra alors d'afficher le bloc de texte caché initialement.
- Il y a la possibilité d'indiquer qu'un bloc est un choix multiple. Les blocs consécutifs ayant cette option seront automatiquement présentés sous la forme de QCM lors des révisions. Une case permet également d'indiquer si la réponse est correcte ou non. PAr défaut, les blocs de type QCMs auront un ordre d'affichage aléatoire lors des révisions.

### Utilisateur gratuit
- Un utilisateur gratuit peut créer jusqu'à 250 notes.
- Un utilisateur ne peut ajouter que des blocs de type texte.

### Utilisateur premium
- Un utilisateur premium peut créer un nombre illimité de notes.
- Un utilisateur premium peut ajouter les 4 types de blocs en illimité. Le bloc "Synthèse vocal" est cependant limité à 500 caractères par texte, et à 10 000 caractères par utilisateur et par semaine. 

## Tags
- Un utilisateur, gratuit ou premium, peut créer un nombre illimité de tags.
- Il peut attribuer un nombre illimité de tags à des notes. Il peut également les enlever.

## Gestion des collections
- Un utilisateur peut créer un nombre illimité de collections de notes.
- Un utilisateur doit donner un titre à la collection.
- Un utilisateur peut sélectionner les notes de sa collection par tags de notes à inclure et/ou à exclure. Par défaut, sans tag inclus ou exclu, la collection prendra toutes les notes de l'utilisateur. Un utilisateur peut également choisir le type d'inclusion ou d'exclusion : et/ou.
- Un utilisateur peut déterminer les règles d'affichage des notes de la collection pour ses révisions :
-- par répétition espacée.
-- en mode éphéméride (1 note par jour).
-- au hasard.
-- par score du plus faible au plus élevé.
-- par dernière date de révision, de la plus ancienne à la plus récente.
-- par date de création, de la plus ancienne à la plus récente.
-- par ordre lexicographique des titres des notes.
-- par "super hasard" (une des 5 règles précédentes au hasard).

## Révisions des collections
- Sur la page collection, un encart "Répétition espacée" indique le nombre de notes éligibles à la répétition espacée qui doivent être revues aujourd'hui. Sinon, la date de la prochaine révision est indiquée.
- Sur la page collection, un encart "Ephéméride" indique le nombre de notes éligibles pour la révision de type éphéméride qui doivent être revues aujourd'hui. - Au niveau des collections qui n'ont pas la stratégie "répétition espacée", un bouton "revoir" permet d'aller vers la première note à revoir.
- Au niveau de chaque note à revoir, un bouton avec feedback négatif et un bouton avec feedback positif permet d'enregistrer le score en base de données puis de passer à la note suivante.
- Après la dernière note, une page de fin de session indique le nombre de notes revues ainsi que le score de maîtrise en pourcentage.

### Utilisateur gratuit
- Un utilisateur gratuit peut revoir en illimité ses collections, tant qu'il a moins de 250 notes.
- A la 250ème note, il ne peut plus faire de révision.

### Utilisateur premium
- Un utilisateur premium peut revoir ses collections en illimité.

## Collections publiques
- Un utilisateur premium peut avoir avoir accès à des collections de notes publiques.
- Il existe des collections gratuites et payantes.
- Un utilisateur premium peut voir le détail des notes des collections gratuites, et les copier gratuitement sur son compte.
- Un utilisateur peut acheter une collection payante s'il veut voir le détail des notes et s'il veut pouvoir les copier sur son compte.
- La copie des notes est "intelligente" : s'il y a un différentiel entre le nombre de notes publiques et le nombre des notes qu'il a copié de cette collection, un bouton "Compléter la collection" permettra de copier les notes nouvelles ou manquantes (qui auront été supprimées par l'utilisateur).

## Import/Export de notes
- Un utilisateur gratuit ou premium peut exporter les notes d'une collection dans un CSV.
- Seul un utilisateur premium peut importer des notes à partir d'un CSV.

# Monétisation
Je prévois 2 façons de faire de l'argent avec cette app :
1. avec les achats de comptes premium. Un utilisateur est premium pendant un an pour 60 €. Il n'y a pas de paiement automatique (pas d'abonnement).
2. avec la vente de collections payantes. Les collections payantes seront faites par moi sur les sujets que je maîtrise. Par la suite, elles pourront venir de consultants ou d'éditeurs de livres.

# Concurrents
Mes concurrents sont les applications web de flashcards et également, mais dans une moindre mesure, les applications de prise de notes:
- [Quizlet](https://quizlet.com/). Prix mensuel : 7,99 € ou 9,99 €. Prix annuel : 35,99 € ou 44,99 €.
- [Noji](https://noji.io/). Prix mensuel : 4,99 $. Prix annuel : 29,99 $.
- [Mochi](https://mochi.cards/). Prix mensuel : 6 $. Prix annuel : 60 $.
- [SmarterHumans.ai](https://smarterhumans.ai/). Prix annuel : 79 €.
- [Notejoy](https://notejoy.com/).
- [Obsidian](https://obsidian.md/).
- [UpNote](https://getupnote.com/).

# Options et stratégies d'acquisition d'utilisateurs

## Sponsoring de créateurs de contenu
- https://www.youtube.com/@guideorientation
- https://www.youtube.com/@loistalagrand
- https://www.youtube.com/@laurenspeakslanguages/

## Création et promotion de collections publiques
- Créer des collections publiques gratuites relatives à une thématique.
- Faire une vidéo YouTube pour promouvoir la thématique, en montrant les révisions des collections publiques par un compte premium.
- Faire une page dédiée sur le site pour promouvoir la thématique.
- Utiliser Google Ads pour promouvoir la page précédente.
- Les thématiques possibles : 
-- Examen AMF (inconnu pur moi).
-- Certificat Voltaire (dans mes compétences).
-- Test TAGE MAGE (globalement dans mes compétences).
-- Certificats CompTIA  (inconnu pur moi).
-- Exercices JavaScript (dans mes compétences).

## Comparaison avec les concurrents
- Créer des vidéos YouTube comparant NotyLoops à un concurrent. S'inspirer de vidéos de tutoriels existant déjà.
- Créer une page dédiée comparant NotyLoops à un concurrent.
- Utiliser Google Ads pour promouvoir la page précédente.

## Maisons d'édition
- Contacter les maisons d'éditions d'ouvrages scolaires pour le supérieur pour leur proposer de vendre leurs ouvrages sous forme de notes payantes. Format très adapté aux livres scolaires, en particulier ceux ayant des exercices.
- Contacter les maisons d'éditions qui publient des éphémérides pour leur proposer de vendre leurs ouvrages sous forme de note quotidienne.

## Backlinks
- Acheter régulièrement des backlinks sur linkuma.com.

**************************************************
**************************************************
**************************************************

# Pour les IA
Fais-moi tes retours sur le projet dont les détails sont en instructions. En particulier, sur les options et stratégies d'acquisition d’utilisateurs. Sois critique et challenge-moi pour m'aider à améliorer la viabilité, la profitabilité et les chances de succès du projet.

**************************************************
**************************************************
**************************************************

# Archives
- Viser étudiants de l'enseignement supérieur en France, en particulier les étudiants en classes préparatoires aux grandes écoles (CPGE).
- Faire 2 collections payantes de notes, une en anglais, l'autre en espagnol, pour les étudiants en CPGE. 2 à 3 notes par semaine, traitant de l'actualité marquante, avec pour chaque note : un texte de quelques phrases, les définitions des mots difficiles et un audio du texte. Ce serait une offre concurrente au magazine [Vocable](https://www.vocable.fr/).