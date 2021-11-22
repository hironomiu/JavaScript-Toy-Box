import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import counter2Reducer from '../features/counter2/counter2Slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counter2: counter2Reducer,
  },
})
