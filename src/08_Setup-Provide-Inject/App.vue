<template>
  <div class="app">
    <h2>AppContent: {{ name }}</h2>
    <button @click="name = 'you'">app btn</button>
    <ShowInfo></ShowInfo>
  </div>
</template>

<script>
import { ref, provide } from 'vue'
import ShowInfo from './ShowInfo.vue'
export default {
  components: {
    ShowInfo
  },
  setup() {
    const name = ref('jing')
    provide('name', name)
    provide('age', 22)
    
    return {
      name
    }
  }
}
</script>

<style scoped></style>
