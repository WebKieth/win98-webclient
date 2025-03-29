<script lang="ts" setup>
import { insetBox } from './InsetBox.css'
</script>
<template>
  <div :class="insetBox">
    <slot />
  </div>
</template>
