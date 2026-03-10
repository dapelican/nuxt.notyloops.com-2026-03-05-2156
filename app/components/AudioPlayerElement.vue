<script setup>
const props = defineProps({
  audio_url: {
    type: String,
    required: true,
    validator: (value) => value.trim().length > 0,
  },
});

const audio_ref = ref(null);
const current_time = ref(0);
const duration = ref(0);
const is_playing = ref(false);

const progress_percent = computed(() => {
  const dur = duration.value;
  const curr = current_time.value;
  if (dur > 0 && Number.isFinite(dur)) {
    return (curr / dur) * 100;
  }
  // Fallback when duration is unknown (e.g. streaming): advance bar by time (1% per second)
  return Math.min(100, curr);
});

const togglePlayPause = () => {
  if (!audio_ref.value) {
    return;
  }
  if (is_playing.value) {
    audio_ref.value.pause();
  } else {
    audio_ref.value.play();
  }
};

const onTimeUpdate = () => {
  if (!audio_ref.value) {
    return;
  }
  current_time.value = audio_ref.value.currentTime;
  // Duration can become available only after playback/buffering (e.g. remote streams)
  if (duration.value <= 0 || !Number.isFinite(duration.value)) {
    setDurationFromAudio();
  }
};

const setDurationFromAudio = () => {
  if (audio_ref.value && Number.isFinite(audio_ref.value.duration) && audio_ref.value.duration > 0) {
    duration.value = audio_ref.value.duration;
  }
};

const onLoadedMetadata = setDurationFromAudio;
const onDurationChange = setDurationFromAudio;

const onEnded = () => {
  is_playing.value = false;
  current_time.value = 0;
};

const onPlay = () => {
  is_playing.value = true;
};

const onPause = () => {
  is_playing.value = false;
};

watch(() => props.audio_url, () => {
  current_time.value = 0;
  duration.value = 0;
});
</script>

<template>
  <div
    v-if="audio_url"
    class="flex flex-col gap-3 w-full border border-default rounded-lg my-2 p-3"
  >
    <audio
      ref="audio_ref"
      :src="audio_url"
      preload="metadata"
      @timeupdate="onTimeUpdate"
      @loadedmetadata="onLoadedMetadata"
      @loadeddata="setDurationFromAudio"
      @durationchange="onDurationChange"
      @ended="onEnded"
      @play="onPlay"
      @pause="onPause"
    />

    <div class="flex items-center gap-3">
      <UButton
        color="neutral"
        variant="ghost"
        size="xl"
        :icon="is_playing ? 'i-lucide-pause' : 'i-lucide-play'"
        :aria-label="is_playing ? 'Pause' : 'Play'"
        class="shrink-0 cursor-pointer"
        @click="togglePlayPause"
      />

      <UProgress
        :model-value="progress_percent"
        :max="100"
        class="flex-1 min-w-0"
        size="sm"
      />
    </div>
  </div>
</template>
