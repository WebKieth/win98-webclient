import { defineStore } from 'pinia'
import { ref } from 'vue'
import { v4 as uuid } from 'uuid'

type AppView = 'FileExplorer' | 'Music' | 'Settings'

type WindowBoxReference = {
  id: string
  title: string
  view: {
    dragElement: HTMLDivElement | null
    type: AppView
    props: Record<string, unknown>
    delta: {
      x: number
      y: number
    }
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
        dragElement: null,
        type,
        props,
        delta: {
          x: 0,
          y: 0,
        },
      },
      active: true,
      collapsed: false,
      expanded: false,
    })
  }

  const findWindowBoxById = (id: string) => windowBoxes.value.find((wb) => wb.id === id)

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

  const changeWindowBoxDelta = (id: string, coords: { x: number; y: number }) => {
    const windowBox = findWindowBoxById(id)
    if (!windowBox) return
    windowBox.view.delta.x = coords.x
    windowBox.view.delta.y = coords.y
  }

  const setWindowBoxDragElement = (id: string, element: HTMLDivElement) => {
    const windowBox = findWindowBoxById(id)
    if (!windowBox) return
    windowBox.view.dragElement = element
  }

  return {
    windowBoxes,
    findWindowBoxById,
    setWindowBoxDragElement,
    addWindowBox,
    closeWindowBox,
    activateWindowBox,
    changeWindowBoxDelta,
  }
})
