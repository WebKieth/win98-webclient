import { inject, ref } from 'vue'
import { $desktop, type DesktopProvided } from './provider'

export const useDesktopRoots = () => {
  const desktopRoots = inject<DesktopProvided>($desktop, {
    element: ref(null),
    height: ref(0),
    width: ref(0),
  })
  return desktopRoots
}
