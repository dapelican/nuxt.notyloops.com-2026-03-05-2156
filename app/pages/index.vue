<script setup>
const { t } = useI18n();

useSeoMeta({
  title: `${t('t_the_notes_made_to_be_reviewed')} | NotyLoops`,
});
</script>

<template>
  <UContainer>
    <h1 class="center">
      {{ $t('t_the_notes_made_to_be_reviewed') }}
    </h1>

    <hr class="separator-2">

    <section class="centered-max-width-650">
      <h2 class="flex items-center gap-4">
        <UIcon
          name="i-lucide-notebook-pen"
          class="text-success"
        />
        <span>
          1. {{ $t('t_feature_1_title') }}
        </span>
      </h2>

      <p>
        {{ $t('t_feature_1_description') }}
      </p>
    </section>

    <hr class="separator-2">

    <section class="centered-max-width-650">
      <h2 class="flex items-center gap-4">
        <UIcon
          name="i-lucide-tags"
          class="text-success"
        />
        <span>
          2. {{ $t('t_feature_2_title') }}
        </span>
      </h2>

      <p>
        {{ $t('t_feature_2_description') }}
      </p>
    </section>

    <hr class="separator-2">

    <section class="centered-max-width-650">
      <h2 class="flex items-center gap-4">
        <UIcon
          name="i-lucide-recycle"
          class="text-success"
        />
        <span>
          3. {{ $t('t_feature_3_title') }}
        </span>
      </h2>

      <p>
        {{ $t('t_feature_3_description') }}
      </p>
    </section>

    <hr class="separator-2">

    <hr class="separator-2">

    <div class="center">
      <!-- <h1 class="center">
        Prix
      </h1> -->

      <section class="pricing">
        <div class="pricing-unit">
          <h3>
            Accès gratuit
          </h3>

          <ul class="no-bullets">
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-x"
                class="size-5 shrink-0 text-error"
              />
              <span>250 notes maximum</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-x"
                class="size-5 shrink-0 text-error"
              />
              <span>Révisions bloquées au-delà de 250 notes</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-success"
              />
              <span>Notes avec texte</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-x"
                class="size-5 shrink-0 text-error"
              />
              <span>Notes sans image</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-x"
                class="size-5 shrink-0 text-error"
              />
              <span>Notes sans fichier audio</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-x"
                class="size-5 shrink-0 text-error"
              />
              <span>Pas de synthèse vocale</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-x"
                class="size-5 shrink-0 text-error"
              />
              <span>Pas d'import de notes</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-success"
              />
              <span>Accès aux notes publiques gratuites</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-success"
              />
              <span>Import de notes publiques gratuites</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-x"
                class="size-5 shrink-0 text-error"
              />
              <span>Pas d'accès aux notes publiques payantes</span>
            </li>
          </ul>

          <hr class="separator-1">

          <h3 class="center">
            0 €
          </h3>
        </div>

        <div class="pricing-unit">
          <h3>
            Accès premium - 1 an
          </h3>

          <ul class="no-bullets">
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-success"
              />
              <span>Notes illimitées</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-success"
              />
              <span>Révisions illimitées</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-success"
              />
              <span>Notes avec texte</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-success"
              />
              <span>Notes avec images</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-success"
              />
              <span>Notes avec fichiers audio</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-success"
              />
              <span>Synthèse vocale</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-success"
              />
              <span>Import illimité de notes à partir de fichiers CSV</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-success"
              />
              <span>Accès aux notes publiques gratuites</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-success"
              />
              <span>Import de notes publiques gratuites</span>
            </li>
            <li class="flex items-center gap-2">
              <UIcon
                name="i-lucide-circle-check"
                class="size-5 shrink-0 text-success"
              />
              <span>Possibilité d'acheter des notes publiques payantes</span>
            </li>
          </ul>

          <hr class="separator-1">

          <h3 class="numbers">
            <span class="strikethrough">
              75 €
            </span>

            <span>
              60 €
            </span>
          </h3>
        </div>
      </section>
    </div>

    <hr class="separator-2">

    <nav class="flex justify-center">
      <!-- <UButton
        class="cursor-pointer hover:text-inverted!"
        :to="'/a/sign-up-1'"
      >
        <span>{{ $t('t_sign_up_for_free') }}</span>
      </UButton> -->

      <UButton
        class="cursor-pointer hover:text-inverted!"
        :to="'/a/join-waiting-list'"
      >
        <span>{{ $t('t_join_waiting_list') }}</span>
      </UButton>
    </nav>
  </UContainer>
</template>

<style scoped>
.pricing {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.pricing-unit {
  text-align: left;
  width: fit-content;
}

.no-bullets {
  list-style: none;
  padding: 0;
  margin: 0;
}

.no-bullets li {
  padding-left: 0;
  margin-left: 0;
}

.numbers {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.strikethrough {
  text-decoration: line-through;
}
</style>
