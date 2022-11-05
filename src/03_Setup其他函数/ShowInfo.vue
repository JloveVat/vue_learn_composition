<template>
  <div class="show-info">
    <h2>ShowInfo: {{ info }}</h2>
    <!-- 代码没有错误, 但是违背规范(单向数据流) -->
    <button @click="info.name = 'you'">ShowInfo违背单向数据流按钮</button>
    <!-- 正确的姿势 -->
    <button @click="showInfobtnClick">ShowInfo合规按钮</button>
    <hr />
    <!-- 使用readonly的数据 -->
    <h2>roInfo: {{ roInfo }}</h2>
    <!-- 代码会无效(报警告) -->
    <button @click="roInfo.name = 'hang'">roInfo无法修改按钮</button>
    <!-- 正确做法 -->
    <button @click="roInfobtnClick">roInfo合规按钮</button>

  </div>
</template>

<script>
export default {
  props: {
    // reactive数据
    info: {
      type: Object,
      default: () => ({})
    },
    // readonly数据
    roInfo: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['changeInfoName', 'changeRoInfoName'],
  setup(props, context) {
    const showInfobtnClick = () => {
      context.emit('changeInfoName', 'you')
    }

    const roInfobtnClick = () => {
      context.emit('changeRoInfoName', 'hang')
    }

    return {
      showInfobtnClick,
      roInfobtnClick
    }
  }
}
</script>

<style scoped></style>
