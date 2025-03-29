<script lang="ts" setup>
const { icon, title } = defineProps<{
  icon: string
  title: string
}>()
const emit = defineEmits<{
  (name: 'dblclick', e: MouseEvent): void
}>()
</script>
<template>
  <div
    class="inline-flex p-1 flex-col items-center gap-2 cursor-pointer"
    @dblclick="(e) => emit('dblclick', e)"
  >
    <img class="w-[48px]" :src="icon" alt="" />
    <span class="text-[11px]">{{ title }}</span>
  </div>
</template>
