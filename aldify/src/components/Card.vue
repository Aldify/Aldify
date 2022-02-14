<template lang="pug">
.w-36.h-56.rounded-lg.bg-black.text-white.flex.flex-col.justify-center
  p.text-center {{ title }}
  img.my-2(:src="image")
  p.text-center {{ artist }}
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  props: ["image", "title", "artist"],
});
</script>
