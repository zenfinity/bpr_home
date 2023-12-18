<template>
  <Landing />
  <nav class="ph3 ph5-ns pb2 pt4">
    <div
      class="flex nowrap overflow-x-auto bb bw1 b--mid-gray justify-center monospace">
      <a
        class="link gray f5 f4-ns dib mr4 pa2 mh2"
        href="#"
        title="Energy Use"
        :class="{ active: activeView === 'EnergyUse' }"
        @click="activeView = 'EnergyUse'"
        >Energy Use.</a
      >
      <a
        class="link gray f5 f4-ns dib pa2 mh2"
        href="#"
        title=""
        :class="{ active: activeView === 'VizCards' }"
        @click="activeView = 'VizCards'"
        >Cool Vizzes (not mine).</a
      >
    </div>
  </nav>
  <!-- Shown view component selected from above  -->
  <component :is="activeView"></component>

</template>

<script>
import Landing from "./components/Landing_.vue";
import VizCards from "./components/VizCards.vue";
import EnergyUse from "./views/energyUse.vue"

export default {
  name: "App",
  components: { Landing, VizCards, EnergyUse },
  data() {
    return {
      activeView: "EnergyUse",
      dataset: null,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style scoped></style>
