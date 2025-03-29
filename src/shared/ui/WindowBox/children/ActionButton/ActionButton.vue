<script lang="ts" setup>
import { actionButton } from './ActionButton.css'
</script>
<template>
  <button :class="actionButton">
    <slot />
  </button>
</template>
