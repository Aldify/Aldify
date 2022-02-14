<template lang="pug">
.grid.root-grid-rows.h-screen
  c-header.bg-gray-800.text-gray-100
  c-main.m-5
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/views/Header.vue";
import Main from "@/views/Main.vue";

export default defineComponent({
  name: "Main",
  components: {
    "c-header": Header,
    "c-main": Main,
  },
});
</script>

<style lang="stylus">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

.root-grid-rows
  grid-template-rows: auto minmax(0, 1fr)
</style>
