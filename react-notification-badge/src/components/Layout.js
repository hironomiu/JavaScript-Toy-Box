import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Layout = () => {
  return (
    <div style={{ height: '100vh', padding: '5px' }}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Layout
