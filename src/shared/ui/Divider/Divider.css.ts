import { grayDark } from '@/shared/styles/colors'
import { styleVariants } from '@vanilla-extract/css'

export const dividerVariants = styleVariants({
  vertical: {
    borderLeft: `1px solid white`,
    borderRight: `1px solid ${grayDark}`,
  },
  horizontal: {
    borderTop: `1px solid white`,
    borderBottom: `1px solid ${grayDark}`,
  },
})
