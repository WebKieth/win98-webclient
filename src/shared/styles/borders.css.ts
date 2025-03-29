import { style } from '@vanilla-extract/css'
import { grayDark, grayLight } from './colors'

export const insetBorders = style({
  borderTop: `1px solid ${grayDark}`,
  borderLeft: `1px solid ${grayDark}`,
  borderRight: `1px solid ${grayLight}`,
  borderBottom: `1px solid ${grayLight}`,
})

export const buttonDoubleBorders = style({
  borderLeft: '1px solid white',
  borderTop: '1px solid white',
  borderRight: '1px solid black',
  borderBottom: '1px solid black',
  position: 'relative',
  '::before': {
    content: '',
    position: 'absolute',
    pointerEvents: 'none',
    inset: '0px',
    borderBottom: `1px solid ${grayDark}`,
    borderRight: `1px solid ${grayDark}`,
    borderTop: `1px solid ${grayLight}`,
    borderLeft: `1px solid ${grayLight}`,
  },
  selectors: {
    '&:active': {
      borderLeft: '1px solid black',
      borderTop: '1px solid black',
      borderRight: '1px solid white',
      borderBottom: '1px solid white',
    },
    '&:active:before': {
      borderBottom: `1px solid ${grayLight}`,
      borderRight: `1px solid ${grayLight}`,
      borderTop: `1px solid ${grayDark}`,
      borderLeft: `1px solid ${grayDark}`,
    },
  },
})

export const windowDoubleBorders = style({
  borderTop: `1px solid ${grayLight}`,
  borderLeft: `1px solid ${grayLight}`,
  borderBottom: '1px solid black',
  borderRight: '1px solid black',
  position: 'relative',
  '::before': {
    content: '',
    position: 'absolute',
    pointerEvents: 'none',
    inset: '0px',
    borderBottom: `1px solid ${grayDark}`,
    borderRight: `1px solid ${grayDark}`,
    borderTop: `1px solid white`,
    borderLeft: `1px solid white`,
  },
})
