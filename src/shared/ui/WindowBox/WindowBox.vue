<script lang="ts" setup>
import Collapse from '@/shared/icons/Collapse.vue'
import ActionButton from './children/ActionButton/ActionButton.vue'
import { windowBox, windowPanelBox } from './WindowBox.css'
import Expand from '@/shared/icons/Expand.vue'
import Cross from '@/shared/icons/Cross.vue'
import { useDesktopRoots } from '@/components/desktop/useDesktopRoots'
import { onMounted, ref, useTemplateRef, watch } from 'vue'
import { useWindowsStore } from '@/shared/store/windowsStore'
const { id } = defineProps<{
  id: string
}>()
const windowsStore = useWindowsStore()
const desktop = useDesktopRoots()
const windowBoxElement = ref<HTMLDivElement | null>(null)
const coords = ref<{ x: number; y: number }>({ x: 0, y: 0 })
const dragging = ref(false)
const handleDragStart = (e: MouseEvent) => {
  dragging.value = true
}
const handleDragMove = (e: MouseEvent) => {
  if (!dragging.value) return
  const { movementX, movementY } = e
  coords.value = {
    x: coords.value.x + movementX,
    y: coords.value.y + movementY,
  }
}
const handleDragEnd = (e: MouseEvent) => {
  console.log('end', e)
  dragging.value = false
}
const handleSetWindowCoords = () => {
  if (desktop.width.value && desktop.height.value && windowBoxElement.value) {
    const { clientWidth: boxWidth, clientHeight: boxHeight } = windowBoxElement.value
    coords.value = {
      x: desktop.width.value / 2 - boxWidth / 2,
      y: desktop.height.value / 2 - boxHeight / 2,
    }
  }
  console.log('desktop: ', desktop.width.value, desktop.height.value)
}
watch(desktop.element, () => {
  console.log(windowBoxElement.value?.clientHeight)
  handleSetWindowCoords()
})
onMounted(() => {
  handleSetWindowCoords()
})
</script>
<template>
  <div
    ref="windowBoxElement"
    :class="[windowBox, 'inline-flex w-fit flex-col']"
    :style="{ transform: `translate(${coords.x}px, ${coords.y}px)` }"
  >
    <div class="p-[1px]">
      <div
        :class="[
          windowPanelBox,
          'w-full px-[2px] py-[2px] flex items-center justify-between gap-2',
        ]"
      >
        <div
          class="flex items-center gap-[3px] text-white font-bold text-[11px]"
          @mousedown="handleDragStart"
          @mousemove="handleDragMove"
          @mouseup="handleDragEnd"
        >
          <slot name="title" />
        </div>
        <div class="flex gap-[1px]">
          <ActionButton>
            <Collapse class="self-end" />
          </ActionButton>
          <ActionButton>
            <Expand />
          </ActionButton>
          <ActionButton @click="() => windowsStore.closeWindowBox(id)">
            <Cross />
          </ActionButton>
        </div>
      </div>
    </div>
    <div class="p-[10px]">
      <slot />
    </div>
    <div class="p-[1px]">
      <slot name="footer" />
    </div>
  </div>
</template>
