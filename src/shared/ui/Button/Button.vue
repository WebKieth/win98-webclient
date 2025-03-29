<script lang="ts" setup>
import { button } from './Button.css'
</script>
<template>
  <button :class="`${button}`">
    <slot />
  </button>
</template>
