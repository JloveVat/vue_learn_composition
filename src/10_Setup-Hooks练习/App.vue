<template>
  <div class="app">
    <div>AppContent</div>
    <button @click="changeTitle">修改title</button>

    <!-- 1.计数器 -->
    <!-- <hr />
    <Home></Home>
    <hr />
    <About></About> -->

    <!-- 2.home和about页面的切换 -->
    <button @click="currentPage = 'home'">home</button>
    <button @click="currentPage = 'about'">about</button>

    <component :is="currentPage"></component>
    <h2>{{ scrollX }} -- {{ scrollY }}</h2>

    <div class="content"></div>

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
import { ref } from 'vue'
import Home from './views/Home.vue'
import About from './views/About.vue'

import useTitle from './hooks/useTitle'
import useScrollPosition from './hooks/useScrollPosition'

export default {
  components: {
    Home,
    About
  },
  setup() {
    // document.title = '这是修改的标题'
    const currentPage = ref('home')

    const changeTitle = () => {
      useTitle('app title')
    }

    const { scrollX, scrollY } = useScrollPosition()

    return {
      currentPage,
      changeTitle,
      scrollX,
      scrollY
    }
  }
}
</script>

<style scoped>
.content {
  width: 3000px;
  height: 100px;
  background-color: #00adff;
}
</style>
