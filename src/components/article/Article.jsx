import React from 'react'
import content6g from '@assets/images/content/content6g-1.jpg'
import bangthong1 from '@assets/images/content/bangthong1.png'
import proxy1 from '@assets/images/content/proxy1.jpg'
import proxyvsvpn1 from '@assets/images/content/proxyvsvpn1.jpg'
import socks51 from '@assets/images/content/socks51.png'
import { Link } from 'react-router-dom'
import SeeMore from '@components/seeMore/SeeMore'

export default function Article() {
  const newsData = [
    {
      id: 1,
      category: 'Kiến Thức',
      title: 'Proxy là gì? Các loại proxy phổ biến hiện nay',
      author: 'Admin',
      date: '27/02/2025',
      image: proxy1,
    },
    {
      id: 2,
      category: 'Mạng Internet',
      title: 'Mạng 6G là gì? mạng 6G có tốc độ bao nhiêu?',
      description:
        'Mạng 6G là gì? mạng 6G có tốc độ bao nhiêu? Làm sao để mạng 6G có thể nhanh gấp 500 lần so với 5G? Trong kỷ nguyên số hiện nay...',
      author: 'Admin',
      date: '03/03/2025',
      image: content6g,
    },
    {
      id: 3,
      category: 'Mạng Internet',
      title: 'Băng thông là gì?',
      author: 'Admin',
      date: '01/03/2025',
      image: bangthong1,
    },

    {
      id: 4,
      category: 'Kiến Thức',
      title: 'Sự khác biệt giữa VPN và Proxy - Nên chọn cái nào',
      author: 'Admin',
      date: '26/02/2025',
      image: proxyvsvpn1,
    },
    {
      id: 5,
      category: 'Kiến Thức',
      title: 'Tìm hiểu về SOCKS5 Proxy - Ưu điểm so với HTTP Proxy',
      author: 'Admin',
      date: '26/02/2025',
      image: socks51,
    },
  ]
  return (
    <section id='content' className=' dark:bg-dark py-14 lg:py-18 border-t'>
      <div className='container mx-auto '>
        <div className='w-full px-4'>
          <div className='mx-auto mb-[60px] max-w-[520px] text-center'>
            <h2 className='mb-3 text-3xl font-bold leading-[1.2] text-[#3B3B3B] dark:text-white sm:text-4xl md:text-[40px]'>
              Tin tức và sự kiện
            </h2>
          </div>
        </div>
      </div>

      <div className='lg:max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:px-0 px-4'>
        {newsData.map((news, index) => (
          <div
            key={news.id}
            className={` relative rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800 cursor-pointer ${
              index === 0 || index === 3 || index === 4 ? 'md:col-span-2 lg:col-span-2' : ''
            }`}
          >
            <img src={news.image} alt={news.title} className='w-full h-80 object-cover' />
            <div className='p-2 flex flex-col h-auto'>
              <span className='px-3 py-2 text-sm font-semibold rounded-full'>{news.category}</span>
              <h3 className='mt-1 mb-8 text-lg font-semibold text-[#3B3B3B] transition hover:opacity-75'>
                {news.title}
              </h3>
              <p className='absolute bottom-2 mt-2 text-[#3B3B3B] transition hover:opacity-75 text-sm'>
                {news.author} | {news.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='flex justify-center w-full mt-8 pt-2'>
        <SeeMore />
      </div>
    </section>
  )
}
