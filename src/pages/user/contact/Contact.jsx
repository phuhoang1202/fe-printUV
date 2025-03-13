import { Button, Input } from 'antd'
import React from 'react'
import IconFB from '@assets/icons/user/IconFB.png'
import IconZL from '@assets/icons/user/IconZL.svg'
import IconPhone from '@assets/icons/user/IconPhone.svg'
import { Link } from 'react-router-dom'
const { TextArea } = Input

export default function Contact() {
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
      address: '78/7 Nguyễn Thị Tú.P Bình Hưng Hòa B, Quận Bình Tân',
      phoneNumber: '0286.286.6686 - 0935389988',
      email: 'bigcolorsaigon@gmail.com',
    },
  ]

  return (
    <div>
      <div
        className='overflow-hidden shadow-md relative'
        style={{ background: 'linear-gradient(30deg, #000046, #1CB5E0)' }}
      >
        <div className='pt-16 pb-28 max-w-7xl mx-auto relative'>
          <div className='flex items-start gap-4'>
            <div>
              <div>
                <h1 className='text-[40px] text-white font-bold uppercase tracking-wide'>Liên hệ</h1>
                <p className='text-white font-medium'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam voluptatum, nulla molestias pariatur
                  temporibus odio adipisci cum unde. Ipsa, aspernatur tempore. Maxime harum itaque quibusdam dolorum,
                  illum voluptatem fugiat dolorem!
                </p>
              </div>

              {/* Địa chỉ */}
              <div className='mt-4'>
                {addressCompany.map((address, index) => {
                  return (
                    <div className='border rounded-xl px-8 py-4 bg-white hover:shadow-lg shadow-md mt-4' key={index}>
                      <ul className='flex flex-col gap-1'>
                        <li className='font-semibold text-primaryPrdName'>{address.office}</li>
                        <li>
                          <i className='fa-solid fa-location-dot text-small w-6'></i>
                          <span className='font-medium'>Địa chỉ:</span>
                          <span className='ml-2 font-medium'>{address.address}</span>
                        </li>
                        <li>
                          <i className='fa-solid fa-phone text-small w-6'></i>
                          <span className='font-medium'>Số điện thoại:</span>
                          <span className='ml-2 font-medium'>{address.phoneNumber}</span>
                        </li>

                        <li>
                          <i className='fa-solid fa-envelope text-small w-6'></i>
                          <span className='font-medium'>Email:</span>
                          <span className='ml-2 font-medium'>{address.email}</span>
                        </li>
                      </ul>
                    </div>
                  )
                })}
              </div>

              <div className='flex items-start gap-4 mt-8'>
                <Link>
                  <button className='h-12 w-12 rounded-full' style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0px 5px 10px' }}>
                    <img src={IconFB} alt='icon' className='w-full h-full object-cover' />
                  </button>
                </Link>

                <Link>
                  <button className='h-12 w-12 rounded-full' style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0px 5px 10px' }}>
                    <img src={IconZL} alt='icon' className='w-full h-full object-cover' />
                  </button>
                </Link>

                <Link>
                  <div
                    className='h-12 w-12 rounded-full flex items-center justify-center'
                    style={{
                      boxShadow: 'rgba(0, 0, 0, 0.3) 0px 5px 10px',
                      background: 'linear-gradient(#8a82fb, #407ed7)',
                    }}
                  >
                    <img src={IconPhone} alt='icon' className='w-6 h-6 object-cover' />
                  </div>
                </Link>
              </div>
            </div>

            <div className='w-full p-8'>
              <form className='border w-full max-w-4xl px-10 py-10 rounded-2xl bg-white hover:shadow-lg shadow-md flex flex-col gap-4 '>
                <h3 className='text-bigPrdName font-semibold text-center capitalize'>Gửi tin nhắn cho chúng tôi</h3>
                <div className='flex flex-col gap-1'>
                  <label className='text-normal font-medium'>Name:</label>
                  <Input className='h-11' placeholder='Điền tên người dùng ...' />
                </div>

                <div className='flex flex-col gap-1'>
                  <label className='text-normal font-medium'>Phone Number:</label>
                  <Input className='h-11' placeholder='eg: 0123456789' />
                </div>

                <div className='flex flex-col gap-1'>
                  <label className='text-normal font-medium'>Email:</label>
                  <Input className='h-11' placeholder='Điền email người dùng ...' />
                </div>

                <div className='flex flex-col gap-1'>
                  <label className='text-normal font-medium'>Message:</label>
                  <TextArea rows={4} placeholder='Tối đa 250 ký tự' maxLength={250} />
                </div>

                <button className='w-full py-3 px-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed'>
                  Gửi
                </button>
              </form>
            </div>
          </div>
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

      {/* Map */}
      <div className=''>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2959917105163!2d105.84203007606614!3d20.980768980656695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac43bc8b6575%3A0x4778704d826fe953!2zQ8O0bmcgVHkgVG5oaCBN4buZdCBUaMOgbmggVmnDqm4gQmlnY29sb3IgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1741775368311!5m2!1svi!2s'
          width={'100%'}
          height={500}
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </div>
    </div>
  )
}
