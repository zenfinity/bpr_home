<template>
  <Landing />
  <nav class="ph3 ph5-ns pb2 pt4">
    <div class="flex nowrap overflow-x-auto bt bb bw1 b--mid-gray justify-center monospace">
      <a class="link gray f5 f4-ns dib pa2  mh2" href="#" title=""
      :class="{ active: activeView === 'VizCards' }"
      @click="activeView = 'VizCards'"
        >Cool Vizzes. (Not mine.)</a>
      <a
        class="link gray f5 f4-ns dib mr4 pa2 mh2"
        href="#"
        title="Energy Use"
        :class="{ active: activeView === 'LineChart' }"
      @click="activeView = 'LineChart'"
        >Energy Use</a
      >
    </div>
  </nav>
  <component :is="activeView"></component>
  <!-- <VizCards v-show="activeView === 'coolVizzes'"/>
  <LineChart v-show="activeView === 'energyChart'"/> -->
</template>

<script>
import Landing from "./components/Landing_.vue";
import LineChart from "./components/LineChart.vue";
import VizCards from "./components/VizCards.vue";
import BottomNav from "./components/BottomNav.vue";


export default {
  name: 'App',
  components: { Landing, LineChart, VizCards, BottomNav },
  data() {
    return {
      activeView: "LineChart",
      dataset: null
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    
  }
};
</script>

<style scoped></style>
