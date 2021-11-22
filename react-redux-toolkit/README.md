# react-redux-toolkit

`create-react-app`のテンプレート`--template redux`を順を追って作成する

## SetUp

```
mkdir react-redux-toolkit
cd react-redux-toolkit
npx create-react-app . --template redux
```

## run

```
yarn start
```

## counter2 の作成

`src/features`配下に`couter2`ディレクトリを作成

```
mkdir src/features/counter2
```

`src/features/counter2`配下に`Counter2.js`を作成し以下を記述

```
import React from 'react'

const Counter2 = () => {
  return <div>Counter2</div>
}

export default Counter2
```

`src/App.js`に`Counter2`コンポーネントを組み込む（以下に修正）画面に`Counter2`が表示されること

```
import React from 'react'
import { Counter } from './features/counter/Counter'
import Counter2 from './features/counter2/Counter2'
import './App.css'

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter2 />
    </div>
  )
}

export default App
```

`Counter2.js`に減算、カウンター、加算のタグを追加（以下に修正）

```
import React from 'react'

const Counter2 = () => {
  return (
    <div>
      <button>-</button>
      <input type="text" />
      <button>+</button>
    </div>
  )
}

export default Counter2
```

`src/features/counter2`配下に`counter2Slice.js`を作成

```
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  status: 'idle',
}

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
  },
})

export const { increment, decrement } = couter2Slice.actions

export const selectCount = (state) => state.counter2.value

export default couter2Slice.reducer
```

`src/app/store.js`に作成した redux を追加

```
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import counter2Reducer from '../features/counter2/counter2Slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counter2: counter2Reducer,
  },
})
```

`Counter2.js`に作成した`counter2Reducer`を組み込む（以下に修正）

```
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, selectCount } from './counter2Slice'

const Counter2 = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}

export default Counter2

```

`Counter2.js`に style の適用（`Counter.js`で利用しているスタイルを流用）

```
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, selectCount } from './counter2Slice'
import styles from '../counter/Counter.module.css'

const Counter2 = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button className={styles.button} onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
    </div>
  )
}

export default Counter2
```

`Counter2.js`に `input`,`Add Amount`,`Add Async`,`Add If Odd`を追加

```
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, selectCount } from './counter2Slice'
import styles from '../counter/Counter.module.css'

const Counter2 = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)
  const [incrementAmount, setIncrementAmount] = useState(2)

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button className={styles.button} onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button className={styles.button}>Add Amount</button>
        <button className={styles.button}>Add Async</button>
        <button className={styles.button}>Add If Odd</button>
      </div>
    </div>
  )
}

export default Counter2

```

`counter2Slice`に`incrementByAmount`を追加

```
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  status: 'idle',
}

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
})

export const { increment, decrement, incrementByAmount } = couter2Slice.actions

export const selectCount = (state) => state.counter2.value

export default couter2Slice.reducer
```

`Counter2.js`に`Add Amount`を実装

```
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  selectCount,
  incrementByAmount,
} from './counter2Slice'
import styles from '../counter/Counter.module.css'

const Counter2 = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)
  const [incrementAmount, setIncrementAmount] = useState(2)
  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button className={styles.button} onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button className={styles.button}>Add Async</button>
        <button className={styles.button}>Add If Odd</button>
      </div>
    </div>
  )
}

export default Counter2
```

`counter2Slice`に`Add Async`を実装

```
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

export const { increment, decrement, incrementByAmount } = couter2Slice.actions

export const selectCount = (state) => state.counter2.value

export default couter2Slice.reducer

```

`Counter2.js`に`Add Async`を組み込む(`Add Asyn`のスタイルも修正)

```
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  selectCount,
  incrementByAmount,
  incrementAsync,
} from './counter2Slice'
import styles from '../counter/Counter.module.css'

const Counter2 = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)
  const [incrementAmount, setIncrementAmount] = useState(2)
  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button className={styles.button} onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button className={styles.button}>Add If Odd</button>
      </div>
    </div>
  )
}

export default Counter2
```

`counter2Slice`に`Add Iff Odd`を実装

```
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

```

`Counter2.js`に`Add If Odd`を組み込む

```
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  selectCount,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
} from './counter2Slice'
import styles from '../counter/Counter.module.css'

const Counter2 = () => {
  const dispatch = useDispatch()
  const count = useSelector(selectCount)
  const [incrementAmount, setIncrementAmount] = useState(2)
  const incrementValue = Number(incrementAmount) || 0

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button className={styles.button} onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  )
}

export default Counter2

```
