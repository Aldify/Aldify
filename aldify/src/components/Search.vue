<template lang="pug">
div
  .bg-gray-100.rounded-full.inline.py-1.px-3
    input.bg-transparent.text-black.focus-outline-none(placeholder="Search" v-model="searchText")
  button(@click="search")
    font-awesome-icon.reverse.ml-2(:icon="['fas', 'magnifying-glass']")
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Search",
  data() {
      return {searchText: ""};
  },
  methods: {
      search() {
          this.$router.push({ name: "home", query: { search: this.searchText }})
      }
  }
});
</script>

<style lang="stylus" scoped>
// tailwind version stuck on v2 so .-scale-x-100 not working
.reverse
  transform: scaleX(-1)
</style>
