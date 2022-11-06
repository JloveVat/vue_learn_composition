<template>
  <div class="app">app</div>
</template>

<script>
import { onMounted, onUpdated, onUnmounted } from 'vue'
export default {
  setup() {
    // 在执行setup函数的过程中, 需要注册别的生命周期函数
    onMounted(() => {
      console.log('onmounted')
    })
    onUpdated(() => {
      console.log('onupdated')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
  }
}
</script>

<style scoped></style>
