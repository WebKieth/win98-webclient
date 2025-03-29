import type { Ref, ShallowRef } from 'vue'

export const $desktop = Symbol('desktop-root')

export type DesktopProvided = {
  width: Ref<number>
  height: Ref<number>
  element: Readonly<ShallowRef<HTMLDivElement | null>>
}
