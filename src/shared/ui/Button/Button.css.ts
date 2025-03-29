import { buttonDoubleBorders, buttonDoubleInsetBorders } from '@/shared/styles/borders.css'
import { style, styleVariants } from '@vanilla-extract/css'

export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  background: '#c0c0c0',
  padding: '3px 5px',
  gap: '4px',
  fontSize: '11px',
  ':before': {
    content: '',
    position: 'absolute',
    pointerEvents: 'none',
    inset: '0px',
  },
})

export const buttonVariants = styleVariants({
  pressed: [buttonDoubleInsetBorders],
  basic: [buttonDoubleBorders],
})
