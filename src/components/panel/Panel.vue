<script lang="ts" setup>
import Button from '@/shared/ui/Button/Button.vue'
import launchIcon from '@/assets/launch.png'
import Divider from '@/shared/ui/Divider/Divider.vue'
import InsetBox from '@/shared/ui/InsetBox/InsetBox.vue'
import { useClock } from '@/shared/hooks/useClock'
const { time } = useClock()
</script>
<template>
  <div class="w-full bg-[#C0C0C0] border-t border-white p-[1px] flex gap-[3px] justify-between">
    <div class="flex gap-[3px]">
      <Button>
        <img :src="launchIcon" alt="" />
        Start
      </Button>
      <Divider />
    </div>
    <div class="flex gap-[3px]">
      <Divider />
      <InsetBox class="text-xs">
        <div class="w-[52px] flex justify-center">{{ time }}</div>
      </InsetBox>
    </div>
  </div>
</template>
