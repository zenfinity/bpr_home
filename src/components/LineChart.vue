<script setup>
import { ref } from 'vue'
var vgSpec = vegaLite.compile(vlSpec, options).spec;

usageJson = {};

usageFilePath = "../data/usage.csv"

Papa.parse(usageFilePath, {
	delimiter: "",	// auto-detect
	newline: "",	// auto-detect
	quoteChar: '"',
	escapeChar: '"',
	header: true,
  complete: function(results) {
      usageJson = results;
      
    }
});

console.log(usageJson); 

</script>

<template>

  <div class="vis">
  </div>


</template>

<style scoped>

</style>
