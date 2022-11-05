<template>
  <div class="app">
    <h2>{{ fullname }}</h2>
    <button @click="setFullName">修改names</button>
    <h2>{{ scoreLevel }}</h2>
  </div>
</template>

<script>
import { reactive, ref, computed } from '@vue/reactivity'

export default {
  setup() {
    const names = reactive({
      firstName: 'jing',
      lastName: 'you'
    })
    // const fullname = computed(() => {
    //   return names.firstName + ' ' + names.lastName
    // })
    const fullname = computed({
      set: newValue => {
        const tempNames = newValue.split(' ')
        names.firstName = tempNames[0]
        names.lastName = tempNames[1]
      },
      get: () => {
        return names.firstName + ' ' + names.lastName
      }
    })
    const setFullName = () => {
      fullname.value = 'jing hang'
    }

    // 2.定义score
    const score = ref(89)
    const scoreLevel = computed(() => {
      return score.value >= 60 ? '及格' : '不及格'
    })

    return { fullname, scoreLevel, setFullName }
  }
}
</script>

<style scoped></style>
