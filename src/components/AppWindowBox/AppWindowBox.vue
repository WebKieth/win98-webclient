<script lang="ts" setup>
import WindowBox from '@/shared/ui/WindowBox/WindowBox.vue'
import { useWindowsStore } from '@/shared/store/windowsStore'
import { computed, onMounted, provide, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'

const { id } = defineProps<{
  id: string
  title: string
}>()
const boxPanelElement = ref<HTMLDivElement>()
const windowsStore = useWindowsStore()
const { windowBoxes } = storeToRefs(windowsStore)
const currentWindowBox = computed(() => windowBoxes.value.find((wb) => wb.id === id))
const windowPositionDelta = computed(() => currentWindowBox.value?.view.delta || { x: 0, y: 0 })
provide('windowBoxDelta', windowPositionDelta)
watch(boxPanelElement, () => {
  console.log('watch drag element')
  if (!boxPanelElement.value) return
  windowsStore.setWindowBoxDragElement(id, boxPanelElement.value)
})
</script>
<template>
  <WindowBox
    :focused="currentWindowBox?.active"
    @mounted="(panelEl) => (boxPanelElement = panelEl)"
    @close="() => windowsStore.closeWindowBox(id)"
  >
    <template #title>{{ title }}</template>
    <slot />
  </WindowBox>
</template>
