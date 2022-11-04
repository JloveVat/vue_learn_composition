<template>
  <div class="app">
    <h2>message: {{ message }}</h2>
    <button @click="changeMessage">修改message</button>
    <hr />
    <h2>账号: {{ account.username }}</h2>
    <h2>密码: {{ account.password }}</h2>
    <button @click="changeAccount">修改账号</button>
    <hr />
    <!-- 默认情况下在template中使用ref时, vue会自动对其解包(取出其中的value), 因此此处不需要.value -->
    <h2>当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <hr />
    <!-- 早期此处需要.value, 现在使用时需要写.value -->
    <h2>当前计数: {{ info.counter }}</h2>
    <button @click="info.counter.value++">+1</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  setup() {
    // 1.定义普通的数据: 可以正常的被使用
    // 缺点: 数据不是响应式的
    let message = 'Hello Setup'
    const changeMessage = () => {
      message = '学习setup函数'
      console.log(message)
    }

    // 2.定义响应式数据
    // 2.1.reactive函数: 定义复杂类型数据
    const account = reactive({
      username: 'jingyou',
      password: 'jysh'
    })
    const changeAccount = () => {
      account.username = '账号'
      account.password = '密码'
    }

    // 2.2.ref函数: 一般定义简单类型数据(也可以定义复杂的)
    // counter定义
    const counter = ref(0)
    const increment = () => {
      counter.value++
    }
    const decrement = () => {
      counter.value--
    }

    // 3.ref是浅层解包
    const info = {
      counter
    }

    return {
      message,
      account,
      counter,
      changeMessage,
      changeAccount,
      increment,
      decrement,

      info
    }
  }
}
</script>

<style scoped></style>
