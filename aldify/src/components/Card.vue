<template lang="pug">
.w-36.h-56.rounded-lg.bg-black.text-white.flex.flex-col.justify-center
  p.text-center {{ song.name }}
  img.my-2(:src="song.imageUrl")
  p.text-center {{ song.artistName }}
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  props: ["song"],
});
</script>
