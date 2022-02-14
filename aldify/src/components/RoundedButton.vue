<template lang="pug">
button.rounded-full.py-1.px-4
  slot
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RoundedButton",
});
</script>

<style lang="stylus" scoped></style>
