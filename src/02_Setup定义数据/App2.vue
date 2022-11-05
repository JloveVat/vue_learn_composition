<template>
  <div class="app2">
    <form action="">
      账号: <input type="text" v-model="account.username" /> 密码: <input type="password" v-model="account.password" />
    </form>
    <form action="">
      账号: <input type="text" v-model="username" /> 密码: <input type="password" v-model="password" />
    </form>
    <hr>
    <ShowInfo name="jingyou" :age="22"></ShowInfo>
  </div>
</template>

<script>
import { onMounted, reactive, ref } from 'vue'
import ShowInfo from './ShowInfo.vue'
export default {
  components: {
    ShowInfo
  },
  setup() {
    // 定义响应式数据: reactive/ref
    // 强调: ref也可以定义复杂的数据
    const info = ref({})
    console.log(info.value)

    // 1.reactive的应用场景
    // 1.1.条件一: reactive应用于本地的数据
    // 1.2.条件二: 多个数据之间是有关系/联系(聚合的数据, 组织在一起会有特定作用)
    const account = reactive({
      username: 'jingyou',
      password: 'jysh'
    })

    const username = ref('jingyou')
    const password = ref('123456')
    const name = ref('jingyou')
    const age = ref(22)

    // 2.ref的应用场景: 其他的场景基本都用ref(computed)
    // 2.1.定义本地的一些简单数据
    const message = ref('Hello ref')
    const counter = ref(0)

    // 2.2.定义从网络中获取的数据也是使用ref
    // const musics = reactive([])
    const musics = ref([])
    onMounted(() => {
      const serverMusics = ['追梦赤子心', '海阔天空', '孤勇者']
      musics.value = serverMusics
    })

    return {
      info,
      account,
      username,
      password,
      name,
      age
    }
  }
}
</script>

<style scoped></style>
