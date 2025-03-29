import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

export const useClock = () => {
  const time = ref('')
  const interval = ref<ReturnType<typeof setInterval> | null>(null)
  const handleTime = () => {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    time.value = `${hours}:${minutes}:${String(seconds).length < 2 ? `0${seconds}` : seconds}`
  }
  onMounted(() => {
    interval.value = setInterval(() => {
      handleTime()
    }, 1000)
  })
  onBeforeUnmount(() => {
    if (interval.value) clearInterval(interval.value)
    interval.value = null
  })
  return { time }
}
