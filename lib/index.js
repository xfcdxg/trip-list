import { moment } from 'mulan-lib'
import { randomPhoto } from './unsplash'

export const fetchImg = async (image, rts = 0, isServer, now = moment('x')()) => {
  if (typeof image === 'undefined' || now - rts > 60 * 1000) {
    const { regular } = await randomPhoto()
    image = regular
    rts = now
  }
  return { image, rts }
}
