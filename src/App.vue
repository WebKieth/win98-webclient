<script setup lang="ts">
import Desktop from './components/desktop/Desktop.vue'
import Panel from './components/panel/Panel.vue'
import Shortcut from './shared/ui/Shortcut/Shortcut.vue'
import WindowBox from './shared/ui/WindowBox/WindowBox.vue'
import computerIcon from '@/assets/ComputerShortcut.png'
import { useWindowsStore } from './shared/store/windowsStore'
import { storeToRefs } from 'pinia'
const windowsStore = useWindowsStore()
const { windowBoxes } = storeToRefs(windowsStore)
</script>

<template>
  <!-- <RouterView /> -->
  <div class="flex flex-col">
    <Desktop>
      <div class="p-2">
        <Shortcut
          :icon="computerIcon"
          title="Мой компухтер"
          @dblclick="() => windowsStore.addWindowBox('Мой компухтер', 'FileExplorer', {})"
        />
      </div>
      <div class="absolute z-[1]">
        <WindowBox v-for="windowBox in windowBoxes" :key="windowBox.id" :id="windowBox.id">
          <template #title>{{ windowBox.title }}</template>
          {{ windowBox.view.type }}
        </WindowBox>
      </div>
    </Desktop>
    <Panel />
  </div>
</template>
