import React from 'react'
import { useLocation } from 'react-router-dom'
import bgSection2 from '@assets/images/section/bgSection2.png'
import bgSection3 from '@assets/images/section/contactUs.webp'

export default function BannerCompo() {
  const location = useLocation()

  const getTitleAndContent = () => {
    if (location.pathname.includes('/chinh-sach')) {
      return { title: 'Chính sách', content: 'Tìm hiểu về các chính sách của chúng tôi tại đây.' }
    }
    if (location.pathname.includes('/lien-he')) {
      return { title: 'Liên hệ', content: 'Hãy liên hệ với chúng tôi để được hỗ trợ.' }
    }
    if (location.pathname.includes('/ve-chung-toi')) {
      return { title: 'Giới thiệu', content: 'Hãy liên hệ với chúng tôi để được hỗ trợ.' }
    }
    return { title: 'Hero Message', content: 'Something interesting about hero message' }
  }

  const { title, content } = getTitleAndContent()

  return (
    <div
      className='h-[50vh] text-white text-center grid bg-cover bg-center'
      style={{ backgroundImage: `url(${bgSection3})` }}
    >
      <div className='col-start-1 row-start-1 bg-gray-800 bg-opacity-70 w-full h-full' />
      <div className='col-start-1 row-start-1 mx-auto my-auto'>
        <h1 className='font-bold text-[40px] uppercase'>{title}</h1>
        <p className='uppercase font-medium text-normal mt-4'>{content}</p>
      </div>
    </div>
  )
}
