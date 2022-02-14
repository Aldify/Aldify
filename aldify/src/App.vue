<template lang="pug">
c-header.bg-gray-800.text-gray-100
c-main
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
</style>
