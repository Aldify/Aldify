<template lang="pug">
.songs-background.flex
  .bg-gray-800.bg-opacity-70.text-white.rounded-2xl.px-10.py-20.ml-24.my-auto
    h2.text-4xl Welcome!
    p.text-lg to the newest streaming service available for all, always.
    .my-auto.float-right.mt-10
      c-rounded-button Sign Up
      c-rounded-button.bg-gray-400 Login
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RoundedButton from "@/components/RoundedButton.vue";

export default defineComponent({
  name: "Landing",
  components: {
    "c-rounded-button": RoundedButton,
  },
});
</script>

<style lang="stylus" scoped>
.songs-background
  background-image: url("../assets/songs.jpg")
</style>
