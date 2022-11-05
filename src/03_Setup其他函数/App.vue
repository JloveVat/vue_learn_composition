<template>
  <div class="app">
    <h2>App: {{ info }}</h2>
    <ShowInfo
      :info="info"
      :roInfo="roInfo"
      @changeInfoName="changeInfoName"
      @changeRoInfoName="changeRoInfoName"
    ></ShowInfo>
  </div>
</template>

<script>
import { reactive, readonly } from 'vue'
import ShowInfo from './ShowInfo.vue'

export default {
  components: {
    ShowInfo
  },
  setup() {
    // 本地定义多个数据, 都需要传递给子组件
    const info = reactive({
      name: 'jing',
      age: 22,
      height: 1.77
    })

    const changeInfoName = payload => {
      info.name = payload
    }

    // 使用readonly包裹info, 防止修改, roInfo不可修改, 防止子组件修改, 此处也不能修改, 但是可以修改当前组件中的info
    const roInfo = readonly(info)

    const changeRoInfoName = payload => {
      info.name = payload
    }

    return {
      info,
      roInfo,
      changeInfoName,
      changeRoInfoName
    }
  }
}
</script>

<style scoped></style>
