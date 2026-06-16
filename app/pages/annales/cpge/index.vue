<script setup>
let meta_description = 'Les annales des concours pour les classes préparatoires aux grandes écoles (CPGE).';
meta_description += ' Les sujets et rapports des dernières années par classe.';

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
];

useSchema({
  breadcrumb_items,
});

useHead({
  title: () => 'Annales CPGE | NotyLoops',
  meta: [
    {
      name: 'description',
      content: () => meta_description,
    },
  ],
});
</script>

<template>
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Annales CPGE
    </h1>

    <h2>
      Économique et commercial (EC)
    </h2>

    <ul class="list-disc list-inside ">
      <li>
        <ULink
          class="text-primary"
          to="/annales/cpge/ect"
        >ECT</ULink>
      </li>
    </ul>
  </UContainer>
</template>
