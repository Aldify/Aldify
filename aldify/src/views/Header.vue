<template lang="pug">
.grid.grid-cols-4.header-border
  router-link(:to="{ name: 'home' }")
    img.h-24.p-4(src="@/assets/logo.svg")
  .my-auto
    c-music-badge(v-if="hasPlayed" :key="progressKey" :play-progress="playProgress")
  c-search.my-auto
  .my-auto.text-right.mr-5
    c-rounded-button Sign Up
    c-rounded-button.bg-gray-400 Login
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MusicBadge from "@/components/MusicBadge.vue";
import Search from "@/components/Search.vue";
import RoundedButton from "@/components/RoundedButton.vue";
import { player } from "@/player";

let intervalHandle = 0;

export default defineComponent({
  name: "Header",
  components: {
    "c-music-badge": MusicBadge,
    "c-search": Search,
    "c-rounded-button": RoundedButton,
  },
  data() {
    return {
      // Force component render when progress is updated. Vue doesn't detect
      // changes because the playProgress reference stays constant but its
      // sub-properties are changed (re-assigning the variable doesn't fix
      // this either because the reference is still the same).
      progressKey: 0,
      playProgress: player.state(),
      hasPlayed: false,
    };
  },
  mounted() {
    intervalHandle = setInterval(this.update, 1000);
  },
  unmounted() {
    clearInterval(intervalHandle);
  },
  methods: {
    update() {
      this.hasPlayed = player.hasPlayed();
      this.progressKey += 1;
    },
  },
});
</script>

<style lang="stylus" scoped>
.header-border
  border-bottom-left-radius: 50px
</style>
