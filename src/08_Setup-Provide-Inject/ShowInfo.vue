<template>
  <div class="">ShowInfo: {{ name }} - {{ age }}</div>
</template>

<script>
import { inject } from 'vue'
export default {
  // inject的option API注入需要手动解包
  // inject: ['name', 'age'],
  setup() {
    const name = inject('name')
    const age = inject('age')
    return {
      name,
      age
    }
  }
}
</script>

<style scoped></style>
