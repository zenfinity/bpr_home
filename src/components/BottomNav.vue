<template>
  <nav class="ph3 ph5-ns pb2 pt4">
    <div class="flex nowrap overflow-x-auto bt bb bw1 b--mid-gray justify-center monospace">
      <a class="link dim gray f5 f4-ns dib pa2  mh2" href="#" title=""
      :class="{ active: activeView === 'coolVizzes' }"
      @click="activeView = 'coolVizzes'"
        >Cool Vizzes. (Not mine.)</a>
      <a
        class="link dim gray f5 f4-ns dib mr4 pa2 mh2"
        href="#"
        title="Energy Use"
        :class="{ active: activeView === 'energyChart' }"
      @click="activeView = 'energyChart'"
        >Energy Use</a
      >
    </div>
  </nav>
</template>

<script>
export default {
  props: ['activeView'],
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>
