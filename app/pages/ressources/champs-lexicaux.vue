<script setup>
const page_title = 'Quelques champs lexicaux';

const meta_description = 'Des mots répartis par champs lexicaux.';

const breadcrumb_items = [
  {
    label: 'Ressources',
    to: '/ressources',
    url: 'https://fr.notyloops.com/ressources',
  },
  {
    label: 'Quelques champs lexicaux',
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
  <!-- app/pages/ressources/champs-lexicaux.vue -->
  <UContainer class="max-w-xl">
    <UBreadcrumb
      class="mb-8"
      :items="breadcrumb_items"
    />

    <h1>
      Quelques champs lexicaux
    </h1>

    <h2>
      L'abondance verbale
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Bavard, bavardage.
      </li>
      <li>
        Délayé, délayer.
      </li>
      <li>
        Digression.
      </li>
      <li>
        Disert.
      </li>
      <li>
        Faconde.
      </li>
      <li>
        Intarissable.
      </li>
      <li>
        Logorrhée.
      </li>
      <li>
        Loquace, loquacité.
      </li>
      <li>
        Péroraison, pérorer.
      </li>
      <li>
        Prolixe, prolixité.
      </li>
      <li>
        Torrentuel.
      </li>
      <li>
        Verbeux, verbiage.
      </li>
      <li>
        Volubile, volubilité.
      </li>
    </ul>

    <h2 class="mt-8">
      L'aube
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Albe.
      </li>
      <li>
        Antelucain.
      </li>
      <li>
        Auroral, aurore.
      </li>
      <li>
        Dilucule.
      </li>
      <li>
        Éveil.
      </li>
      <li>
        Lueur.
      </li>
      <li>
        Matin, matinal, matinée.
      </li>
      <li>
        Matutinal.
      </li>
      <li>
        Naissant.
      </li>
      <li>
        Orient.
      </li>
      <li>
        Poindre.
      </li>
      <li>
        Prime.
      </li>
      <li>
        Rosée.
      </li>
    </ul>

    <h2 class="mt-8">
      L'avarice et la parcimonie
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Accapareur.
      </li>
      <li>
        Avare, avarice.
      </li>
      <li>
        Chiche.
      </li>
      <li>
        Cupide, cupidité.
      </li>
      <li>
        Économe.
      </li>
      <li>
        Harpagon.
      </li>
      <li>
        Ladre.
      </li>
      <li>
        Lésine, lésiner.
      </li>
      <li>
        Mesquin, mesquinerie.
      </li>
      <li>
        Parcimonie, parcimonieux.
      </li>
      <li>
        Rapace.
      </li>
      <li>
        Regardant.
      </li>
      <li>
        Serré.
      </li>
      <li>
        Thésauriser.
      </li>
      <li>
        Usurier.
      </li>
    </ul>

    <h2 class="mt-8">
      L'eau
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Affluent.
      </li>
      <li>
        Alluvial, alluvion.
      </li>
      <li>
        Aquatique.
      </li>
      <li>
        Aqueux.
      </li>
      <li>
        Balnéaire.
      </li>
      <li>
        Cascade.
      </li>
      <li>
        Crue.
      </li>
      <li>
        Déferler, déferlement.
      </li>
      <li>
        Écume.
      </li>
      <li>
        Effluent.
      </li>
      <li>
        Embouchure.
      </li>
      <li>
        Estuaire.
      </li>
      <li>
        Étiage.
      </li>
      <li>
        Fluvial, fluviatile.
      </li>
      <li>
        Flux.
      </li>
      <li>
        Houle.
      </li>
      <li>
        Hydraulique.
      </li>
      <li>
        Inonder, inondation.
      </li>
      <li>
        Irriguer, irrigation.
      </li>
      <li>
        Lacustre.
      </li>
      <li>
        Limoneux.
      </li>
      <li>
        Limpide.
      </li>
      <li>
        Marée.
      </li>
      <li>
        Maritime.
      </li>
      <li>
        Méandre.
      </li>
      <li>
        Nappe.
      </li>
      <li>
        Palustre.
      </li>
      <li>
        Reflux.
      </li>
      <li>
        Remous.
      </li>
      <li>
        Ressac.
      </li>
      <li>
        Saumâtre.
      </li>
      <li>
        Source.
      </li>
      <li>
        Stagnant.
      </li>
      <li>
        Torrent, torrentiel.
      </li>
    </ul>

    <h2 class="mt-8">
      L'embonpoint
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Adipeux.
      </li>
      <li>
        Charnu.
      </li>
      <li>
        Corpulence, corpulent.
      </li>
      <li>
        Épais.
      </li>
      <li>
        Étoffé.
      </li>
      <li>
        Fort.
      </li>
      <li>
        Massif.
      </li>
      <li>
        Obèse, obésité.
      </li>
      <li>
        Opulent.
      </li>
      <li>
        Pansu.
      </li>
      <li>
        Plantureux.
      </li>
      <li>
        Potelé.
      </li>
      <li>
        Replet.
      </li>
      <li>
        Rond.
      </li>
      <li>
        Ventripotent.
      </li>
    </ul>

    <h2 class="mt-8">
      L'excès
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Comble.
      </li>
      <li>
        Débordement.
      </li>
      <li>
        Démesure, démesuré.
      </li>
      <li>
        Déséquilibre.
      </li>
      <li>
        Excès, excessif.
      </li>
      <li>
        Exubérance.
      </li>
      <li>
        Hyperbole.
      </li>
      <li>
        Hypertrophie.
      </li>
      <li>
        Immodération.
      </li>
      <li>
        Intempérance.
      </li>
      <li>
        Outrance, outrancier, outré, outrer.
      </li>
      <li>
        Pléthore.
      </li>
      <li>
        Saturation.
      </li>
      <li>
        Surabondance.
      </li>
      <li>
        Trop-plein.
      </li>
    </ul>

    <h2 class="mt-8">
      L'humilité
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Abnégation.
      </li>
      <li>
        Déférent.
      </li>
      <li>
        Discret.
      </li>
      <li>
        Docile.
      </li>
      <li>
        Effacé, effacement.
      </li>
      <li>
        Modestie.
      </li>
      <li>
        Obséquieux, obséquiosité.
      </li>
      <li>
        Prosternation.
      </li>
      <li>
        Recueilli.
      </li>
      <li>
        Réservé.
      </li>
      <li>
        Respectueux.
      </li>
      <li>
        Simple.
      </li>
      <li>
        Soumis.
      </li>
    </ul>

    <h2 class="mt-8">
      L'obscurité
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Assombrir, assombrissement.
      </li>
      <li>
        Caligineux.
      </li>
      <li>
        Éclipse.
      </li>
      <li>
        Fuligineux.
      </li>
      <li>
        Noir, noirceur.
      </li>
      <li>
        Obscur, obscurité.
      </li>
      <li>
        Occultation, occulte.
      </li>
      <li>
        Ombre, ombreux.
      </li>
      <li>
        Opacité, opaque.
      </li>
      <li>
        Sombre.
      </li>
      <li>
        Ténèbres, ténébreux.
      </li>
    </ul>

    <h2 class="mt-8">
      L'obscurité du style
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Abscons.
      </li>
      <li>
        Alambiqué.
      </li>
      <li>
        Amphibologie.
      </li>
      <li>
        Amphigouri.
      </li>
      <li>
        Ampoulé.
      </li>
      <li>
        Cabalistique.
      </li>
      <li>
        Cryptique.
      </li>
      <li>
        Emphase.
      </li>
      <li>
        Énigmatique.
      </li>
      <li>
        Ésotérique.
      </li>
      <li>
        Fumeux.
      </li>
      <li>
        Galimatias.
      </li>
      <li>
        Grandiloquence.
      </li>
      <li>
        Hermétique.
      </li>
      <li>
        Impénétrable.
      </li>
      <li>
        Inintelligible.
      </li>
      <li>
        Obscur.
      </li>
      <li>
        Occulte.
      </li>
      <li>
        Phraséologie.
      </li>
      <li>
        Sibyllin.
      </li>
    </ul>

    <h2 class="mt-8">
      L'opiniâtreté
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Acharné, acharnement.
      </li>
      <li>
        Constance.
      </li>
      <li>
        Entêté.
      </li>
      <li>
        Inébranlable.
      </li>
      <li>
        Inflexible.
      </li>
      <li>
        Intraitable.
      </li>
      <li>
        Irréductible.
      </li>
      <li>
        Obstination, obstiné.
      </li>
      <li>
        Opiniâtre, opiniâtreté.
      </li>
      <li>
        Persévérance.
      </li>
      <li>
        Résolu.
      </li>
      <li>
        Tenace, ténacité.
      </li>
      <li>
        Têtu.
      </li>
    </ul>

    <h2 class="mt-8">
      L'orgueil
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Altier.
      </li>
      <li>
        Arrogance.
      </li>
      <li>
        Dédaigneux, dédain.
      </li>
      <li>
        Fatuité.
      </li>
      <li>
        Fierté.
      </li>
      <li>
        Gloriole.
      </li>
      <li>
        Hautain.
      </li>
      <li>
        Impérieux.
      </li>
      <li>
        Infatuation.
      </li>
      <li>
        Insolence.
      </li>
      <li>
        Mépris.
      </li>
      <li>
        Morgue.
      </li>
      <li>
        Orgueil.
      </li>
      <li>
        Outrecuidance.
      </li>
      <li>
        Présomption.
      </li>
      <li>
        Rogue.
      </li>
      <li>
        Suffisance.
      </li>
      <li>
        Superbe.
      </li>
      <li>
        Vanité.
      </li>
    </ul>

    <h2 class="mt-8">
      La beauté
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Apollinien.
      </li>
      <li>
        Charmant.
      </li>
      <li>
        Délicat.
      </li>
      <li>
        Éclatant.
      </li>
      <li>
        Élégant.
      </li>
      <li>
        Esthétique.
      </li>
      <li>
        Fin.
      </li>
      <li>
        Gracieux.
      </li>
      <li>
        Gracile.
      </li>
      <li>
        Harmonieux.
      </li>
      <li>
        Magnifique.
      </li>
      <li>
        Ravissant.
      </li>
      <li>
        Resplendissant.
      </li>
      <li>
        Séduisant.
      </li>
      <li>
        Splendide.
      </li>
      <li>
        Sublime.
      </li>
      <li>
        Superbe.
      </li>
      <li>
        Vénusté.
      </li>
    </ul>

    <h2 class="mt-8">
      La bonne humeur
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Affabilité.
      </li>
      <li>
        Allégresse.
      </li>
      <li>
        Amène, aménité.
      </li>
      <li>
        Badin.
      </li>
      <li>
        Bonhomie.
      </li>
      <li>
        Débonnaire.
      </li>
      <li>
        Enjoué.
      </li>
      <li>
        Entrain.
      </li>
      <li>
        Euphorie.
      </li>
      <li>
        Exaltation.
      </li>
      <li>
        Exubérant.
      </li>
      <li>
        Félicité.
      </li>
      <li>
        Folâtre.
      </li>
      <li>
        Guilleret.
      </li>
      <li>
        Hilarité.
      </li>
      <li>
        Jovial.
      </li>
      <li>
        Jubilation.
      </li>
      <li>
        Liesse.
      </li>
      <li>
        Placide.
      </li>
      <li>
        Sérénité.
      </li>
      <li>
        Urbanité.
      </li>
    </ul>

    <h2 class="mt-8">
      La brièveté
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Adage.
      </li>
      <li>
        Aphorisme.
      </li>
      <li>
        Apophtegme.
      </li>
      <li>
        Bref.
      </li>
      <li>
        Concis, concision.
      </li>
      <li>
        Dense.
      </li>
      <li>
        Dépouillé.
      </li>
      <li>
        Elliptique.
      </li>
      <li>
        Épuré.
      </li>
      <li>
        Laconique, laconisme.
      </li>
      <li>
        Lapidaire.
      </li>
      <li>
        Maxime.
      </li>
      <li>
        Ramassé.
      </li>
      <li>
        Sentencieux.
      </li>
      <li>
        Serré.
      </li>
      <li>
        Sobre.
      </li>
      <li>
        Succinct.
      </li>
      <li>
        Télégraphique.
      </li>
    </ul>

    <h2 class="mt-8">
      La chaleur
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Accablant.
      </li>
      <li>
        Ardeur.
      </li>
      <li>
        Brasier.
      </li>
      <li>
        Brûlant.
      </li>
      <li>
        Caniculaire, canicule.
      </li>
      <li>
        Estival.
      </li>
      <li>
        Été.
      </li>
      <li>
        Étouffant.
      </li>
      <li>
        Étuve.
      </li>
      <li>
        Fournaise.
      </li>
      <li>
        Harassant.
      </li>
      <li>
        Incandescent.
      </li>
      <li>
        Lourd.
      </li>
      <li>
        Moite.
      </li>
      <li>
        Saharien.
      </li>
      <li>
        Torride.
      </li>
      <li>
        Tropical.
      </li>
    </ul>

    <h2 class="mt-8">
      La domination
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Asservir, asservissement.
      </li>
      <li>
        Autorité.
      </li>
      <li>
        Despote, despotisme.
      </li>
      <li>
        Empire.
      </li>
      <li>
        Emprise.
      </li>
      <li>
        Hégémonie.
      </li>
      <li>
        Joug.
      </li>
      <li>
        Mainmise.
      </li>
      <li>
        Oppression.
      </li>
      <li>
        Pouvoir.
      </li>
      <li>
        Servitude.
      </li>
      <li>
        Subjugation.
      </li>
      <li>
        Sujétion.
      </li>
      <li>
        Tutelle.
      </li>
      <li>
        Tyrannie.
      </li>
      <li>
        Vassalité.
      </li>
    </ul>

    <h2 class="mt-8">
      La duplicité
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Ambigu.
      </li>
      <li>
        Artifice.
      </li>
      <li>
        Cauteleux.
      </li>
      <li>
        Dissimulation.
      </li>
      <li>
        Double jeu.
      </li>
      <li>
        Fausseté.
      </li>
      <li>
        Félonie.
      </li>
      <li>
        Fourberie.
      </li>
      <li>
        Hypocrisie.
      </li>
      <li>
        Insidieux.
      </li>
      <li>
        Masque.
      </li>
      <li>
        Patelin.
      </li>
      <li>
        Perfide.
      </li>
      <li>
        Ruse.
      </li>
      <li>
        Simulacre.
      </li>
      <li>
        Sournois.
      </li>
      <li>
        Tartuferie.
      </li>
      <li>
        Traîtrise.
      </li>
      <li>
        Trompeur.
      </li>
    </ul>

    <h2 class="mt-8">
      La fatalité
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Arrêt.
      </li>
      <li>
        Décret.
      </li>
      <li>
        Destin, destinée.
      </li>
      <li>
        Fatal, fatalité.
      </li>
      <li>
        Fatum.
      </li>
      <li>
        Implacable.
      </li>
      <li>
        Inéluctabilité, inéluctable.
      </li>
      <li>
        Inévitable.
      </li>
      <li>
        Inexorabilité, inexorable.
      </li>
      <li>
        Nécessité.
      </li>
      <li>
        Parques.
      </li>
      <li>
        Prédestination.
      </li>
      <li>
        Prescience.
      </li>
      <li>
        Providence.
      </li>
      <li>
        Sort.
      </li>
    </ul>

    <h2 class="mt-8">
      La flatterie
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Adulateur, adulation.
      </li>
      <li>
        Cajoler.
      </li>
      <li>
        Captation.
      </li>
      <li>
        Complaisance.
      </li>
      <li>
        Courtisan, courtisanerie.
      </li>
      <li>
        Douceureux.
      </li>
      <li>
        Encens, encenser.
      </li>
      <li>
        Enjôler.
      </li>
      <li>
        Flagorner, flagornerie.
      </li>
      <li>
        Louangeur.
      </li>
      <li>
        Mielleux.
      </li>
    </ul>

    <h2 class="mt-8">
      La forêt sombre
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Bocage.
      </li>
      <li>
        Bois.
      </li>
      <li>
        Broussailles.
      </li>
      <li>
        Canopée.
      </li>
      <li>
        Dense.
      </li>
      <li>
        Forêt.
      </li>
      <li>
        Fourré.
      </li>
      <li>
        Friche.
      </li>
      <li>
        Frondaison.
      </li>
      <li>
        Futaie.
      </li>
      <li>
        Hallier.
      </li>
      <li>
        Maquis.
      </li>
      <li>
        Ombrage, ombreux.
      </li>
      <li>
        Ramure.
      </li>
      <li>
        Sous-bois.
      </li>
      <li>
        Sylvestre.
      </li>
      <li>
        Taillis.
      </li>
      <li>
        Touffu.
      </li>
    </ul>

    <h2 class="mt-8">
      La franchise
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Candeur, candide.
      </li>
      <li>
        Cruement.
      </li>
      <li>
        Direct.
      </li>
      <li>
        Droiture.
      </li>
      <li>
        Fard.
      </li>
      <li>
        Franc, franchise.
      </li>
      <li>
        Ingénu, ingénuité.
      </li>
      <li>
        Loyauté.
      </li>
      <li>
        Naturel.
      </li>
      <li>
        Net.
      </li>
      <li>
        Nûment.
      </li>
      <li>
        Ouvert.
      </li>
      <li>
        Sincère, sincérité.
      </li>
      <li>
        Spontané.
      </li>
      <li>
        Véridique.
      </li>
    </ul>

    <h2 class="mt-8">
      La jeunesse
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Adolescence, adolescent.
      </li>
      <li>
        Cadet.
      </li>
      <li>
        Enfance, enfantin.
      </li>
      <li>
        Florissant.
      </li>
      <li>
        Jouvence.
      </li>
      <li>
        Juvénile.
      </li>
      <li>
        Naissant.
      </li>
      <li>
        Novice.
      </li>
      <li>
        Nubile.
      </li>
      <li>
        Prime, primeur.
      </li>
      <li>
        Printanier.
      </li>
      <li>
        Pubère.
      </li>
      <li>
        Puéril.
      </li>
      <li>
        Verdeur, verdoyant.
      </li>
    </ul>

    <h2 class="mt-8">
      La laideur
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Abominable.
      </li>
      <li>
        Affreux.
      </li>
      <li>
        Atroce.
      </li>
      <li>
        Défiguré.
      </li>
      <li>
        Difforme.
      </li>
      <li>
        Disgracieux.
      </li>
      <li>
        Enlaidi.
      </li>
      <li>
        Hideur, hideux.
      </li>
      <li>
        Horrible.
      </li>
      <li>
        Immonde.
      </li>
      <li>
        Inesthétique.
      </li>
      <li>
        Infâme.
      </li>
      <li>
        Informe.
      </li>
      <li>
        Monstrueux.
      </li>
      <li>
        Repoussant.
      </li>
      <li>
        Répugnant.
      </li>
      <li>
        Vilain.
      </li>
    </ul>

    <h2 class="mt-8">
      La lumière vive
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Aveuglant.
      </li>
      <li>
        Brillant.
      </li>
      <li>
        Clarté.
      </li>
      <li>
        Éblouissant.
      </li>
      <li>
        Éclat, éclatant.
      </li>
      <li>
        Étincelant.
      </li>
      <li>
        Flamboiement, flamboyant.
      </li>
      <li>
        Fulgurant.
      </li>
      <li>
        Incandescent.
      </li>
      <li>
        Irradiation, irradier.
      </li>
      <li>
        Lumière, lumineux.
      </li>
      <li>
        Radieux.
      </li>
      <li>
        Resplendissant.
      </li>
      <li>
        Rutilant.
      </li>
      <li>
        Scintillant.
      </li>
    </ul>

    <h2 class="mt-8">
      La maigreur
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Anguleux.
      </li>
      <li>
        Chétif.
      </li>
      <li>
        Décharné.
      </li>
      <li>
        Effilé.
      </li>
      <li>
        Efflanqué.
      </li>
      <li>
        Émaciation, émacié.
      </li>
      <li>
        Étique.
      </li>
      <li>
        Famélique.
      </li>
      <li>
        Fluet, fluette.
      </li>
      <li>
        Grêle.
      </li>
      <li>
        Hâve.
      </li>
      <li>
        Longiligne.
      </li>
      <li>
        Menu.
      </li>
      <li>
        Sec.
      </li>
      <li>
        Squelettique.
      </li>
    </ul>

    <h2 class="mt-8">
      La mauvaise humeur
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Acariâtre.
      </li>
      <li>
        Acrimonie.
      </li>
      <li>
        Atrabilaire.
      </li>
      <li>
        Bilieux.
      </li>
      <li>
        Bourru.
      </li>
      <li>
        Colérique.
      </li>
      <li>
        Contrariété.
      </li>
      <li>
        Courroux.
      </li>
      <li>
        Dépit.
      </li>
      <li>
        Fielleux.
      </li>
      <li>
        Hargne.
      </li>
      <li>
        Impétueux.
      </li>
      <li>
        Irascible.
      </li>
      <li>
        Ire.
      </li>
      <li>
        Irritable.
      </li>
      <li>
        Ombrageux.
      </li>
      <li>
        Rébarbatif.
      </li>
      <li>
        Renfrogné.
      </li>
      <li>
        Revêche.
      </li>
      <li>
        Rogue.
      </li>
      <li>
        Sanguin.
      </li>
      <li>
        Véhément.
      </li>
      <li>
        Versatile.
      </li>
      <li>
        Vindicatif.
      </li>
    </ul>

    <h2 class="mt-8">
      La mélancolie
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Amertume.
      </li>
      <li>
        Apathie.
      </li>
      <li>
        Austère.
      </li>
      <li>
        Chagrin.
      </li>
      <li>
        Dolent.
      </li>
      <li>
        Flegmatique.
      </li>
      <li>
        Hypocondriaque.
      </li>
      <li>
        Lymphatique.
      </li>
      <li>
        Marasme.
      </li>
      <li>
        Maussade.
      </li>
      <li>
        Misanthrope.
      </li>
      <li>
        Morne.
      </li>
      <li>
        Morose.
      </li>
      <li>
        Neurasthénie.
      </li>
      <li>
        Nonchalance.
      </li>
      <li>
        Nostalgie.
      </li>
      <li>
        Saturnien.
      </li>
      <li>
        Spleen, splénétique.
      </li>
      <li>
        Taciturne.
      </li>
      <li>
        Torpeur.
      </li>
      <li>
        Tourment.
      </li>
    </ul>

    <h2 class="mt-8">
      La mer agitée
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Agité.
      </li>
      <li>
        Brisant.
      </li>
      <li>
        Clapotis.
      </li>
      <li>
        Courant.
      </li>
      <li>
        Déferlante, déferlement.
      </li>
      <li>
        Écume.
      </li>
      <li>
        Embruns.
      </li>
      <li>
        Furieux.
      </li>
      <li>
        Houle.
      </li>
      <li>
        Lame.
      </li>
      <li>
        Maelström.
      </li>
      <li>
        Moutonnement.
      </li>
      <li>
        Raz.
      </li>
      <li>
        Raz-de-marée.
      </li>
      <li>
        Récif.
      </li>
      <li>
        Ressac.
      </li>
      <li>
        Tempête.
      </li>
      <li>
        Tumulte.
      </li>
      <li>
        Vague.
      </li>
    </ul>

    <h2 class="mt-8">
      La moquerie
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Brocard.
      </li>
      <li>
        Caustique.
      </li>
      <li>
        Dérision.
      </li>
      <li>
        Épigramme.
      </li>
      <li>
        Goguenard.
      </li>
      <li>
        Incisif.
      </li>
      <li>
        Ironie.
      </li>
      <li>
        Mordant.
      </li>
      <li>
        Narquois.
      </li>
      <li>
        Persiflage, persifler.
      </li>
      <li>
        Quolibet.
      </li>
      <li>
        Raillerie, railleur.
      </li>
      <li>
        Sarcasme.
      </li>
      <li>
        Sardonique.
      </li>
      <li>
        Satire.
      </li>
      <li>
        Verve.
      </li>
    </ul>

    <h2 class="mt-8">
      La paresse
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Accidie.
      </li>
      <li>
        Apathie.
      </li>
      <li>
        Assoupissement.
      </li>
      <li>
        Indolence, indolent.
      </li>
      <li>
        Inertie.
      </li>
      <li>
        Langueur.
      </li>
      <li>
        Léthargie.
      </li>
      <li>
        Négligence.
      </li>
      <li>
        Nonchalance, nonchalant.
      </li>
      <li>
        Oisif, oisiveté.
      </li>
      <li>
        Relâchement.
      </li>
      <li>
        Somnolence.
      </li>
      <li>
        Torpeur, torpide.
      </li>
      <li>
        Végétatif.
      </li>
    </ul>

    <h2 class="mt-8">
      La pluie
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Averse.
      </li>
      <li>
        Bruine, bruiner.
      </li>
      <li>
        Cataracte.
      </li>
      <li>
        Crachin.
      </li>
      <li>
        Déluge.
      </li>
      <li>
        Diluvien.
      </li>
      <li>
        Giboulée.
      </li>
      <li>
        Grain.
      </li>
      <li>
        Ondée, ondoyant.
      </li>
      <li>
        Pluie.
      </li>
      <li>
        Pluvial, pluvieux.
      </li>
      <li>
        Précipitation.
      </li>
      <li>
        Ruissellement.
      </li>
    </ul>

    <h2 class="mt-8">
      La prodigalité
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Dépensier.
      </li>
      <li>
        Dilapider.
      </li>
      <li>
        Dissipation, dissiper.
      </li>
      <li>
        Fastes, fastueux.
      </li>
      <li>
        Gaspillage, gaspiller.
      </li>
      <li>
        Générosité.
      </li>
      <li>
        Largesse.
      </li>
      <li>
        Libéralité.
      </li>
      <li>
        Luxe.
      </li>
      <li>
        Magnificence.
      </li>
      <li>
        Munificence.
      </li>
      <li>
        Prodigalité, prodigue.
      </li>
      <li>
        Profusion.
      </li>
      <li>
        Somptueux, somptuosité.
      </li>
    </ul>

    <h2 class="mt-8">
      La révolte
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Contestation.
      </li>
      <li>
        Émeute.
      </li>
      <li>
        Factieux.
      </li>
      <li>
        Fronde.
      </li>
      <li>
        Insoumission.
      </li>
      <li>
        Insurgé, insurrection.
      </li>
      <li>
        Jacquerie.
      </li>
      <li>
        Mutin, mutinerie.
      </li>
      <li>
        Rebelle, rébellion.
      </li>
      <li>
        Résistance.
      </li>
      <li>
        Révolte.
      </li>
      <li>
        Révolution.
      </li>
      <li>
        Séditieux, sédition.
      </li>
      <li>
        Soulèvement, soulever.
      </li>
      <li>
        Troubles.
      </li>
    </ul>

    <h2 class="mt-8">
      La richesse
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Aisance.
      </li>
      <li>
        Aubaine.
      </li>
      <li>
        Doré.
      </li>
      <li>
        Enrichi, enrichissement.
      </li>
      <li>
        Fastes.
      </li>
      <li>
        Florissant.
      </li>
      <li>
        Fortune.
      </li>
      <li>
        Gain.
      </li>
      <li>
        Héritage.
      </li>
      <li>
        Inopiné.
      </li>
      <li>
        Manne.
      </li>
      <li>
        Opulence, opulent.
      </li>
      <li>
        Pactole.
      </li>
      <li>
        Profit.
      </li>
      <li>
        Prospère, prospérité.
      </li>
      <li>
        Richesses.
      </li>
      <li>
        Trésor.
      </li>
    </ul>

    <h2 class="mt-8">
      La ruine
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Anéantissement.
      </li>
      <li>
        Chute.
      </li>
      <li>
        Décadence.
      </li>
      <li>
        Déchéance.
      </li>
      <li>
        Déclin.
      </li>
      <li>
        Décombres.
      </li>
      <li>
        Déconfiture.
      </li>
      <li>
        Délabrement.
      </li>
      <li>
        Désastre.
      </li>
      <li>
        Destruction.
      </li>
      <li>
        Effondrement.
      </li>
      <li>
        Faillite.
      </li>
      <li>
        Fiasco.
      </li>
      <li>
        Naufrage.
      </li>
      <li>
        Perdition.
      </li>
      <li>
        Perte.
      </li>
      <li>
        Ruine, ruiner.
      </li>
      <li>
        Vestiges.
      </li>
    </ul>

    <h2 class="mt-8">
      La vanité des choses
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Caduc.
      </li>
      <li>
        Chimère.
      </li>
      <li>
        Éphémère.
      </li>
      <li>
        Évanescent.
      </li>
      <li>
        Fugace.
      </li>
      <li>
        Fugitif.
      </li>
      <li>
        Fumée.
      </li>
      <li>
        Futile, futilité.
      </li>
      <li>
        Illusion, illusoire.
      </li>
      <li>
        Inconsistant.
      </li>
      <li>
        Leurre.
      </li>
      <li>
        Néant.
      </li>
      <li>
        Précaire.
      </li>
      <li>
        Transitoire.
      </li>
      <li>
        Vacuité.
      </li>
      <li>
        Vide.
      </li>
    </ul>

    <h2 class="mt-8">
      La vieillesse
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Affaibli.
      </li>
      <li>
        Âgé.
      </li>
      <li>
        Ancien.
      </li>
      <li>
        Antiquité.
      </li>
      <li>
        Archaïque.
      </li>
      <li>
        Caduc, caducité.
      </li>
      <li>
        Centenaire.
      </li>
      <li>
        Chenue.
      </li>
      <li>
        Décrépit, décrépitude.
      </li>
      <li>
        Infirme.
      </li>
      <li>
        Patriarche.
      </li>
      <li>
        Sénescence.
      </li>
      <li>
        Sénile, sénilité.
      </li>
      <li>
        Usé.
      </li>
      <li>
        Vétuste.
      </li>
    </ul>

    <h2 class="mt-8">
      Le crépuscule
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Astral.
      </li>
      <li>
        Brune.
      </li>
      <li>
        Lunaire.
      </li>
      <li>
        Noctambule, nocturne.
      </li>
      <li>
        Nuit, nuitée.
      </li>
      <li>
        Obombrer.
      </li>
      <li>
        Obscurité.
      </li>
      <li>
        Ombres.
      </li>
      <li>
        Pénombre.
      </li>
      <li>
        Sidéral.
      </li>
      <li>
        Sombre.
      </li>
      <li>
        Ténèbres, ténébreux.
      </li>
      <li>
        Vespéral, vesprée.
      </li>
    </ul>

    <h2 class="mt-8">
      Le désir
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Aphrodisiaque.
      </li>
      <li>
        Appétence.
      </li>
      <li>
        Ardeur.
      </li>
      <li>
        Callipyge.
      </li>
      <li>
        Charnel.
      </li>
      <li>
        Chaste, chasteté.
      </li>
      <li>
        Concupiscence, concupiscent.
      </li>
      <li>
        Continence.
      </li>
      <li>
        Convoitise.
      </li>
      <li>
        Coquetterie.
      </li>
      <li>
        Débauche.
      </li>
      <li>
        Dévergondé.
      </li>
      <li>
        Enjôler, enjôleur.
      </li>
      <li>
        Érotisme.
      </li>
      <li>
        Grivois.
      </li>
      <li>
        Impudique.
      </li>
      <li>
        Langueur.
      </li>
      <li>
        Lascif.
      </li>
      <li>
        Libertin.
      </li>
      <li>
        Libido.
      </li>
      <li>
        Licencieux.
      </li>
      <li>
        Lubrique.
      </li>
      <li>
        Luxure.
      </li>
      <li>
        Mamelue.
      </li>
      <li>
        Nubile.
      </li>
      <li>
        Prude.
      </li>
      <li>
        Pudeur, pudibond, pudique.
      </li>
      <li>
        Salace.
      </li>
      <li>
        Séduction.
      </li>
      <li>
        Sensualité, sensuel.
      </li>
      <li>
        Stéatopyge.
      </li>
      <li>
        Stupre.
      </li>
      <li>
        Turpitude.
      </li>
      <li>
        Vestale.
      </li>
      <li>
        Volupté, voluptueux.
      </li>
    </ul>

    <h2 class="mt-8">
      Le deuil
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Cercueil.
      </li>
      <li>
        Cippe.
      </li>
      <li>
        Deuil.
      </li>
      <li>
        Épitaphe.
      </li>
      <li>
        Funèbre, funérailles.
      </li>
      <li>
        Glas.
      </li>
      <li>
        Lamentation.
      </li>
      <li>
        Linceul.
      </li>
      <li>
        Lugubre.
      </li>
      <li>
        Macabre.
      </li>
      <li>
        Morbide.
      </li>
      <li>
        Mortuaire.
      </li>
      <li>
        Obit.
      </li>
      <li>
        Obsèques.
      </li>
      <li>
        Oraison.
      </li>
      <li>
        Pleurs.
      </li>
      <li>
        Sépulcral.
      </li>
      <li>
        Thrène.
      </li>
      <li>
        Tombeau.
      </li>
    </ul>

    <h2 class="mt-8">
      Le discours d'attaque
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Anathème.
      </li>
      <li>
        Apostropher.
      </li>
      <li>
        Charge.
      </li>
      <li>
        Diatribe.
      </li>
      <li>
        Diffamation.
      </li>
      <li>
        Exécration.
      </li>
      <li>
        Flageller.
      </li>
      <li>
        Fulminer.
      </li>
      <li>
        Fustiger.
      </li>
      <li>
        Imprécation.
      </li>
      <li>
        Invective.
      </li>
      <li>
        Libelle.
      </li>
      <li>
        Outrage.
      </li>
      <li>
        Pamphlet.
      </li>
      <li>
        Philippique.
      </li>
      <li>
        Réquisitoire.
      </li>
      <li>
        Satire.
      </li>
      <li>
        Stigmatiser.
      </li>
      <li>
        Vilipender.
      </li>
      <li>
        Virulent.
      </li>
      <li>
        Vitupérer.
      </li>
    </ul>

    <h2 class="mt-8">
      Le discours d'éloge
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Apologie.
      </li>
      <li>
        Apothéose.
      </li>
      <li>
        Célébration.
      </li>
      <li>
        Dithyrambe.
      </li>
      <li>
        Éloge, élogieux.
      </li>
      <li>
        Encenser.
      </li>
      <li>
        Encomiastique.
      </li>
      <li>
        Exalter.
      </li>
      <li>
        Glorifier.
      </li>
      <li>
        Hommage.
      </li>
      <li>
        Hymne.
      </li>
      <li>
        Idolâtrer.
      </li>
      <li>
        Laudatif.
      </li>
      <li>
        Louange.
      </li>
      <li>
        Magnifier.
      </li>
      <li>
        Ovation.
      </li>
      <li>
        Panégyrique, panégyriste.
      </li>
    </ul>

    <h2 class="mt-8">
      Le froid
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Algide.
      </li>
      <li>
        Arctique.
      </li>
      <li>
        Frimas.
      </li>
      <li>
        Froid, froideur.
      </li>
      <li>
        Gel, gelé, gelée.
      </li>
      <li>
        Givre.
      </li>
      <li>
        Glaçant, glace, glacial.
      </li>
      <li>
        Hiver, hivernal.
      </li>
      <li>
        Morfondre.
      </li>
      <li>
        Polaire.
      </li>
      <li>
        Sibérien.
      </li>
      <li>
        Transi.
      </li>
    </ul>

    <h2 class="mt-8">
      Le langage jugé négativement
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Abscons.
      </li>
      <li>
        Alambiqué.
      </li>
      <li>
        Amphigouri.
      </li>
      <li>
        Ampoulé.
      </li>
      <li>
        Antienne.
      </li>
      <li>
        Bagou.
      </li>
      <li>
        Circonlocution.
      </li>
      <li>
        Délayé.
      </li>
      <li>
        Diatribe.
      </li>
      <li>
        Digression.
      </li>
      <li>
        Emphatique.
      </li>
      <li>
        Galimatias.
      </li>
      <li>
        Grandiloquence.
      </li>
      <li>
        Hâbleur.
      </li>
      <li>
        Lapalissade.
      </li>
      <li>
        Logomachie.
      </li>
      <li>
        Palinodie.
      </li>
      <li>
        Pamphlet.
      </li>
      <li>
        Pérorer.
      </li>
      <li>
        Philippique.
      </li>
      <li>
        Psittacisme.
      </li>
      <li>
        Quolibet.
      </li>
      <li>
        Raillerie, railleur.
      </li>
      <li>
        Récriminer, récimination.
      </li>
      <li>
        Sardonique.
      </li>
      <li>
        Sophisme, sophiste.
      </li>
      <li>
        Tautologie.
      </li>
      <li>
        Truisme.
      </li>
      <li>
        Verbeux, verbiage.
      </li>
      <li>
        Vilipender.
      </li>
      <li>
        Vitupérer, vitupération.
      </li>
    </ul>

    <h2 class="mt-8">
      Le mensonge et la ruse oratoire
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Affabulation.
      </li>
      <li>
        Amphibologie.
      </li>
      <li>
        Argutie.
      </li>
      <li>
        Artifice.
      </li>
      <li>
        Casuistique.
      </li>
      <li>
        Chicane.
      </li>
      <li>
        Circonlocution.
      </li>
      <li>
        Contrevérité.
      </li>
      <li>
        Détour.
      </li>
      <li>
        Duperie.
      </li>
      <li>
        Équivoque.
      </li>
      <li>
        Fallacieux.
      </li>
      <li>
        Faux-fuyant.
      </li>
      <li>
        Feinte.
      </li>
      <li>
        Palinodie.
      </li>
      <li>
        Paralogisme.
      </li>
      <li>
        Périphrase.
      </li>
      <li>
        Sophisme, sophiste.
      </li>
      <li>
        Spécieux.
      </li>
      <li>
        Subterfuge.
      </li>
      <li>
        Tromperie.
      </li>
    </ul>

    <h2 class="mt-8">
      Le repentir
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Absolution.
      </li>
      <li>
        Attrition.
      </li>
      <li>
        Componction.
      </li>
      <li>
        Confession.
      </li>
      <li>
        Contrit, contrition.
      </li>
      <li>
        Conversion.
      </li>
      <li>
        Désaveu.
      </li>
      <li>
        Expiation, expiatoire.
      </li>
      <li>
        Palinodie.
      </li>
      <li>
        Pénitence, pénitent, pénitentiel.
      </li>
      <li>
        Rachat.
      </li>
      <li>
        Regret.
      </li>
      <li>
        Remords.
      </li>
    </ul>

    <h2 class="mt-8">
      Le vent
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Alizé.
      </li>
      <li>
        Aquilon.
      </li>
      <li>
        Autan.
      </li>
      <li>
        Blizzard.
      </li>
      <li>
        Bourrasque.
      </li>
      <li>
        Brise.
      </li>
      <li>
        Cyclone.
      </li>
      <li>
        Éole.
      </li>
      <li>
        Mistral.
      </li>
      <li>
        Ouragan.
      </li>
      <li>
        Rafale.
      </li>
      <li>
        Simoun.
      </li>
      <li>
        Sirocco.
      </li>
      <li>
        Souffle.
      </li>
      <li>
        Tempête.
      </li>
      <li>
        Tornade.
      </li>
      <li>
        Tramontane.
      </li>
      <li>
        Zéphyr.
      </li>
    </ul>

    <h2 class="mt-8">
      Les bruits sourds
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Assourdi.
      </li>
      <li>
        Bourdonnement.
      </li>
      <li>
        Bruissement.
      </li>
      <li>
        Caverneux.
      </li>
      <li>
        Chuchotement.
      </li>
      <li>
        Étouffé.
      </li>
      <li>
        Feutré.
      </li>
      <li>
        Frémissement.
      </li>
      <li>
        Frottement.
      </li>
      <li>
        Grondement.
      </li>
      <li>
        Lointain.
      </li>
      <li>
        Mat.
      </li>
      <li>
        Murmure.
      </li>
      <li>
        Râle.
      </li>
      <li>
        Ramage.
      </li>
      <li>
        Roulement.
      </li>
      <li>
        Rumeur.
      </li>
      <li>
        Sourd, sourdine.
      </li>
    </ul>

    <h2 class="mt-8">
      Les bruits stridents
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Aigre, aigreur.
      </li>
      <li>
        Aigu.
      </li>
      <li>
        Clameur.
      </li>
      <li>
        Cri, criard, crier.
      </li>
      <li>
        Crissement.
      </li>
      <li>
        Glapir, glapissement.
      </li>
      <li>
        Grincement.
      </li>
      <li>
        Hurlement, hurler.
      </li>
      <li>
        Métallique.
      </li>
      <li>
        Perçant.
      </li>
      <li>
        Sifflement.
      </li>
      <li>
        Stridence, strident.
      </li>
      <li>
        Tapage.
      </li>
      <li>
        Tintamarre.
      </li>
      <li>
        Vacarme.
      </li>
    </ul>

    <h2 class="mt-8">
      Les couleurs
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Ambré.
      </li>
      <li>
        Azuré.
      </li>
      <li>
        Bis.
      </li>
      <li>
        Blafard.
      </li>
      <li>
        Blême.
      </li>
      <li>
        Céladon.
      </li>
      <li>
        Cendré.
      </li>
      <li>
        Céruléen.
      </li>
      <li>
        Cramoisi.
      </li>
      <li>
        Fauve.
      </li>
      <li>
        Glauque.
      </li>
      <li>
        Gorge-de-pigeon.
      </li>
      <li>
        Incarnat.
      </li>
      <li>
        Isabelle.
      </li>
      <li>
        Lie-de-vin.
      </li>
      <li>
        Livide.
      </li>
      <li>
        Nacré.
      </li>
      <li>
        Olivâtre.
      </li>
      <li>
        Opalin.
      </li>
      <li>
        Pers.
      </li>
      <li>
        Puce.
      </li>
      <li>
        Rougeoyant.
      </li>
      <li>
        Rubicond.
      </li>
      <li>
        Rutilant.
      </li>
      <li>
        Sinople.
      </li>
      <li>
        Tourterelle.
      </li>
      <li>
        Zinzolin.
      </li>
    </ul>

    <h2 class="mt-8">
      Les défauts et les péchés
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Abjection.
      </li>
      <li>
        Acédie.
      </li>
      <li>
        Adultère.
      </li>
      <li>
        Arrogance.
      </li>
      <li>
        Avarice.
      </li>
      <li>
        Avidité.
      </li>
      <li>
        Bassesse.
      </li>
      <li>
        Blasphème.
      </li>
      <li>
        Calomnie.
      </li>
      <li>
        Colère.
      </li>
      <li>
        Concupiscence, concupiscent.
      </li>
      <li>
        Convoitise.
      </li>
      <li>
        Corruption.
      </li>
      <li>
        Couardise.
      </li>
      <li>
        Cruauté.
      </li>
      <li>
        Cupidité.
      </li>
      <li>
        Cynisme.
      </li>
      <li>
        Débauche.
      </li>
      <li>
        Déloyauté.
      </li>
      <li>
        Duplicité.
      </li>
      <li>
        Égoïsme.
      </li>
      <li>
        Envie.
      </li>
      <li>
        Fatuité.
      </li>
      <li>
        Fausseté.
      </li>
      <li>
        Félonie.
      </li>
      <li>
        Fourberie.
      </li>
      <li>
        Gloutonnerie.
      </li>
      <li>
        Gourmandise.
      </li>
      <li>
        Haine.
      </li>
      <li>
        Hypocrisie.
      </li>
      <li>
        Ignominie.
      </li>
      <li>
        Impiété.
      </li>
      <li>
        Imposture.
      </li>
      <li>
        Impudence, impudicité.
      </li>
      <li>
        Infamie.
      </li>
      <li>
        Infatuation.
      </li>
      <li>
        Infidélité.
      </li>
      <li>
        Ingratitude.
      </li>
      <li>
        Insolence.
      </li>
      <li>
        Intempérance.
      </li>
      <li>
        Ivrognerie.
      </li>
      <li>
        Jalousie.
      </li>
      <li>
        Lâcheté.
      </li>
      <li>
        Lésine.
      </li>
      <li>
        Libertinage.
      </li>
      <li>
        Lubricité.
      </li>
      <li>
        Lucre.
      </li>
      <li>
        Luxure.
      </li>
      <li>
        Malice.
      </li>
      <li>
        Malveillance.
      </li>
      <li>
        Méchanceté.
      </li>
      <li>
        Médisance.
      </li>
      <li>
        Mensonge.
      </li>
      <li>
        Morgue.
      </li>
      <li>
        Oisiveté.
      </li>
      <li>
        Orgueil.
      </li>
      <li>
        Outrecuidance.
      </li>
      <li>
        Paresse.
      </li>
      <li>
        Parjure.
      </li>
      <li>
        Perfide, perfidie.
      </li>
      <li>
        Perversité.
      </li>
      <li>
        Pingrerie.
      </li>
      <li>
        Poltronnerie.
      </li>
      <li>
        Présomption.
      </li>
      <li>
        Pusillanimité.
      </li>
      <li>
        Rancœur, rancune.
      </li>
      <li>
        Rapacité.
      </li>
      <li>
        Ressentiment.
      </li>
      <li>
        Scélératesse.
      </li>
      <li>
        Suffisance.
      </li>
      <li>
        Superbe.
      </li>
      <li>
        Trahison.
      </li>
      <li>
        Traîtrise.
      </li>
      <li>
        Turpitude.
      </li>
      <li>
        Vanité.
      </li>
      <li>
        Vénalité.
      </li>
      <li>
        Vice.
      </li>
      <li>
        Vilenie.
      </li>
    </ul>

    <h2 class="mt-8">
      Les odeurs agréables
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Aromate, aromatique.
      </li>
      <li>
        Baume.
      </li>
      <li>
        Bouquet.
      </li>
      <li>
        Capiteux.
      </li>
      <li>
        Effluve.
      </li>
      <li>
        Embaumer.
      </li>
      <li>
        Encens.
      </li>
      <li>
        Essence.
      </li>
      <li>
        Exhalaison.
      </li>
      <li>
        Fleuri.
      </li>
      <li>
        Fragrance.
      </li>
      <li>
        Musqué.
      </li>
      <li>
        Odeur.
      </li>
      <li>
        Odorant.
      </li>
      <li>
        Parfum, parfumé.
      </li>
      <li>
        Senteur.
      </li>
      <li>
        Suave, suavité.
      </li>
    </ul>

    <h2 class="mt-8">
      Les odeurs désagréables
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Âcre.
      </li>
      <li>
        Écœurant.
      </li>
      <li>
        Empuantir.
      </li>
      <li>
        Fétide, fétidité.
      </li>
      <li>
        Infect.
      </li>
      <li>
        Malodorant.
      </li>
      <li>
        Méphitique.
      </li>
      <li>
        Miasme.
      </li>
      <li>
        Moisi.
      </li>
      <li>
        Nauséabond.
      </li>
      <li>
        Pestilentiel.
      </li>
      <li>
        Puanteur.
      </li>
      <li>
        Putréfaction, putride.
      </li>
      <li>
        Rance.
      </li>
      <li>
        Relent.
      </li>
    </ul>

    <h2 class="mt-8">
      Les types de textes et de discours
    </h2>

    <ul class="list-disc list-inside">
      <li>
        Acrostiche.
      </li>
      <li>
        Adage.
      </li>
      <li>
        Allocution.
      </li>
      <li>
        Antienne.
      </li>
      <li>
        Aphorisme.
      </li>
      <li>
        Apologue.
      </li>
      <li>
        Apophtegme.
      </li>
      <li>
        Déprécation.
      </li>
      <li>
        Diatribe.
      </li>
      <li>
        Dithyrambe.
      </li>
      <li>
        Épigramme.
      </li>
      <li>
        Harangue.
      </li>
      <li>
        Homélie.
      </li>
      <li>
        Invective.
      </li>
      <li>
        Jérémiade.
      </li>
      <li>
        Maxime.
      </li>
      <li>
        Mercuriale.
      </li>
      <li>
        Oraison.
      </li>
      <li>
        Palinodie.
      </li>
      <li>
        Pamphlet.
      </li>
      <li>
        Panégyrique.
      </li>
      <li>
        Persifler, persiflage.
      </li>
      <li>
        Philippique.
      </li>
      <li>
        Soliloque.
      </li>
    </ul>
  </UContainer>
</template>
