import Footer from '@components/footer/Footer'
import Navbar from '@components/navbar/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTopButton from '@components/scrollToTop/ScrollToTopButton'
import ScrollToTop from '@components/scrollToTop/ScrollToTop'
import NewNavbar from '@components/navbar/NewNavbar'

function LayoutComponent() {
  return (
    <>
      {/* <Navbar /> */}
      <NewNavbar />
      <ScrollToTop />
      <ScrollToTopButton />
      <Outlet />
      <Footer />
    </>
  )
}

export default LayoutComponent
