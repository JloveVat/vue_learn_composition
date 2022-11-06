<template>
  <div class="">
    {{ message }}
    <button @click="message = '你好, watch'">修改message</button>
    <h2>{{ info }}</h2>
    <button @click="info.friend.name = 'you'">修改info</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue'
export default {
  setup() {
    // 1.定义数据
    const message = ref('hello watch')
    const info = reactive({
      name: 'jing',
      age: 22,
      friend: {
        name: 'hang'
      }
    })

    // 2.侦听数据变化
    watch(message, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    })
    // watch(info, (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    //   console.log(newValue === oldValue)
    // }, {
    //   immediate: true
    // })

    // 3.侦听reactive数据变化后, 获取普通对象
    watch(
      () => ({ ...info }),
      (newValue, oldValue) => {
        console.log(newValue, oldValue)
      },
      {
        deep: true,
        immediate: true
      }
    )

    return {
      message,
      info
    }
  }
}
</script>

<style scoped></style>
