<script setup>
const page_title = 'Pourquoi utiliser absolument les flashcards ?';

let meta_description = 'Découvrez comment les flashcards améliorent votre apprentissage grâce au rappel actif et à la répétition espacée.';
meta_description += ' Privilégiez les supports digitaux aux supports physiques.';

const breadcrumb_items = [
  {
    label: 'Ressources',
    to: '/ressources',
    url: 'https://fr.notyloops.com/ressources',
  },
  {
    label: 'Pourquoi utiliser absolument les flashcards ?',
  },
];

useSchema({
  name: page_title,
  description: meta_description,
  breadcrumb_items,
});

useSeoMeta({
  title: `${page_title} | NotyLoops`,
  description: meta_description,
});

// useGoogleTag();
</script>

<template>
  <!-- app/pages/ressources/flashcards.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Pourquoi utiliser absolument les flashcards ?
    </h1>

    <h2>
      Qu'est-ce qu'une flashcard ?
    </h2>

    <p class="mb-0">
      Une flashcard désigne un entraînement composé de 2 parties :
    </p>

    <ul class="list-disc list-inside">
      <li>
        un recto comportant une question ou un exercice;
      </li>
      <li>
        un verso comportant la réponse ou la solution.
      </li>
    </ul>

    <p class="mt-4">
      Les flashcards sont très répandues dans le monde anglo-saxon.
      Elles le sont beaucoup moins dans le monde francophone.
      Le terme de "flashcard" est souvent traduit par "carte-mémoire" ou "fiche de révision".
      Pourtant, ces termes ne reflètent pas totalement ce que sont les flashcards, à savoir des
      tests de révision.
    </p>

    <p class="mt-4">
      L'objectif d'un test de révision est de pouvoir se tester, ou plus précisément de pouvoir
      <strong>auto-évaluer sa maîtrise</strong> de connaissances, de techniques ou d'automatismes.
    </p>

    <p class="mt-4">
      De la même façon qu'un athlète de haut niveau se prépare à la compétition avec des exercices physiques,
      un étudiant ou un professionnel s'entraîne avec des flashcards.
    </p>

    <h2 class="mt-8">
      Pourquoi c'est efficace ?
    </h2>

    <p>
      Les flashcards sont efficaces car elles sollicitent un principe fondamental
      et incontournable de l'apprentissage :
      le principe du <strong>rappel actif</strong>,
      également connu sous le nom de principe de restitution ou principe du "feedback".
    </p>

    <p class="mt-4">
      Le principe est le suivant : la mémorisation est optimale lorsqu'on <strong>fait l'effort</strong>
      de se souvenir.
      Se rappeler activement surpasse toute autre méthode passive,
      quelle qu'elle soit : lecture, visionnage, surlignage.
      Notez bien que j'ai dit "surpasse" et non pas "remplace",
      car la mémorisation commence toujours par une méthode passive.
      Mais elle doit se poursuivre par des méthodes actives :
      répondre à une question sans regarder la réponse, réciter du texte sans regarder la source.
      La méthode active sollicite notre attention et nécessite une recherche dans notre mémoire.
    </p>

    <p class="mt-4">
      Les flashcards sont en ce sens une méthode active,
      car elles nous obligent à devoir répondre à des questions ou à résoudre des exercices sans aucune aide.
      Elles se rapprochent fidèlement des conditions d'une épreuve d'examen ou de concours,
      ce qui en fait un excellent outil pour mémoriser sur le long terme et créer des automatismes.
    </p>

    <h2 class="mt-8">
      La répétition espacée
    </h2>

    <p>
      L'un des grands avantages des flashcards, surtout en format digital,
      est qu'elles permettent d'appliquer le principe de la <strong>répétition espacée</strong>.
      Ce concept, basé sur la courbe de l'oubli d'Ebbinghaus,
      consiste à revoir l'information à des intervalles de temps croissants.
      Dans le monde francophone, la répétition espacée est souvent appelée "méthode des jours" ou "méthode des J".
    </p>

    <p class="mt-4">
      Concrètement, les flashcards que l'on "réussit" bien apparaissent moins fréquemment dans nos révisions,
      tandis que celles que l'on a du mal à mémoriser reviennent plus souvent.
      Cette méthode optimise notre temps d'étude en se concentrant sur ce qui n'est pas encore acquis,
      tout en consolidant les connaissances déjà apprises.
    </p>

    <p class="mt-4">
      En d'autres termes, la répétition espacée permet de minimiser le nombre de révisions "inutiles".
      Il s'agit d"une répétition optimisée, en contraste ave une répétition mécanique régulière.
    </p>

    <p class="mt-4">
      L'inconvénient de la répétition espacée est qu'elle conduit à avoir un nombre différent de flashcards à revoir chaque jour.
      Certains jours peuvent n'avoir aucun test alors que d'autres peuvent en avoir plusieurs dizaines.
    </p>

    <p class="mt-4">
      Note : si vous utilisez NotyLoops avec la répétition espacée,
      nous vous indiquons systématiquement la date de prochaine révision,
      contrairement à tous les autres outils du marché.
    </p>

    <h2 class="mt-8">
      Les supports
    </h2>

    <p>
      Il existe 2 types de supports pour les flashcards :
    </p>

    <ol class="list-decimal list-inside">
      <li>
        Le support physique.
        Il permet d'écrire les informations nécessaires sur du papier ou des fiches cartonnées.
      </li>
      <li>
        Le support digital.
        Il permet de taper ou d'insérer les informations directement
        dans une application à partir d'un écran d'ordinateur,
        de tablette ou de smartphone.
      </li>
    </ol>

    <h2 class="mt-8">
      Quel support choisir ?
    </h2>

    <p>
      De manière générale, si vous pouvez utiliser un support digital,
      faites-le car les révisions peuvent être suivies et automatisées facilement.
      De plus, les flashcards peuvent être présentés de manière aléatoire beaucoup plus facilement que les flashcards physiques.
    </p>

    <p class="mt-4">
      Le support digital convient sans problème pour les disciplines nécessitant
      uniquement des lettres ou des chiffres,
      sans autre syntaxe particulière.
      Ces caractères sont par défaut sur tous les claviers,
      et donc la création de fiches est simple et rapide.
      Cela concerne en particulier les étudiants et professionnels en formation dans les domaines suivants :
    </p>

    <ul class="list-disc list-inside">
      <li>
        lettres ;
      </li>
      <li>
        droit ;
      </li>
      <li>
        sciences humaines et sociales ;
      </li>
      <li>
        sciences politiques ;
      </li>
      <li>
        administration d'État, territoriale et hospitalière ;
      </li>
      <li>
        langues ;
      </li>
      <li>
        informatique.
      </li>
    </ul>

    <p class="mt-4">
      Pour les matières ayant recours à des dessins ou à de la syntaxe scientifique, il y a 2 possibilités :
    </p>

    <ol class="list-decimal list-inside">
      <li>
        Utiliser uniquement des flashcards physiques;
      </li>
      <li>
        Utiliser des flashcards digitales en ayant recours à des images
        pour représenter les notations scientifiques et les schémas.
        Le plus simple et le moins chronophage, dans ce cas, est de photographier des notes manuscrites.
      </li>
    </ol>

    <h2 class="mt-8">
      Les flashcards physiques
    </h2>

    <p>
      Les flashcards physiques sont très faciles à concevoir.
      Elles prennent généralement la forme de fiche en papier ou cartonnées idéalement au format A5
      (une feuille A4 pliée en 2) ou A6 (une feuille A4 pliée en 4).
    </p>

    <p class="mt-4">
      Comme conseillé par le
      <ULink
        to="https://sherpas.com/blog/flashcards-efficaces-reviser/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary"
      >blog des sherpas</ULink>,
      si vous voulez faire des fiches durables :
    </p>

    <ul class="list-disc list-inside">
      <li>
        achetez des fiches <strong>cartonnées</strong> (les fameuses fiches bristol);
      </li>
      <li>
        optez pour des fiches avec des <strong>bouts arrondis</strong>,
        pour éviter de les corner et de les abîmer avec le temps.
      </li>
    </ul>

    <p class="mt-4">
      Pour des fiches A5 classiques, vous pouvez opter pour
      <ULink
        to="https://www.amazon.fr/Exacompta-13203E-Fiches-Bristol-Blanc/dp/B001ANVBFO/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary"
      >la marque Exacompta</ULink>.
      Ce sont des fiches blanches à petits carreaux, non perforées et à bouts droits.
    </p>

    <p class="mt-4">
      Pour des fiches plus modernes, pouvant être facilement numérisées via smartphone grâce à l'application Scribzee,
      vous pouvez opter pour <ULink
        to="https://www.amazon.fr/Oxford-R%C3%A9vision-Fiches-bristol-carreaux/dp/B081KG4NXS/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary"
      >les fiches A5 petits carreaux de la marque Oxford</ULink>.
    </p>

    <p class="mt-4">
      Les fiches physiques permettent de créer tout type de flashcard, mais elles présentent un inconvénient majeur :
      il est difficile de simuler des révisions au hasard et de suivre l'assimilation de chaque fiche.
      Inconvénient qui n'existe pas pour les flashcards digitales.
    </p>

    <h2 class="mt-8">
      Applications de flashcards digitales
    </h2>

    <p>
      Ci-dessous, vous trouverez la liste des principales applications de flashcards digitales.
      Ces applications sont assez différentes les unes des autres.
      Mais, en essayant d'être le plus objectif possible, NotyLoops
      est l'outil le plus simple et le plus sobre, et donc le plus facile à utiliser.
      En tous cas, nous l'avons créé dans ce but.
    </p>

    <ul class="list-disc list-inside mt-4">
      <li>
        <ULink
          to="https://apps.ankiweb.net/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary"
        >
          Anki
        </ULink>
      </li>
      <li>
        <ULink
          to="/"
          class="text-primary"
        >
          NotyLoops
        </ULink>
      </li>
      <li>
        <ULink
          to="https://mochi.cards/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary"
        >
          Mochi
        </ULink>
      </li>
      <li>
        <ULink
          to="https://quizlet.com/fr"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary"
        >
          Quizlet
        </ULink>
      </li>
      <li>
        <ULink
          to="https://noji.io/fr/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary"
        >
          Noji (anciennement Anki Pro)
        </ULink>
      </li>
      <li>
        <ULink
          to="https://www.algoapp.ai/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary"
        >
          AlgoApp
        </ULink>
      </li>
      <li>
        <ULink
          to="https://smarterhumans.ai/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-primary"
        >
          SmarterHumans.ai
        </ULink>
      </li>
    </ul>

    <h2 class="mt-8">
      Comment créer des flashcards efficaces ?
    </h2>

    <p>
      La qualité de vos flashcards détermine en grande partie leur efficacité pour l'apprentissage.
      Voici quelques principes à suivre :
    </p>

    <ul class="list-disc list-inside">
      <li>
        <strong>Principe de l'atomicité</strong> ou <strong>principe de granularité</strong> :
        une flashcard = une information. Évitez de surcharger vos flashcards avec trop d'informations.
      </li>
      <li>
        <strong>Formulation précise</strong> : posez des questions claires qui appellent des réponses précises.
      </li>
      <li>
        <strong>Personnalisation</strong> : adaptez vos tests à votre façon de penser et à votre style d'apprentissage.
      </li>
      <li>
        <strong>Images et moyens mnémotechniques</strong> : utilisez des images ou des moyens mnémotechniques pour faciliter la mémorisation.
      </li>
      <li>
        <strong>Contexte</strong> : quand c'est pertinent, incluez le contexte d'application d'une connaissance.
      </li>
    </ul>

    <!-- <h2>
        Les pièges à éviter
      </h2>

      <p>
        La plupart des plateformes de "flashcards" digitales proposent de pouvoir utiliser des paquets de tests déjà tout faits.
        La tentation est grande de se dire que l'on gagne un temps précieux ainsi, mais sauf exception,
        cette technique est illusoire car on ne gagne pas vraiment de temps.
        Le processus de mémorisation doit être actif, et donc faire ses propres flashcards permet de commencer
        l'apprentissage et d'exercer une première fois sa capacité de rappel actif.
        En revanche, s'inspirer de flashcards existantes pour pouvoir créer les siens
        ou les modifier selon ses besoins est tout à fait normal.
      </p>

      <p>
        Faire des flashcards est une activité solitaire, mais pour faire de bons flashcards,
        encore faut-il savoir quelles sont les bonnes questions à se poser.
        C'est la raison pour laquelle il faut si pobbile solliciter les indications et conseils d'un professeur,
        d'un mentor ou d'une personne qui connaît la discipline que l'on étudie et qui pourra nous aiguiller
        sur ce qu'il est fondamental de retenir ou de savoir faire.
      </p> -->
  </UContainer>
</template>
