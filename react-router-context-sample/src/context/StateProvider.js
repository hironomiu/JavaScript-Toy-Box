import { createContext, useContext, useState } from 'react'

const StateContext = createContext({})

export const StateProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const serviceName = 'Super Web Site'

  return (
    <StateContext.Provider
      value={{ serviceName, isDark, setIsDark, isLogin, setIsLogin }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
