<script setup lang="ts">
import Desktop from './components/desktop/Desktop.vue'
import Panel from './components/panel/Panel.vue'
import Shortcut from './shared/ui/Shortcut/Shortcut.vue'
import computerIcon from '@/assets/ComputerShortcut.png'
import { useWindowsStore } from './shared/store/windowsStore'
import { storeToRefs } from 'pinia'
import AppWindowBox from './components/AppWindowBox/AppWindowBox.vue'
const windowsStore = useWindowsStore()
const { windowBoxes } = storeToRefs(windowsStore)
</script>

<template>
  <!-- <RouterView /> -->
  <div class="flex flex-col">
    <Desktop>
      <div class="absolute z-[1] inset-0">
        <Shortcut
          :icon="computerIcon"
          title="Мой компухтер"
          @dblclick="() => windowsStore.addWindowBox('Мой компухтер', 'FileExplorer', {})"
        />
        <AppWindowBox
          v-for="(windowBox, index) in windowBoxes"
          :key="windowBox.id"
          :id="windowBox.id"
          :title="windowBox.title"
        >
          {{ windowBox.view.type }}
        </AppWindowBox>
      </div>
    </Desktop>
    <Panel />
  </div>
</template>
