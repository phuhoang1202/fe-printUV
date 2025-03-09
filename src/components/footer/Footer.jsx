import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoNoText from '@assets/icons/logo/logoNoText.jpg'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date())
    }, 60000)
  }, [time])

  const addressCompany = [
    {
      id: 1,
      office: 'Văn phòng tại Hà Nội',
      address: 'Số 84 Giáp Bát - Q. Hoàng Mai - TP. Hà Nội',
      phoneNumber: '0246.668.0246 - 0949 58 11 58',
      email: 'bigcoloradv@gmail.com',
    },
    {
      id: 2,
      office: 'Văn phòng tại Đà Nẵng',
      address: '172 Lý Thái Tông - Q. Thanh Khê - Tp Đà Nẵng',
      phoneNumber: '0966161373',
      email: 'bigcoloradv@gmail.com',
    },
    {
      id: 3,
      office: 'Văn phòng tại Sài Gòn',
      address: '78/7 Nguyễn Thị Tú.P Bình Hưng Hòa B,Quận Bình Tân',
      phoneNumber: '0286.286.6686 - 0935389988',
      email: 'bigcolorsaigon@gmail.com',
    },
  ]

  const dataFooter = [
    {
      id: 1,
      title: 'Thông tin',
      content: [
        {
          id: 1,
          subContent: 'Về Chúng tôi',
          linkHref: '#',
        },
        {
          id: 2,
          subContent: 'Thông tin tuyển dụng',
          linkHref: '#',
        },
        {
          id: 3,
          subContent: 'Liên hệ',
          linkHref: '#',
        },
      ],
    },

    {
      id: 2,
      title: 'Chính sách',
      content: [
        {
          id: 1,
          subContent: 'Điều khoản sử dụng',
          linkHref: '/chinh-sach/dieu-khoan-su-dung',
        },
        {
          id: 2,
          subContent: 'Phương thức thanh toán',
          linkHref: '/chinh-sach/phuong-thuc-thanh-toan',
        },
        {
          id: 3,
          subContent: 'Chính sách vận chuyển',
          linkHref: '/chinh-sach/chinh-sach-van-chuyen',
        },
        {
          id: 4,
          subContent: 'Chính sách bảo hành',
          linkHref: '/chinh-sach/chinh-sach-bao-hanh',
        },
        {
          id: 5,
          subContent: 'Chính sách bảo hành 3M',
          linkHref: '/chinh-sach/chinh-sach-bao-hanh-3M',
        },
        {
          id: 6,
          subContent: 'Chính sách đổi trả',
          linkHref: '/chinh-sach/chinh-sach-doi-tra',
        },
        {
          id: 7,
          subContent: 'Chính sách bảo mật',
          linkHref: '/chinh-sach/chinh-sach-bao-mat',
        },
      ],
    },

    {
      id: 3,
      title: 'Hỗ trợ',
      content: [
        {
          id: 1,
          subContent: 'Tư vấn khách hàng',
          linkHref: '/ho-tro-khach-hang/tu-van-khach-hang',
        },
        {
          id: 2,
          subContent: 'Câu hỏi thường gặp',
          linkHref: '/ho-tro-khach-hang/cau-hoi-thuong-gap',
        },
        {
          id: 3,
          subContent: 'Hỗ trợ 1:1',
          linkHref: '/ho-tro-khach-hang/ho-tro-1-1',
        },
        {
          id: 4,
          subContent: 'Phản ánh dịch vụ',
          linkHref: '/ho-tro-khach-hang/phan-anh-dich-vu',
        },
      ],
    },
  ]

  return (
    <div className=' relative mt-8 border-t bg-[#090E34] text-white py-8'>
      <div className='max-w-7xl w-full mx-auto  lg:my-6 my-4 flex flex-col md:flex-row justify-between items-start lg:px-0 px-5'>
        <div className='flex items-start gap-4 max-w-2xl'>
          <div className='w-20 h-20'>
            <img src={LogoNoText} alt='photo' className='w-full h-full object-cover ' />
          </div>
          <div>
            <div>
              <div className='font-bold lg:text-bigPrdName text-largerPrdName uppercase text-white'>
                <strong>bigcolor việt nam</strong>
              </div>
              <p className='text-white font-semibold'>
                Bigcolor Việt Nam cung cấp máy in UV chất lượng cao, đáp ứng mọi nhu cầu in ấn chuyên nghiệp.
              </p>
            </div>
            <ul className='ml-5'>
              {addressCompany.map((infor, index) => {
                return (
                  <li key={index} className='mt-4'>
                    <strong>{infor.office}:</strong>
                    <div className='flex flex-col ml-4'>
                      <div className='flex items-center gap-1'>
                        <div className='flex items-center'>
                          <i className='fa-solid fa-location-dot text-small w-6'></i>
                          <span className='font-medium text-normal'>Địa chỉ: </span>
                        </div>
                        <div className='font-medium'>{infor.address}</div>
                      </div>
                      <div className='flex items-center gap-1'>
                        <div className='flex items-center'>
                          <i className='fa-solid fa-phone text-small w-6'></i>
                          <span className='font-medium'>SĐT: </span>
                        </div>
                        <div className='font-medium'>{infor.phoneNumber}</div>
                      </div>
                      <div className='flex items-center gap-1'>
                        <div className='flex items-center'>
                          <i className='fa-solid fa-envelope text-small w-6'></i>
                          <span className='font-medium'>Email: </span>
                        </div>
                        <div className='font-medium'>{infor.email}</div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {dataFooter.map((infor, index) => {
          return (
            <div key={index}>
              <div>
                <strong className=' uppercase'>{infor.title}</strong>
              </div>
              <div className='flex flex-col gap-2 mt-4'>
                {infor.content.map((el, index) => (
                  <div className='flex flex-col gap-4' key={index}>
                    <Link to={el.linkHref} className='font-medium hover:underline hover:text-blue-500'>
                      {el.subContent}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div>
        <span className='absolute left-0 top-0'>
          <svg width={200} height={250} viewBox='0 0 495 470' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx={55} cy={442} r={138} stroke='white' strokeOpacity='0.04' strokeWidth={50} />
            <circle cx={446} r={39} stroke='white' strokeOpacity='0.04' strokeWidth={20} />
            <path
              d='M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z'
              stroke='white'
              strokeOpacity='0.08'
              strokeWidth={12}
            />
          </svg>
        </span>

        <span className='absolute top-0 right-0'>
          <svg width={200} height={250} viewBox='0 0 495 470' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx={55} cy={442} r={138} stroke='white' strokeOpacity='0.04' strokeWidth={50} />
            <circle cx={446} r={39} stroke='white' strokeOpacity='0.04' strokeWidth={20} />
            <path
              d='M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z'
              stroke='white'
              strokeOpacity='0.08'
              strokeWidth={12}
            />
          </svg>
        </span>

        <span className='absolute bottom-0 left-0'>
          <svg width={200} height={250} viewBox='0 0 493 470' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx={462} cy={5} r={138} stroke='white' strokeOpacity='0.04' strokeWidth={50} />
            <circle cx={49} cy={470} r={39} stroke='white' strokeOpacity='0.04' strokeWidth={20} />
            <path
              d='M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z'
              stroke='white'
              strokeOpacity='0.06'
              strokeWidth={13}
            />
          </svg>
        </span>
        <span className='absolute bottom-0 right-0'>
          <svg width={200} height={250} viewBox='0 0 493 470' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <circle cx={462} cy={5} r={138} stroke='white' strokeOpacity='0.04' strokeWidth={50} />
            <circle cx={49} cy={470} r={39} stroke='white' strokeOpacity='0.04' strokeWidth={20} />
            <path
              d='M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z'
              stroke='white'
              strokeOpacity='0.06'
              strokeWidth={13}
            />
          </svg>
        </span>
      </div>
    </div>
  )
}
