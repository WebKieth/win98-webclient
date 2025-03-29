import { defineStore } from 'pinia'
import { ref } from 'vue'
import { v4 as uuid } from 'uuid'

type AppView = 'FileExplorer' | 'Music' | 'Settings'

type WindowBoxReference = {
  id: string
  title: string
  view: {
    type: AppView
    props: Record<string, unknown>
  }
  active: boolean
  collapsed: boolean
  expanded: boolean
}

export const useWindowsStore = defineStore('windowBoxesStore', () => {
  const windowBoxes = ref<WindowBoxReference[]>([])

  const addWindowBox = (title: string, type: AppView, props: Record<string, unknown>) => {
    windowBoxes.value.forEach((wb) => (wb.active = false))
    windowBoxes.value.push({
      id: uuid(),
      title: title,
      view: {
        type,
        props,
      },
      active: true,
      collapsed: false,
      expanded: false,
    })
  }

  const closeWindowBox = (id: string) => {
    const idx = windowBoxes.value.findIndex((wb) => wb.id === id)
    if (idx === -1) return
    windowBoxes.value.splice(idx, 1)
  }

  const activateWindowBox = (id: string) => {
    windowBoxes.value.forEach((wb) => {
      if (wb.id !== id) wb.active = false
      else wb.active = true
    })
  }

  return {
    windowBoxes,
    addWindowBox,
    closeWindowBox,
    activateWindowBox,
  }
})
