<template>
  <div class="">
    <h2>当前计数: {{ counter }}</h2>
    <button @click="counter++">+1</button>
    <button @click="name = 'you'">修改name</button>
  </div>
</template>

<script>
import { ref, watch, watchEffect } from 'vue'

export default {
  setup() {
    const counter = ref(0)
    const name = ref('jing')

    // watch(counter, (newValue, oldValue) => {})

    // 1.watchEffect传入的函数默认会直接执行
    // 2.在执行过程中, 会自动的收集依赖(依赖哪些响应式的数据)
    const stopWatch = watchEffect(() => {
      console.log('----', counter.value, name.value)
      // 判断counger.value > 10, 停止侦听
      if (counter.value >= 10) {
        stopWatch()
      }
    })

    return {
      counter,
      name
    }
  }
}
</script>

<style scoped></style>
