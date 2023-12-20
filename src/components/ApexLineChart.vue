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
// console.log(kwhTableResponse);
// console.log(kwhTableResponse.data[0]["date"]);

const dates = [];

kwhTableResponse.data.forEach((element) => {
  dates.push(element.date);
});

const kWh = [];

kwhTableResponse.data.forEach((element) => {
  kWh.push(element.kWh);
});

// console.log({ kWh });

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
          background: "none",
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: dates,
          // title: {
          //   text: "Date",
          // },
          type: "datetime",
          labels: {
            show: true,
            rotate: -45,
            rotateAlways: false,
            hideOverlappingLabels: true,
            showDuplicates: false,
            trim: false,
            minHeight: undefined,
            maxHeight: 120,
            style: {
              // colors: [
              //   "#7D7D7D",
              //   "#7D7D7D",
              //   "#7D7D7D",
              //   "#7D7D7D",
              //   "#7D7D7D",
              //   "#7D7D7D",
              // ],
              // fontSize: "12px",
              // fontFamily: "Helvetica, Arial, sans-serif",
              // fontWeight: 400,
              // cssClass: "apexcharts-xaxis-label",
            },
          },
        },
        yaxis: {
          title: {
            text: "kWh",
          },
          min: 0,
          max: 1000,
          labels: {
            formatter: function (val) {
              return val.toFixed(0);
            },
            style: {
              colors: ["#7D7D7D"],

            },
          },
        },
        stroke: {
          curve: "straight",
          width: 3,
        },
        title: {
          text: "Monthly Energy Use",
          align: "center",
        },
        grid: {
          borderColor: "#767676",
          //   row: {
          //     colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          //     opacity: 0.5,
          //   },
        },
        theme: {
          mode: "dark",
          palette: "palette10",
          monochrome: {
            enabled: true,
            color: "#7D7D7D",
            shadeTo: "light",
            shadeIntensity: 1,
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
            format: "MMM yyyy",
          },
          y: {
            show: false,
            format: "MMM yyyy",
            formatter: undefined,
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
