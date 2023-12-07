<template>
  <article class="mt2 mh5 flex flex-column justify-center items-center">
    <h3>(Under construction)</h3>
    <h2 class="gray">2021-2023</h2>
    <svg>
      <!-- <g style="transform: translate(0, 10px)">
        <path :d="line" />
      </g> -->
    </svg>
  </article>
</template>

<script>
import { ref } from "vue";
// var vgSpec = vegaLite.compile(vlSpec, options).spec;
import * as d3 from "d3";
// import csv from "/public/usage.csv";

const csvPath = "/usage.csv";
// console.log(props.csvData)
// console.log("d3 parse ",d3.csvParse(csvPath))

let kWh = [];
let Dates = [];

// csv.forEach((element) => {
//   // console.log(element);
//   kWh.push(Number(element.kWh));
// });

// console.log({ kWh });

export default {
  name: "vue-line-chart",
  props: ["csvData"],
  data() {
    return {
      // data: kWh,
      // line: "",
      // dataset: null,
    };
  },
  mounted() {
    const width = "500";
    const height = "270";
    const svg = d3.select("svg").attr("width", width).attr("height", height);
    const g = svg.append("g");
    // const data = d3.csv(csvPath);
    // console.log({data})
    // this.calculatePath(g);
    //2. Parse the dates
    const parseTime = d3.timeParse("%Y-%m-%d");

    //4. Creating a Line
    const line = d3
      .line()
      .x(function (d) {
        return x(parseTime(d.date));
      })
      .y(function (d) {
        return y(d.kWh);
      });

    // 3. Creating the Chart Axes
    var x = d3.scaleTime().range([0, width]);

    var y = d3.scaleLinear().range([height, 1]);

    //5. Appending the Axes to the Chart
    g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    g.append("g")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("fill", "#767676")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Energy Use (kWh)");

    //reading in CSV which contains data
    d3.csv(csvPath, function (data) {
      //using imported data to define extent of x and y domains
      x.domain(
        d3.extent(data, function (d) {
          return d.date;
        })
      );
      y.domain(
        d3.extent(data, function (d) {
          return d.total_km;
        })
      );

      //6. Appending a path to the Chart
      g.append("path").datum(data).attr("d", line);
    });
  },
  methods: {
    getScales() {
      const x = d3.scaleTime().range([0, 400]);
      const y = d3.scaleLinear().range([210, 0]);
      // d3.axisLeft().scale(x);
      // d3.axisBottom().scale(y);
      x.domain(d3.extent(this.data, (d, i) => i));
      y.domain([0, d3.max(this.data, (d) => d)]);
      return { x, y };
    },
    calculatePath(g) {
      const scale = this.getScales();
      const path = d3
        .line()
        .x((d, i) => scale.x(i))
        .y((d) => scale.y(d));
      g.append(path(this.data));
    },
    async getData() {
      let data = await d3.csv(csvPath);
      this.dataset = data;
      console.log("this.dataset creation ", this.dataset);
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
  color: #767676;
  margin: 25px;
}

path {
  fill: none;
  stroke: #767676;
  stroke-width: 3px;
}
</style>
