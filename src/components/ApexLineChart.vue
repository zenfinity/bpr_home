<template>
  <div class="mt2 mh5 flex flex-column justify-center items-center">
    <apexchart
      width="500"
      type="line"
      :options="options"
      :series="series"></apexchart>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabaseClient";

// Make a request
// const supabase = this.$supabase
const kwhTableResponse = await supabase.from("monthlyUseXCel").select("*");
console.log(kwhTableResponse);
console.log(kwhTableResponse.data[0]["date"]);

const dates = [];

kwhTableResponse.data.forEach((element) => {
  dates.push(element.date);
});

const kWh = [];

kwhTableResponse.data.forEach((element) => {
  kWh.push(element.kWh);
});

console.log({ kWh });

// async function getTable() {
//     const { data mm } = await supabase.from('countries').select()
//     countries.value = data
//   }

export default {
  name: "Chart",
  data: function () {
    return {
      options: {
        chart: {
          id: "basic-line",
          zoom: {
            enabled: false,
          },
          background: 'none'
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: dates,
          title: {
            text: "Date",
          },
          type: 'datetime',
        },
        yaxis: {
          title: {
            text: "Energy Use (kWh)",
          },
          min: 0,
          max: 1000,
          labels: {
            formatter: function (val) {
              return val.toFixed(0);
            },
          },
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "Condo Energy Use",
          align: "center",
        },
        grid: {
            borderColor: '#767676',
          //   row: {
          //     colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          //     opacity: 0.5,
          //   },
        },
        theme: {
          mode: "dark",
          palette: "palette10",
          monochrome: {
            enabled: false,
            color: "#255aee",
            shadeTo: "light",
            shadeIntensity: 0.65,
          },
        },
      },
      series: [
        {
          name: "Energy Use (kWh)",
          data: kWh,
        },
      ],
    };
  },
};
</script>

<style scoped>
body {
  font: 10px sans-serif;
}

svg {
  color: #767676;
  margin: 25px;
}

apexchart {
  fill: none;
  stroke: #767676;
  stroke-width: 3px;
}
</style>
