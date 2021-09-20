import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '../context/StateProvider'
import { useHistory, useLocation } from 'react-router'
import { LogoutIcon } from '@heroicons/react/outline'
import Modal from './Modal'

const Layout = ({ children }) => {
  const { isLogin, serviceName } = useStateContext()
  const history = useHistory()
  const location = useLocation()
  const [modalOn, setModalOn] = useState(false)

  useEffect(() => {
    if (!isLogin) history.push('/login')
  })

  return (
    <div className="flex items-center flex-col min-h-screen text-gray-600 font-mono">
      <header className="flex items-center pl-8 h-14 bg-gray-600 w-screen">
        <nav className="bg-gray-600 w-screen">
          <div className="flex items-center pl-8 h-14 ">
            <div className="flex space-x-4">
              <span className="font-semibold text-xl tracking-tight text-white">
                Super Web Site!!
              </span>
              <Link
                className="text-sm text-gray-200 hover:bg-gray-700 px-3 py-2 rounded"
                to="/"
              >
                Root
              </Link>
              <Link
                className="text-sm text-gray-200 hover:bg-gray-700 px-3 py-2 rounded"
                to="/component-a"
              >
                ComponentA
              </Link>
              <LogoutIcon
                className="h-10 w-10 text-gray-300 hover:bg-gray-700 px-1 rounded"
                aria-hidden="true"
                onClick={() => {
                  setModalOn(true)
                }}
              />
              {modalOn ? <Modal setModalOn={setModalOn} /> : null}
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      {location.pathname === '/' ? null : <Link to="/">Top</Link>}

      <footer className="flex justify-center bg-gray-400 w-screen absolute bottom-0 h-14">
        <div className="flex items-center">
          <p className="p-2">{serviceName}</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
