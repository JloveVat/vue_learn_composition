<template>
  <div class="app">
    <h2>info: {{ name }}-{{ age }} - {{ height }}</h2>
    <button @click="age++">修改age</button>
    <button @click="height = 1.8">修改height</button>
  </div>
</template>

<script>
import { isProxy, reactive, toRef, toRefs } from 'vue'
export default {
  setup() {
    const info = reactive({
      name: 'jing',
      age: 22,
      height: 1.77
    })

    // reactive被解构后会变成普通的值, 失去响应式
    // const { name, age } = info
    const { name, age } = toRefs(info)
    const height = toRef(info, 'height')
    console.log(isProxy(info))

    return {
      name,
      age,
      height
    }
  }
}
</script>

<style scoped></style>
