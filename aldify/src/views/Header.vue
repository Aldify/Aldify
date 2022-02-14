<template lang="pug">
.grid.grid-cols-4
  img(src="@/assets/logo.png")
  c-music-badge.my-auto(
    :play-progress=`{
        image: 'https://i.scdn.co/image/ab67616d0000b2738a11818dd00b24effd1545f4',
        title: 'Midnight City',
        artist: 'M83',
        progress: 0.66 }`)
  c-search.my-auto
  .my-auto
    c-rounded-button Sign Up
    c-rounded-button.bg-gray-400 Login
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MusicBadge from "@/components/MusicBadge.vue";
import Search from "@/components/Search.vue";
import RoundedButton from "@/components/RoundedButton.vue";

export default defineComponent({
  name: "Header",
  components: {
    "c-music-badge": MusicBadge,
    "c-search": Search,
    "c-rounded-button": RoundedButton,
  },
});
</script>
