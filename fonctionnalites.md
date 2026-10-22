
# Projet
- NotyLoops est une application web (de type SAAS) qui propose la création et la révision de notes.
- La proposition de valeur : "Les notes faites pour être revues".
- Le nom de l'application : NotyLoops.
- L'application est disponible en français, sur un domaine en fr. Elle sera par la suite disponible en anglais, sur le sous-domaine en www.
- Elle a un design simple, minimaliste et moderne. C'est une application web entièrement responsive. Elle est donc compatible sur tous les navigateurs et sur tous les écrans.
- Le modèle de l'application est du freemium. Un utilisateur gratuit a accès un nombre limité de fonctionnalités. Un utilisateur payant (premium) a accès à toutes les fonctionnalités.
- Le prix de l'abonnement premium est de 6 €/mois ou 60 € / an.
- Les différences sont listées sur la page /prix.

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
- Il y a la possibilité d'indiquer qu'un bloc est un choix multiple. Les blocs consécutifs ayant cette option seront automatiquement présentés sous la forme de QCM lors des révisions. Une case permet également d'indiquer si la réponse est correcte ou non. Par défaut, les blocs de type QCMs auront un ordre d'affichage aléatoire lors des révisions.

### Utilisateur gratuit
- Un utilisateur gratuit peut créer jusqu'à 100 notes.
- Un utilisateur gratuit ne peut ajouter que des blocs de type texte.
- Un utilisateur gratuit peut réviser en illimté ses notes tant qu'il n'en n'a pas plus de 100.
- Un utilisateur peut revoir et copier des notes issues de collections "public_without_account" et "public_free".
- Un utilisateur gratuit peut exporter les notes d'une collection dans un CSV.

### Utilisateur premium
- Un utilisateur premium peut créer un nombre illimité de notes.
- Un utilisateur premium peut ajouter les 4 types de blocs en illimité. Le bloc "Synthèse vocal" est cependant limité à 500 caractères par texte, et à 10 000 caractères par utilisateur et par semaine.
- Un utilisateur premium peut revoir et copier des notes issues de collections "public_without_account", "public_free" et "public_premium".
- Un utilisateur premium peut acheter des notes issues de collections "public_paywalled".
- Un utilisateur premium peut exporter les notes d'une collection dans un CSV.
- Un utilisateur premium peut importer des notes depuis un CSV.

## Tags
- Un utilisateur, gratuit ou premium, peut créer un nombre illimité de tags.
- Il peut attribuer un nombre illimité de tags à des notes. Il peut également les enlever.

## Gestion des collections
- Un utilisateur peut créer un nombre illimité de collections de notes.
- Un utilisateur doit donner un titre à la collection.
- Un utilisateur peut sélectionner les notes de sa collection par tags de notes à inclure et/ou à exclure. Par défaut, sans tag inclus ou exclu, la collection prendra toutes les notes de l'utilisateur. Un utilisateur peut également choisir le type d'inclusion ou d'exclusion : et/ou.
- Un utilisateur peut déterminer les règles d'affichage des notes de la collection pour ses révisions :
-- par répétition espacée.
-- au hasard.
-- par score du plus faible au plus élevé.
-- par hasard et par score du plus faible au plus élevé.
-- par dernière date de révision, de la plus ancienne à la plus récente.
-- par date de création, de la plus ancienne à la plus récente.
-- par ordre lexicographique des titres des notes.
-- en mode éphéméride (1 note par jour).

## Révisions des collections
- Sur la page collection, un encart "Répétition espacée" indique le nombre de notes éligibles à la répétition espacée qui doivent être revues aujourd'hui. Sinon, la date de la prochaine révision est indiquée.
- Sur la page collection, un encart "Ephéméride" indique le nombre de notes éligibles pour la révision de type éphéméride qui doivent être revues aujourd'hui.
- Au niveau des collections qui n'ont pas la stratégie "répétition espacée", un bouton "revoir" permet d'aller vers la première note à revoir.
- Au niveau de chaque note à revoir, un bouton avec feedback négatif et un bouton avec feedback positif permet d'enregistrer le score en base de données puis de passer à la note suivante.
- Après la dernière note, une page de fin de session indique le nombre de notes revues ainsi que le score de maîtrise en pourcentage.

## Collections publiques
- Un utilisateur premium peut avoir avoir accès à des collections de notes publiques.
- Il existe 4 types de collections:
-- "public_without_account".
-- "public_free".
-- "public_premium".
-- "public_paywalled".
- Les collections "public_premium" réservent le détail de toutes leurs notes aux utilisateurs premium. La colonne "preview_note_id_list" n'y ouvre aucune note.
- Les collections "public_paywalled" dévoilent le détail des notes listées dans la colonne "preview_note_id_list" à tout visiteur, avec ou sans compte. Le détail des autres notes est réservé aux utilisateurs qui ont acheté la collection.
- La copie des notes est "intelligente" : s'il y a un différentiel entre le nombre de notes publiques et le nombre des notes qu'un utilisateur a copié de cette collection, un bouton "Compléter la collection" permettra de copier les notes nouvelles ou manquantes (qui auront été supprimées par l'utilisateur).
