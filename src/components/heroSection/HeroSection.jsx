import React from 'react'
import Lottie from 'lottie-react'
// import bgBanner4 from '@animations/bgBanner4.json'
// import bgBanner5 from '@animations/bgBanner5.json'
import { Link } from 'react-router-dom'
import VideoBanner from '@assets/video/VideoBanner.mp4'
import CustomButton from '@components/common/button/CustomButton'
import { PhoneOutlined } from '@ant-design/icons'

export default function HeroSection() {
  return (
    <div id='home' className='relative overflow-hidden lg:py-20 lg:h-screen h-[95vh] dark:bg-dark bg-[#090E34]'>
      {/* Video Background */}
      <video
        className='absolute top-0 left-0 w-full h-full object-cover z-0 transform scale-x-[-1]'
        src={VideoBanner}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full bg-black/50 p-10 '>
        <div className='flex flex-col items-center gap-8'>
          {/* <h1
            style={{
              background: 'linear-gradient(to top, #0acffe, #495aff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            className='font-bold uppercase lg:text-[70px] md:text-[30px] text-largerPrdName text-center'
          >
            MÁY IN UV CHẤT LƯỢNG CAO <br /> CÔNG NGHỆ HIỆN ĐẠI
          </h1> */}
          <div className='w-full flex justify-center'>
            <svg
              width='100%'
              height='100%'
              viewBox='0 0 1400 400' // Tăng chiều rộng và chiều cao
              preserveAspectRatio='xMidYMid slice' // Đảm bảo không méo chữ
            >
              <text
                x='50%'
                y='50%' // Đẩy chữ lên để có thêm không gian
                textAnchor='middle'
                fontWeight='bold'
                fontSize='clamp(20px, 5vw, 80px)' // Điều chỉnh font-size linh hoạt
                fill='blue'
              >
                MÁY IN UV CHẤT LƯỢNG CAO
                <tspan x='50%' dy='1.4em'>
                  CÔNG NGHỆ HIỆN ĐẠI
                </tspan>
              </text>
            </svg>
          </div>

          <p className='mb-9 font-semibold text-white lg:text-[20px] text-normal sm:leading-[1.44] text-center'>
            Giải pháp in UV chuyên nghiệp, sắc nét trên mọi chất liệu. Độ bền màu vượt trội, tốc độ in nhanh, đáp ứng
            mọi nhu cầu in ấn.
          </p>

          <div className='flex lg:flex-row flex-col items-center gap-4'>
            <CustomButton
              size='large'
              colors={['#eb3941', '#f15e64', '#e14e53', '#e2373f']}
              className='h-14 w-60 uppercase font-semibold '
            >
              Đặt hàng
            </CustomButton>
            <CustomButton
              size='large'
              colors={['#667eea', '#764ba2', '#6B8DD6', '#8E37D7']}
              className='h-14 w-60 uppercase font-semibold '
            >
              Liên hệ ngay
            </CustomButton>

            {/* <Link to={'/lien-he'}>
              <button className='flex items-center justify-center gap-4 rounded-md bg-white/[0.12] h-14 w-60 px-6 py-[10px] font-medium text-[#3B3B3B] transition duration-300 ease-in-out hover:bg-white hover:text-dark uppercase'>
                Liên hệ ngay
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}
