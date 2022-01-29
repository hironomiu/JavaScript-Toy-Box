import { createContext, useContext, useState } from 'react'

const StateContext = createContext()

export const StateProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  return (
    <StateContext.Provider value={{ count, setCount }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
