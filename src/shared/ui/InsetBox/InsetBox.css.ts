import { insetBorders } from '@/shared/styles/borders.css'
import { grayMiddle } from '@/shared/styles/colors'
import { style } from '@vanilla-extract/css'

export const insetBox = style([
  insetBorders,
  {
    background: grayMiddle,
    padding: '0px 3px',
    display: 'inline-flex',
    alignItems: 'center',
  },
])
