<template>
  <div class="mt2 mh5 flex flex-column justify-center items-center">
    <apexchart
      width="500"
      type="bar"
      :options="options"
      :series="series"></apexchart>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabaseClient";

// Make a request
// const supabase = this.$supabase
const summaryTableResponse = await supabase.from("summaryUseXCel").select("*");
// console.log(summaryTableResponse);
// console.log(kwhTableResponse.data[0]["date"]);

const years = [];

summaryTableResponse.data.forEach((element) => {
  years.push(element.year);
});

const sum = [];

summaryTableResponse.data.forEach((element) => {
  sum.push(element.sum);
});

const mean = [];

summaryTableResponse.data.forEach((element) => {
  mean.push(element.mean);
});

const min = [];

summaryTableResponse.data.forEach((element) => {
  min.push(element.min);
});

const max = [];

summaryTableResponse.data.forEach((element) => {
  max.push(element.max);
});


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
          id: "basic-bar",
          zoom: {
            enabled: false,
          },
          background: "none",
          stacked: false,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            dataLabels: {
              position: "top",
            },
            columnWidth: '50%',
          },
        },
        fill: {
          opacity: 0.8,
          pattern: {
            width: 2,
            // height: 6,
            // strokeWidth: 2,
          }
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: years,
          // title: {
          //   text: "Year",
          // },
          labels: {
            // style: {
            //   colors: ["#7D7D7D", "#7D7D7D", "#7D7D7D"],
            // },
          }
        },
        yaxis: {
          title: {
            text: "kWh",
          },
          labels: {
            formatter: function (val) {
              return val.toFixed(0);
            },
            style: {
              colors: ["#7D7D7D"],
            },
          },
        },
        // stroke: {
        //   curve: "straight",
        // },
        title: {
          text: "Yearly Energy Use",
          align: "center",
        },
        grid: {
          show: true,
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
            enabled: false,
            color: "#255aee",
            shadeTo: "light",
            shadeIntensity: 0.65,
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
          name: "Total",
          data: sum,
        },
        {
          name: "Average",
          data: mean,
        },
        {
          name: "Minimum",
          data: min,
        },
        {
          name: "Maximum",
          data: max,
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
