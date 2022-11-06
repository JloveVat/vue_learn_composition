<script setup>
// 不需要使用components:{}
// 1.所有编写在顶层的代码, 都是默认暴露给template可以使用
import { onMounted, ref } from 'vue'
import ShowInfo from './ShowInfo.vue'

// 2.定义响应式数据
const message = ref('Hello Setup')

// 3.定义绑定的函数
function changeMessage() {
  message.value = '你好, 语法糖'
}

function infoBtnClick(payload) {
  console.log('监听到showInfo内部点击: ', payload);
}

// 4.获取组件实例
const showInfoRef = ref()
onMounted(() => {
  showInfoRef.value.foo()
})
</script>

<template>
  <div class="app">
    <h2>AppContent: {{ message }}</h2>
    <button @click="changeMessage">修改message</button>
    <ShowInfo name="jing" :age="22" @infoBtnClick="infoBtnClick" ref="showInfoRef"></ShowInfo>
    <ShowInfo></ShowInfo>
    <ShowInfo></ShowInfo>
  </div>
</template>

<style scoped>

</style>
