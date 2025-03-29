<script lang="ts" setup>
import { computed } from 'vue'
import { dividerVariants } from './Divider.css'

const { vertical = false, horizontal = false } = defineProps<{
  vertical?: boolean
  horizontal?: boolean
}>()
const isVertical = computed(() => (!vertical && !horizontal) || vertical)
</script>
<template>
  <div
    :class="`${isVertical ? `w-[2px] ${dividerVariants.vertical}` : `w-full h-[2px] ${dividerVariants.horizontal}`}`"
  ></div>
</template>
