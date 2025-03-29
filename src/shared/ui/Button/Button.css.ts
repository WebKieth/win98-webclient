import { buttonDoubleBorders } from '@/shared/styles/borders.css'
import { style } from '@vanilla-extract/css'

export const button = style([
  buttonDoubleBorders,
  {
    display: 'inline-flex',
    alignItems: 'center',
    background: '#c0c0c0',
    padding: '3px 5px',
    gap: '4px',
    fontSize: '11px',
  },
])
