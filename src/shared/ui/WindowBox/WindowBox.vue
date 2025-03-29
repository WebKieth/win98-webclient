<script lang="ts" setup>
import Collapse from '@/shared/icons/Collapse.vue'
import ActionButton from './children/ActionButton/ActionButton.vue'
import { windowBox, windowPanelBoxVariants } from './WindowBox.css'
import Expand from '@/shared/icons/Expand.vue'
import Cross from '@/shared/icons/Cross.vue'
import { useDesktopRoots } from '@/components/desktop/useDesktopRoots'
import { computed, inject, onMounted, ref, watch } from 'vue'
const { focused = true } = defineProps<{
  focused?: boolean
}>()
const emit = defineEmits<{
  (eventName: 'close'): void
  (eventName: 'mounted', panelEl: HTMLDivElement): void
}>()
const desktop = useDesktopRoots()
const windowBoxElement = ref<HTMLDivElement | null>(null)
const windowBoxPanelElement = ref<HTMLDivElement | null>(null)
const coords = ref({ x: 0, y: 0 })
const delta = inject(
  'windowBoxDelta',
  computed(() => ({ x: 0, y: 0 })),
)
watch(
  delta,
  () => {
    coords.value.x += delta.value.x
    coords.value.y += delta.value.y
  },
  { deep: true },
)
const handleSetWindowCoords = () => {
  if (desktop.width.value && desktop.height.value && windowBoxElement.value) {
    const { clientWidth: boxWidth, clientHeight: boxHeight } = windowBoxElement.value
    coords.value = {
      x: desktop.width.value / 2 - boxWidth / 2,
      y: desktop.height.value / 2 - boxHeight / 2,
    }
  }
  console.log('desktop: ', desktop.width.value, desktop.height.value, coords.value)
}
watch(desktop.element, () => {
  handleSetWindowCoords()
})
onMounted(() => {
  handleSetWindowCoords()
  setTimeout(() => {
    if (!windowBoxPanelElement.value) return
    emit('mounted', windowBoxPanelElement.value)
  })
})
</script>
<template>
  <div
    ref="windowBoxElement"
    :class="[windowBox, 'absolute inline-flex w-fit flex-col']"
    :style="{ transform: `translate(${coords.x}px, ${coords.y}px)` }"
  >
    <div class="p-[1px]">
      <div
        ref="windowBoxPanelElement"
        :class="[
          'w-full px-[2px] py-[2px] flex items-center justify-between gap-2',
          {
            [`${windowPanelBoxVariants.focused}`]: focused,
            [`${windowPanelBoxVariants.blur}`]: !focused,
          },
        ]"
      >
        <div class="flex whitespace-nowrap items-center gap-[3px] text-white font-bold text-[11px]">
          <slot name="title" />
        </div>
        <div class="flex gap-[1px]">
          <ActionButton>
            <Collapse class="self-end" />
          </ActionButton>
          <ActionButton>
            <Expand />
          </ActionButton>
          <ActionButton @click="() => emit('close')">
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
