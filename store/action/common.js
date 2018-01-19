import { common } from './type'

export const changeBackground = (bgImage, ts) => {
  return {
    type: common.changeBackground,
    bgImage,
    ts,
  }
}
