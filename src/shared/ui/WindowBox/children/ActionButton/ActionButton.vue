<script lang="ts" setup>
import Button from '@/shared/ui/Button/Button.vue'
import { actionButton } from './ActionButton.css'
</script>
<template>
  <Button :class="actionButton">
    <slot />
  </Button>
</template>
