import Footer from '@components/footer/Footer'
import Navbar from '@components/navbar/Navbar'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import ScrollToTopButton from '@components/scrollToTop/ScrollToTopButton'
import ScrollToTop from '@components/scrollToTop/ScrollToTop'
import NewNavbar from '@components/navbar/NewNavbar'
import BannerCompo from '@components/bannerCompo/BannerCompo'

function LayoutComponent() {
  // const location = useLocation()
  // const isHome = location.pathname === '/'
  return (
    <>
      {/* <Navbar /> */}
      <NewNavbar />
      {/* {!isHome && <BannerCompo />} */}
      <ScrollToTop />
      <ScrollToTopButton />
      <Outlet />
      <Footer />
    </>
  )
}

export default LayoutComponent
