<script setup>
defineProps({
  name: {
    type: String,
    default: '默认值'
  },
  age: {
    type: Number,
    default: 0
  }
})

// 绑定函数, 并发出事件
const emits = defineEmits(['infoBtnClick'])
function showInfoBtnClick() {
  emits('infoBtnClick', 'showInfo内部按钮点击')
}

function foo() {
  console.log('foo function');
}
// 将函数暴露出去, 在父组件才能通过ref调用foo此方法
defineExpose({
  foo
})
</script>

<template>
  <div class="show-info">
    <div>ShowInfo: {{ name }} - {{ age }}</div>
    <button @click="showInfoBtnClick">showInfoButton</button>
  </div>
</template>

<style scoped>

</style>
