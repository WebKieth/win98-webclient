import { windowDoubleBorders } from '@/shared/styles/borders.css'
import { grayMiddle } from '@/shared/styles/colors'
import { style, styleVariants } from '@vanilla-extract/css'

export const windowBox = style([
  windowDoubleBorders,
  {
    background: grayMiddle,
  },
])

export const windowPanelBoxVariants = styleVariants({
  focused: {
    background: 'linear-gradient(to right, #000080 0%, #1084D0 100%)',
  },
  blur: {
    background: 'linear-gradient(to right, #808080 0%, #B5B5B5 100%)',
  },
})
