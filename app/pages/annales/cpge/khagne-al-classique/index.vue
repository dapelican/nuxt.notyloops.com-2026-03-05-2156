<script setup>
const page_title = 'Annales khâgne A/L classique';

let meta_description = 'Les annales de toutes les matières de prépas littéraires classiques.';
meta_description += ' Les sujets et rapports des dernières années.';

const breadcrumb_items = [
  {
    label: 'Annales',
    to: '/annales',
    url: 'https://fr.notyloops.com/annales',
  },
  {
    label: 'CPGE',
    to: '/annales/cpge',
    url: 'https://fr.notyloops.com/annales/cpge',
  },
  {
    label: 'khâgne A/L classique',
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
  <!-- app/pages/annales/cpge/khagne-al-classique/index.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales khâgne A/L classique
    </h1>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          to="/annales/cpge/khagne-al-classique/francais"
          class="text-primary"
        >
          Français
        </ULink>
      </li>
      <!-- <li>
        <ULink
          to="/annales/cpge/khagne-al-classique/histoire"
          class="text-primary"
        >
          Histoire
        </ULink>
      </li> -->
      <!-- <li>
        Langue ancienne :
        <ULink
          to="/annales/cpge/khagne-al-classique/langue-ancienne-latin"
          class="text-primary"
        >
          latin
        </ULink>
        ou
        <ULink
          to="/annales/cpge/khagne-al-classique/langue-ancienne-grec"
          class="text-primary"
        >
          grec
        </ULink>
      </li> -->
      <!-- <li>
        Langue vivante étrangère :
        <ULink
          to="/annales/cpge/khagne-al-classique/lve-allemand"
          class="text-primary"
        >
          allemand
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-classique/lve-anglais"
          class="text-primary"
        >
          anglais
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-classique/lve-arabe"
          class="text-primary"
        >
          arabe
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-classique/lve-chinois"
          class="text-primary"
        >
          chinois
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-classique/lve-espagnol"
          class="text-primary"
        >
          espagnol
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-classique/lve-italien"
          class="text-primary"
        >
          italien
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-classique/lve-japonais"
          class="text-primary"
        >
          japonais
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-classique/lve-polonais"
          class="text-primary"
        >
          polonais
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-classique/lve-portugais"
          class="text-primary"
        >
          portugais
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-classique/lve-russe"
          class="text-primary"
        >
          russe
        </ULink>
      </li> -->
      <!-- <li>
        Langue vivante B (BCE) :
        <ULink
          to="/annales/cpge/khagne-al-classique/lvb-allemand"
          class="text-primary"
        >
          allemand
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-classique/lvb-anglais"
          class="text-primary"
        >
          anglais
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-classique/lvb-arabe"
          class="text-primary"
        >
          arabe
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-classique/lvb-chinois"
          class="text-primary"
        >
          chinois
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-classique/lvb-espagnol"
          class="text-primary"
        >
          espagnol
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-classique/lvb-italien"
          class="text-primary"
        >
          italien
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-classique/lvb-japonais"
          class="text-primary"
        >
          japonais
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-classique/lvb-polonais"
          class="text-primary"
        >
          polonais
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-classique/lvb-portugais"
          class="text-primary"
        >
          portugais
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-classique/lvb-russe"
          class="text-primary"
        >
          russe
        </ULink>
      </li> -->
      <!-- <li>
        <ULink
          to="/annales/cpge/khagne-al-classique/philosophie"
          class="text-primary"
        >
          Philosophie
        </ULink>
      </li> -->
      <!-- <li>
        Option :
        <ul class="list-disc list-inside ml-4">
          <li>
            <ULink
              to="/annales/cpge/khagne-al-lsh/histoire-contemporaine"
              class="text-primary"
            >
              ___
            </ULink>
          </li>
        </ul>
      </li> -->
    </ul>
  </UContainer>
</template>
