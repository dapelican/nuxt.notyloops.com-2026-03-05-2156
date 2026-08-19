<script setup>
const page_title = 'Annales khâgne B/L';

let meta_description = 'Les annales de toutes les matières de prépas littéraires B/L.';
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
    label: 'Khâgne B/L',
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
  <!-- app/pages/annales/cpge/khagne-bl/index.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales khâgne B/L
    </h1>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          to="/annales/cpge/khagne-bl/francais"
          class="text-primary"
        >
          Français
        </ULink>
      </li>
      <li>
        <ULink
          to="/annales/cpge/khagne-bl/histoire"
          class="text-primary"
        >
          Histoire
        </ULink>
      </li>
      <li>
        <ULink
          to="/annales/cpge/khagne-bl/mathematiques"
          class="text-primary"
        >
          Mathématiques
        </ULink>
      </li>
      <li>
        <ULink
          to="/annales/cpge/khagne-bl/philosophie"
          class="text-primary"
        >
          Philosophie
        </ULink>
      </li>
      <li>
        <ULink
          to="/annales/cpge/khagne-bl/sciences-sociales"
          class="text-primary"
        >
          Sciences sociales
        </ULink>
      </li>
      <!-- <li>
        Option :
        <ul class="list-disc list-inside ml-4">
          <li>
            <ULink
              to="/annales/cpge/khagne-bl/option-geographie"
              class="text-primary"
            >
              Géographie
            </ULink>
          </li>
          <li>
            <ULink
              to="/annales/cpge/khagne-bl/option-grec"
              class="text-primary"
            >
              Grec
            </ULink>
          </li>
          <li>
            <ULink
              to="/annales/cpge/khagne-bl/option-latin"
              class="text-primary"
            >
              Latin
            </ULink>
          </li>
          <li>
            Langue vivante étrangère :
            <ULink
              to="/annales/cpge/khagne-bl/option-lve-allemand"
              class="text-primary"
            >
              Allemand
            </ULink>
            |
            <ULink
              to="/annales/cpge/khagne-bl/option-lve-anglais"
              class="text-primary"
            >
              Anglais
            </ULink>
            |
            <ULink
              to="/annales/cpge/khagne-bl/option-lve-arabe"
              class="text-primary"
            >
              Arabe
            </ULink>
            |
            <ULink
              to="/annales/cpge/khagne-bl/option-lve-chinois"
              class="text-primary"
            >
              Chinois
            </ULink>
            |
            <ULink
              to="/annales/cpge/khagne-bl/option-lve-espagnol"
              class="text-primary"
            >
              Espagnol
            </ULink>
            |
            <ULink
              to="/annales/cpge/khagne-bl/option-lve-grec-moderne"
              class="text-primary"
            >
              Grec moderne
            </ULink>
            |
            <ULink
              to="/annales/cpge/khagne-bl/option-lve-hebreu"
              class="text-primary"
            >
              Hébreu
            </ULink>
            |
            <ULink
              to="/annales/cpge/khagne-bl/option-lve-italien"
              class="text-primary"
            >
              Italien
            </ULink>
            |
            <ULink
              to="/annales/cpge/khagne-bl/option-lve-japonais"
              class="text-primary"
            >
              Japonais
            </ULink>
            |
            <ULink
              to="/annales/cpge/khagne-bl/option-lve-polonais"
              class="text-primary"
            >
              Polonais
            </ULink>
            |
            <ULink
              to="/annales/cpge/khagne-bl/option-lve-portugais"
              class="text-primary"
            >
              Portugais
            </ULink>
            |
            <ULink
              to="/annales/cpge/khagne-bl/option-lve-russe"
              class="text-primary"
            >
              Russe
            </ULink>
          </li>

        </ul>
      </li> -->
    </ul>
  </UContainer>
</template>
