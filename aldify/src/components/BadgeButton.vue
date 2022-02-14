<template lang="pug">
button
  slot
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BadgeButton",
});
</script>
