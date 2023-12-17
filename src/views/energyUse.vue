<template>
  <article class="pv3 ph5">
    <h2 class="gray tc underline">Exploring Work From Home Energy</h2>
    <ApexLineChart />

    <div class="tc f3 pv2">
      <i class="fa-solid fa-arrow-down green ph2"></i>
      <span class="gray" v-text="reduction + '% over period'"></span>
    </div>

    <ApexBarChart />
  </article>
</template>

<script>
import ApexLineChart from "../components/ApexLineChart.vue";
import ApexBarChart from "../components/ApexBarChart.vue";

import { supabase } from "../lib/supabaseClient";

// Make a request
// const supabase = this.$supabase
const summaryTableResponse = await supabase.from("summaryUseXCel").select("*");
// console.log(summaryTableResponse);
// console.log(summaryTableResponse.data[0].sum)

// percent_decrease = ((kWh_2021 - kWh_2023) / kWh_2021) * 100
const percentReduced =
  ((summaryTableResponse.data[0].sum - summaryTableResponse.data[2].sum) /
    summaryTableResponse.data[0].sum) *
  100;
// console.log(percentReduced.toFixed(2))
export default {
  name: "EnergyUse",
  components: { ApexLineChart, ApexBarChart },
  data() {
    return {
      reduction: percentReduced.toFixed(0),
    };
  },
  methods: {},
};
</script>
