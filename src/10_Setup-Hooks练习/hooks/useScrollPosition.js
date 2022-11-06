import { ref, reactive } from 'vue'

export default function useScrollPosition() {
  const scrollX = ref(0)
  const scrollY = ref(0)

  // const scrollPosition = reactive({
  //   x: 0,
  //   y: 0
  // })

  document.addEventListener('scroll', () => {
    scrollX.value = window.scrollX
    scrollY.value = window.scrollY
  })

  return { scrollX, scrollY }
}
