<template lang="pug">
.flex
  img.w-12.h-12.mx-1(:src="playProgress.image")
  div
    .flex
      div
        p {{ playProgress.title }}
        p.text-sm.text-gray-400 {{ playProgress.artist }}
      .flex.content-center.place-items-center.ml-3
        font-awesome-icon.mx-1(:icon="['fas', 'backward-step']")
        font-awesome-icon.mx-1.rounded-full.text-gray-800.bg-gray-100.p-1.w-4.h-4(:icon="['fas', 'play']")
        font-awesome-icon.mx-1(:icon="['fas', 'forward-step']")
    .bg-black.h-2.rounded
      .bg-gray-200.h-full.rounded-l(:style="`width:${playProgress.progress * 100}%`")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PlayProgress } from "@/models/play-progress";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default defineComponent({
  name: "MusicBadge",
  props: ["playProgress"],
});
</script>
