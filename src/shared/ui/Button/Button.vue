<script lang="ts" setup>
import { button, buttonVariants } from './Button.css'
const { inset = false } = defineProps<{
  inset?: boolean
}>()
</script>
<template>
  <button
    :class="[
      button,
      { [`${buttonVariants.pressed}`]: inset },
      { [`${buttonVariants.basic}`]: !inset },
    ]"
  >
    <slot />
  </button>
</template>
