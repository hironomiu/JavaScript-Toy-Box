import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  status: 'idle',
}

export const incrementAsync = createAsyncThunk(
  'counter2/fetchCount',
  async (amount) => {
    const response = await new Promise((resolve) => {
      setTimeout(() => resolve({ data: amount }), 500)
    })
    return response.data
  }
)

export const couter2Slice = createSlice({
  name: 'counter2',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value += action.payload
      })
  },
})

export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState())
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount))
  }
}

export const { increment, decrement, incrementByAmount } = couter2Slice.actions

export const selectCount = (state) => state.counter2.value

export default couter2Slice.reducer
