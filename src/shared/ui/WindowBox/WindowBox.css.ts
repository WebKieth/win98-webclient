import { windowDoubleBorders } from '@/shared/styles/borders.css'
import { grayMiddle } from '@/shared/styles/colors'
import { style } from '@vanilla-extract/css'

export const windowBox = style([
  windowDoubleBorders,
  {
    background: grayMiddle,
  },
])

export const windowPanelBox = style({
  background: 'linear-gradient(to right, #000080 0%, #1084D0 100%)',
})
