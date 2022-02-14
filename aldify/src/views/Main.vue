<template lang="pug">
div
  .flex.justify-center
    button.text-gray-700.rounded-lg.py-1.px-3.mx-2.hover-bg-gray-100(:class="selectedIndex == 0 ? 'bg-gray-200' : ''" @click="Select(0)") Songs
    button.text-gray-700.rounded-lg.py-1.px-3.mx-2.hover-bg-gray-100(:class="selectedIndex == 1 ? 'bg-gray-200' : ''" @click="Select(1)") Albums
    button.text-gray-700.rounded-lg.py-1.px-3.mx-2.hover-bg-gray-100(:class="selectedIndex == 2 ? 'bg-gray-200' : ''" @click="Select(2)") Artists
  c-card(
    image="https://m.media-amazon.com/images/I/81aTawcGdmL._AC_SL1500_.jpg"
    title="The Dark Side Of The Moon" artist="Pink Floyd")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BadgeButton from "@/components/BadgeButton.vue";
import Card from "@/components/Card.vue";

export default defineComponent({
  name: "Main",
  components: {
    "c-badge-button": BadgeButton,
    "c-card": Card,
  },
  data() {
    return {
      selectedIndex: 1,
    };
  },
  methods: {
    Select(index: number) {
      this.selectedIndex = index;
    },
  },
});
</script>
