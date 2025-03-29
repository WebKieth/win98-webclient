import { style } from '@vanilla-extract/css'
import wallpaper from '@/assets/wallpaper.jpg'

export const desktop = style({
  backgroundImage: `url('${wallpaper}')`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: 'calc(100vh - 28px)',
})
