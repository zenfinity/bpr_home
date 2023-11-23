<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <article class="mw7 center ph3 ph5-ns tc br2 pv5 mid-gray mb5">
      <h1 class="fw6 f1 f2-ns lh-title mt0 mb3 monospace">
        See Newly.
      </h1>
      <img class="w-50" src="/src/assets/img/bluepredvesica_v5.4_vert.png" alt="Blue Plus Red Logo">
      <h2 class="fw2 f4 lh-copy mt0 mb3">
        Helping inspire discovery.
      </h2>
      <p class="fw1 f5 mt0 mb3">
        Bespoke visualizations. Software development. Consulting.
      </p>
      <div>
        <a class="f6 br-pill bg-bpr-purple no-underline washed-green ba b--dark-gray pv2 ph3 dib mr3"
          href="https://www.linkedin.com/in/imacmoore/">
          Connect <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </article>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
