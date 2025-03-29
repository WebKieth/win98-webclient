<script lang="ts" setup>
import { computed, onMounted, provide, ref, useTemplateRef } from 'vue'
import { desktop } from './Desktop.css'
import { $desktop } from './provider'
import { useWindowsStore } from '@/shared/store/windowsStore'
import { storeToRefs } from 'pinia'
const windowsStore = useWindowsStore()
const { windowBoxes } = storeToRefs(windowsStore)
const draggableId = ref<string | undefined>()
const element = ref<HTMLDivElement | null>(null)
const width = ref(0)
const height = ref(0)
provide($desktop, { element, width, height })
onMounted(() => {
  width.value = element.value?.clientWidth || 0
  height.value = element.value?.clientHeight || 0
})
const windowBoxElements = computed(() =>
  windowBoxes.value.map((wb) => ({ id: wb.id, el: wb.view.dragElement })),
)
const handleDragStart = (e: MouseEvent) => {
  const path = e.composedPath()
  const box = windowBoxElements.value.find((box) =>
    path.some((item) => item instanceof Node && (item as Node).isSameNode(box.el)),
  )
  if (!box) return
  draggableId.value = box.id
  console.log(box, e.composedPath())
}
const handleDragMove = (e: MouseEvent) => {
  if (!draggableId.value) return
  console.log(draggableId.value, { x: e.movementX, y: e.movementY })
  windowsStore.changeWindowBoxDelta(draggableId.value, { x: e.movementX, y: e.movementY })
}
const handleDragEnd = (e: MouseEvent) => {
  draggableId.value = undefined
}
</script>
<template>
  <div
    ref="element"
    :class="`${desktop} relative h-full`"
    @mousedown="handleDragStart"
    @mousemove="handleDragMove"
    @mouseup="handleDragEnd"
  >
    <slot />
  </div>
</template>
