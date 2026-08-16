<script setup>
const page_title = 'Annales khâgne A/L LSH';

let meta_description = 'Les annales de toutes les matières de prépas littéraires lshs.';
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
    label: 'khâgne A/L LSH',
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
  <!-- app/pages/annales/cpge/khagne-al-lsh/index.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales khâgne A/L LSH
    </h1>

    <ul class="list-disc list-inside">
      <li>
        <ULink
          to="/annales/cpge/khagne-al-lsh/francais"
          class="text-primary"
        >
          Français
        </ULink>
      </li>
      <!-- <li>
        <ULink
          to="/annales/cpge/khagne-al-lsh/geographie"
          class="text-primary"
        >
          Géographie
        </ULink>
      </li> -->
      <!-- <li>
        <ULink
          to="/annales/cpge/khagne-al-lsh/histoire"
          class="text-primary"
        >
          Histoire
        </ULink>
      </li> -->
      <!-- <li>
        Langue vivante étrangère :
        <ULink
          to="/annales/cpge/khagne-al-lsh/lve-allemand"
          class="text-primary"
        >
          allemand
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-lsh/lve-anglais"
          class="text-primary"
        >
          anglais
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-lsh/lve-arabe"
          class="text-primary"
        >
          arabe
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-lsh/lve-chinois"
          class="text-primary"
        >
          chinois
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-lsh/lve-espagnol"
          class="text-primary"
        >
          espagnol
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-lsh/lve-italien"
          class="text-primary"
        >
          italien
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-lsh/lve-japonais"
          class="text-primary"
        >
          japonais
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-lsh/lve-polonais"
          class="text-primary"
        >
          polonais
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-lsh/lve-portugais"
          class="text-primary"
        >
          portugais
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-lsh/lve-russe"
          class="text-primary"
        >
          russe
        </ULink>
      </li> -->
      <!-- <li>
        Langue vivante B (BCE) :
        <ULink
          to="/annales/cpge/khagne-al-lsh/lvb-allemand"
          class="text-primary"
        >
          allemand
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-lsh/lvb-anglais"
          class="text-primary"
        >
          anglais
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-lsh/lvb-arabe"
          class="text-primary"
        >
          arabe
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-lsh/lvb-chinois"
          class="text-primary"
        >
          chinois
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-lsh/lvb-espagnol"
          class="text-primary"
        >
          espagnol
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-lsh/lvb-italien"
          class="text-primary"
        >
          italien
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-lsh/lvb-japonais"
          class="text-primary"
        >
          japonais
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-lsh/lvb-polonais"
          class="text-primary"
        >
          polonais
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-lsh/lvb-portugais"
          class="text-primary"
        >
          portugais
        </ULink>
        |
        <ULink
          to="/annales/cpge/khagne-al-lsh/lvb-russe"
          class="text-primary"
        >
          russe
        </ULink>
      </li> -->
      <!-- <li>
        <ULink
          to="/annales/cpge/khagne-al-lsh/philosophie"
          class="text-primary"
        >
          Philosophie
        </ULink>
      </li> -->
      <!-- <li>
        Spécialité :
        <ul class="list-disc list-inside ml-8">
          <li>
            <ULink
              to="/annales/cpge/khagne-al-lsh/specialitearts"
              class="text-primary"
            >
              Arts
            </ULink>
          </li>
          <li>
            <ULink
              to="/annales/cpge/khagne-al-lsh/specialite-version-latine"
              class="text-primary"
            >
              Version latine
            </ULink>
          </li>
          <li>
            <ULink
              to="/annales/cpge/khagne-al-lsh/specialite-version-grecque"
              class="text-primary"
            >
              Version grecque
            </ULink>
          </li>
          <li>
            <ULink
              to="/annales/cpge/khagne-al-lsh/specialite-lettres-modernes"
              class="text-primary"
            >
              Lettres modernes
            </ULink>
          </li>
          <li>
            Thème en langue vivante étrangère :
            <ULink
              to="/annales/cpge/khagne-al-lsh/specialite-theme-allemand"
              class="text-primary"
            >
              allemand
            </ULink>
            |
            <ULink
              to="/annales/cpge/khagne-al-lsh/specialite-theme-anglais"
              class="text-primary"
            >
              anglais
            </ULink>
          </li>
          <li>
            <ULink
              to="/annales/cpge/khagne-al-lsh/specialite-philosophie"
              class="text-primary"
            >
              Philosophie
            </ULink>
          </li>
          <li>
            <ULink
              to="/annales/cpge/khagne-al-lsh/specialite-explication"
              class="text-primary"
            >
              Explication de texte ou documents historiques
            </ULink>
          </li>
          <li>
            <ULink
              to="/annales/cpge/khagne-al-lsh/specialite-explication"
              class="text-primary"
            >
              Géographie
            </ULink>
          </li>
        </ul>
      </li> -->
    </ul>
  </UContainer>
</template>
