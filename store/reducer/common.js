import { mergeState } from 'mulan-lib'
import { common } from '../action/type'

const initialState = {}

export default (
  (state = initialState, action) => {
    switch (action.type) {
      case common.changeBackground:
        return mergeState(state, action)
      default: return state
    }
  }
)
