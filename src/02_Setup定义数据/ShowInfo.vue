<template>
  <div class="">
    <h2>ShowInfo: {{ name }} -{{ age }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    age: {
      type: Number,
      default: 0
    }
  },
  setup() {}
}
</script>

<style scoped></style>
