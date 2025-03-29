<script lang="ts" setup>
import { onMounted, provide, ref, useTemplateRef } from 'vue'
import { desktop } from './Desktop.css'
import { $desktop } from './provider'
const element = ref<HTMLDivElement | null>(null)
const width = ref(0)
const height = ref(0)
provide($desktop, { element, width, height })
onMounted(() => {
  width.value = element.value?.clientWidth || 0
  height.value = element.value?.clientHeight || 0
})
</script>
<template>
  <div ref="element" :class="`${desktop} relative h-full`">
    <slot />
  </div>
</template>
