import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import reducer from './reducer'

const selfInitialState = {}

// const persistConfig = {
//   key: '',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

export default (
  (initialState = selfInitialState) => (
    createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
  )
)
