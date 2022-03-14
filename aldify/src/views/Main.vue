<template lang="pug">
.m-5
  div(v-if="search")
      .mx-auto
          c-song-card.my-3(v-for="song of songs" :song="song")
  div(v-else)
      .flex.justify-center
          button.text-gray-700.rounded-lg.py-1.px-3.mx-2.hover-bg-gray-100(:class="selectedIndex == 0 ? 'bg-gray-200' : ''" @click="Select(0)") Songs
          button.text-gray-700.rounded-lg.py-1.px-3.mx-2.hover-bg-gray-100(:class="selectedIndex == 1 ? 'bg-gray-200' : ''" @click="Select(1)") Albums
          button.text-gray-700.rounded-lg.py-1.px-3.mx-2.hover-bg-gray-100(:class="selectedIndex == 2 ? 'bg-gray-200' : ''" @click="Select(2)") Artists
      .mx-auto
          c-song-card.my-3(v-for="song of songs" :song="song")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BadgeButton from "@/components/BadgeButton.vue";
import Card from "@/components/Card.vue";
import { fetchAllSongs, fetchSongs } from "@/requests";
import { Song } from "@/models/song";

export default defineComponent({
  name: "Main",
  components: {
    "c-badge-button": BadgeButton,
    "c-song-card": Card,
  },
  props: ["search"],
  data(): { selectedIndex: number; songs: Song[] } {
    return {
      selectedIndex: 0,
      songs: [],
    };
  },
  async created() {
    this.loadSongs(this.search);
  },
  async beforeRouteUpdate(to, from) {
    this.loadSongs(to.query.search as string);
  },
  methods: {
    Select(index: number) {
      this.selectedIndex = index;
    },
    async loadSongs(search: string) {
      this.songs = await fetchSongs(search ? search : "*");
    },
  },
});
</script>
