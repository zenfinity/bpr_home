<template>
  <article class="mt2 mh5">
    <h2 class="gray">2021-2023</h2>
    <svg width="500" height="270">
    <g style="transform: translate(0, 10px)">
      <path :d="line" />
    </g>
  </svg>
  </article>
</template>

<script>
import { ref } from "vue";
// var vgSpec = vegaLite.compile(vlSpec, options).spec;
import * as d3 from "d3"
import csv from "../data/usage.csv"

console.log(csv[0]["Date"])

let kWh = []
let Dates = []

csv.forEach(element => {
  console.log(element)
  kWh.push(Number(element.kWh))
  
});

console.log({kWh})

export default {
  name: 'vue-line-chart',
  data() {
    return {
      data: kWh,
      line: '',
    };
  },
  mounted() {
    this.calculatePath();
  },
  methods: {
    getScales() {
      const x = d3.scaleTime().range([0, 400]);
      const y = d3.scaleLinear().range([210, 0]);
      d3.axisLeft().scale(x);
      d3.axisBottom().scale(y);
      x.domain(d3.extent(this.data, (d, i) => i));
      y.domain([0, d3.max(this.data, d => d)]);
      return { x, y };
    },
    calculatePath() {
      const scale = this.getScales();
      const path = d3.line()
        .x((d, i) => scale.x(i))
        .y(d => scale.y(d));
      this.line = path(this.data);
    },
  },
};
</script>
<!-- End script  -->

<style scoped>
body {
  font: 10px sans-serif;
}

svg {
  margin: 25px;
}

path {
  fill: none;
  stroke: #767676;
  stroke-width: 3px;
}
</style>
