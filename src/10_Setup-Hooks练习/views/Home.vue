<template>
  <div class="home">
    <h2>Home技术: {{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <button @click="popularClick">首页-流行</button>
    <button @click="hotClick">首页-热门</button>
    <button @click="songMenuClick">首页-歌单</button>

    <div class="scroll">
      <h2>x: {{ scrollX }}</h2>
      <h2>y: {{ scrollY }}</h2>
    </div>
  </div>
</template>

<script>
import useCounter from '../hooks/useCounter'
import useTitle from '../hooks/useTitle'
import useScrollPosition from '../hooks/useScrollPosition'
export default {
  setup() {
    // 1.counter逻辑
    const { counter, increment, decrement } = useCounter()

    // 2.修改标题
    const { title } = useTitle('首页')

    // 3.监听按钮的点击
    const popularClick = () => {
      title.value = '首页-流行'
    }
    const hotClick = () => {
      title.value = '首页-热门'
    }
    const songMenuClick = () => {
      title.value = '首页-歌单'
    }

    // 4.获取滚动位置
    const { scrollX, scrollY } = useScrollPosition()

    return {
      counter,
      increment,
      decrement,
      popularClick,
      hotClick,
      songMenuClick,
      scrollX,
      scrollY
    }
  }
}
</script>

<style scoped>

</style>
