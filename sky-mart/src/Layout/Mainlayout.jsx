import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Cart from '../components/Cart'
import { Outlet } from 'react-router'
import { MyStore } from '../context/MyContext'

const Mainlayout = () => {
  const { isCartOpen, setIsCartOpen } = useContext(MyStore)

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isCartOpen])

  return (
    <div>
      <Navbar/>
      <Outlet/>

      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sliding Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full z-50 transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Cart />
      </div>
    </div>
  )
}

export default Mainlayout