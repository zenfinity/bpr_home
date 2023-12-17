
<template>
  <article class="pv3 ph5">
    <h2 class="gray tc underline">Exploring Work From Home Energy</h2>
    <ApexLineChart />
    <ApexBarChart />
  </article>
  
</template>

<script>
import ApexLineChart from '../components/ApexLineChart.vue';
import ApexBarChart from '../components/ApexBarChart.vue';
export default {
  name: "EnergyUse",
  components: { ApexLineChart, ApexBarChart },
  data() {
    return {};
  },
  methods: {},
};
</script>
