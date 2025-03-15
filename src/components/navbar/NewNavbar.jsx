import React, { useEffect, useState } from 'react'
// import Logo from '@assets/images/logo/LogoBgCaro.png'
// import IconDark from '@assets/icons/IconDark'
// import IconUnDark from '@assets/icons/IconUnDark'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import iconSearch from '@assets/images/IconSearch.svg'
import LogoNoBg from '@assets/images/Logo/LogoNoBg.png'

export default function NewNavbar() {
  // const navigate = useNavigate()
  // const [darkMode, setDarkMode] = useState(
  //   localStorage.theme === 'dark' ||
  //     (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches),
  // )

  const location = useLocation()
  const isHome = location.pathname === '/'

  const [scrolling, setScrolling] = useState(false)
  const [isAllMenuVisible, setAllMenuVisible] = useState(false)
  const [valueSearch, setValueSearch] = useState('')
  const [language, setLanguage] = useState('')

  const items = [
    { key: 'all-product', label: 'Tất cả sản phẩm', href: '/tat-ca-san-pham' },
    // { key: 'news-page', label: 'Bài viết', href: '/bai-viet' },
    {
      key: 'policy',
      label: 'Chính sách',
      href: '/chinh-sach/dieu-khoan-su-dung',
      children: [
        { key: 'terms', label: 'Điều khoản sử dụng', href: '/chinh-sach/dieu-khoan-su-dung' },
        { key: 'payment', label: 'Phương thức thanh toán', href: '/chinh-sach/phuong-thuc-thanh-toan' },
        { key: 'shipping', label: 'Chính sách vận chuyển', href: '/chinh-sach/chinh-sach-van-chuyen' },
        { key: 'warranty', label: 'Chính sách bảo hành', href: '/chinh-sach/chinh-sach-bao-hanh' },
        { key: 'return', label: 'Chính sách đổi trả', href: '/chinh-sach/chinh-sach-doi-tra' },
        { key: 'privacy', label: 'Chính sách bảo mật', href: '/chinh-sach/chinh-sach-bao-mat' },
      ],
    },
    {
      key: 'support',
      label: 'Hỗ trợ khách hàng',
      href: '/ho-tro-khach-hang/tu-van-khach-hang',
      children: [
        { key: 'consulting', label: 'Tư vấn khách hàng', href: '/ho-tro-khach-hang/tu-van-khach-hang' },
        { key: 'faq', label: 'Câu hỏi thường gặp', href: '/ho-tro-khach-hang/cau-hoi-thuong-gap' },
        { key: 'support-1-1', label: 'Hỗ trợ 1:1', href: '/ho-tro-khach-hang/ho-tro-1-1' },
        { key: 'service-feedback', label: 'Phản ánh dịch vụ', href: '/ho-tro-khach-hang/phan-anh-dich-vu' },
      ],
    },
    { key: 'about', label: 'Về chúng tôi', href: '/ve-chung-toi' },
    { key: 'contact', label: 'Liên hệ', href: '/lien-he' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add('dark')
  //     localStorage.theme = 'dark'
  //   } else {
  //     document.documentElement.classList.remove('dark')
  //     localStorage.theme = 'light'
  //   }
  // }, [darkMode])

  const handleSearch = async () => {
    try {
      navigate(`/search-product?query=${encodeURIComponent(valueSearch)}`)
    } catch (error) {
      console.error('Error translating text:', error)
    }
  }

  return (
    <div
      className={`fixed left-0 top-0 z-50 flex w-full items-center transition-all lg:py-0 py-2 duration-300 ${
        scrolling ? 'stickyyy' : ''
      } ${!isHome ? 'border-b border-gray-200' : ''}`}
    >
      <div className='w-full px-10'>
        <div className='relative flex items-center justify-between '>
          <div>
            <Link to={'/'} className='flex items-center gap-2'>
              <img src={LogoNoBg} alt='logo' className='header-logo w-14' />
              <strong className='lg:text-[28px] font-bold text-textPrd uppercase text-logo'>BigColor</strong>
            </Link>
          </div>

          <div className='flex w-full items-center justify-center px-4'>
            <div>
              <nav className='absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-2 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-2'>
                <ul className='block lg:flex 2xl:ml-20'>
                  {items.map((item, index) => (
                    <li key={index} className='group relative'>
                      <Link
                        to={item.href}
                        className={`${
                          scrolling || !isHome ? 'text-[#3B3B3B] ' : 'text-white'
                        } mx-8 flex py-2 lg:text-primaryPrdName font-medium transition-all duration-300 hover:text-gray-600 lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 xl:ml-10`}
                      >
                        {item.label}
                      </Link>

                      {/* Hiển thị menu con nếu có */}
                      {item.children && (
                        <ul className='absolute left-0 top-16 hidden min-w-[220px] bg-white shadow-lg rounded-lg py-2 group-hover:block transition-all duration-300 ease-in-out'>
                          {item.children.map((child, childIndex) => (
                            <li key={childIndex} className='px-4 py-2 hover:bg-gray-100'>
                              <Link to={child.href} className='block text-gray-800 hover:text-[#090E34]'>
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className=' items-center gap-4 lg:flex hidden'>
            <div className='relative'>
              <input
                type='text'
                className='rounded-xl lg:pr-10 pr-8 py-3 w-full lg:w-60 lg:h-10 h-9 pl-4 custom-placeholder'
                style={{ border: '1px solid #D3D2D2' }}
                // placeholder={t('inputSearch')}
                placeholder={'Tìm kiếm sản phẩm ...'}
                value={valueSearch}
                onChange={(e) => setValueSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch()
                  }
                }}
              />
              <button onClick={handleSearch}>
                <img
                  src={iconSearch}
                  alt='icon search'
                  className='absolute top-1/2 right-3 transform -translate-y-1/2 lg:h-auto lg:w-auto w-5 h-5'
                />
              </button>
            </div>

            {/* <div>
              <Dropdown
                overlay={menu}
                trigger={['click']}
                className='w-[82px] lg:h-10 h-9 lg:flex hidden'
                style={{ zIndex: '9999' }}
              >
                <Button
                  className='flex items-center justify-between'
                  style={{
                    border: '1px solid black',
                    borderRadius: '30px',
                    padding: '8px 12px',
                    zIndex: '9999',
                  }}
                >
                  <img
                    src={
                      language === 'vi'
                        ? FlagVN
                        : language === 'zh-CN'
                        ? FlagChina
                        : language === 'en'
                        ? FlagAsia
                        : FlagVN
                    }
                    alt='Selected Flag'
                  />
                  <img src={IconArrowDownFill} alt='icon korea' />
                </Button>
              </Dropdown>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
