import React, { useEffect, useState } from 'react'
import IconShoppingCart from '@assets/images/IconShoppingCart.svg'
import IconChevronRight from '@assets/images/IconChevronRight.svg'
import IconFreeShip from '@assets/images/IconFreeShip.svg'
import IconMoney from '@assets/images/IconMoney.svg'
import { useNavigate, useParams } from 'react-router-dom'
import { Menu, Rate, Image, Modal, Tag, Tabs } from 'antd'
import CollapseComponent from '@components/collapse/CollapseComponent'
import { product } from '@services/user/product'
import { constants as c } from '@constants'
import Loading from '@components/loading/Loading'
import { cart } from '@services/user/cart'
import { useTranslation } from 'react-i18next'
import IconHeartActive from '@assets/images/IconHeartActive.svg'
import IconHeart from '@assets/images/IconHeart.svg'
import ImageError from '@assets/images/ImageError.svg'
import { getToken, getUserInfor } from '@utils/auth'
import { Toast } from '@utils/toast'
import iconCheck from '@assets/icons/user/iconCheck.png'
import iconArrow from '@assets/icons/user/iconArrow.png'
import IconFB from '@assets/icons/user/social/IconFB.png'
import IconTelegram from '@assets/icons/user/social/IconTelegram.svg'
import IconZL from '@assets/icons/user/social/IconZL.svg'
import IconPhone from '@assets/icons/user/social/IconPhone.svg'
import CustomButton from '@components/common/button/CustomButton'
import { FileTextOutlined, PhoneOutlined, ShoppingCartOutlined } from '@ant-design/icons'

import PdfFlipBook from '@components/pageFlip/PdfFlipBook'

export default function DetailProduct() {
  const [dataDetail, setDataDetail] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const param = useParams()
  const { id } = param
  const [currentIndex, setCurrentIndex] = useState(0)
  const navigate = useNavigate()

  const { t } = useTranslation()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth < 375)

  // img
  const [listImg, setListImg] = useState([])
  const [listImgProduct, setListImgProduct] = useState([])
  const [selectedImage, setSelectedImage] = useState(listImgProduct?.[0] || '')

  // description
  const [dataDescription, setDataDescription] = useState('')
  const [checkData, setCheckData] = useState(false)

  // Category
  const dataCategory = ['Máy in UV', 'Máy in YF', 'Máy in chính hãng', 'Sản phẩm mới']

  // socialNetwork
  const socialNetwork = [
    {
      images: IconPhone,
      altImg: 'Phone',
      linkSocial: 'tel:0368864688',
    },
    {
      images: IconFB,
      altImg: 'FB',
      linkSocial: 'tel:0368864688',
    },
    {
      images: IconZL,
      altImg: 'Zalo',
      linkSocial: 'https://zalo.me/0368864688',
    },
    {
      images: IconTelegram,
      altImg: 'Telegram',
      linkSocial: 'https://t.me/phantoan116',
    },
  ]

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const response = await product.getPrdById(id)
      setDataDetail(response.data.data)
      setCheckData(200)
      setListImg(response?.data.data.imageUrls)
      setSelectedImage(response?.data.data.imageUrls[0])
    } catch (error) {
      console.error('Error fetching product details:', error)
      setCheckData(error.status)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [id])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsSmallMobile(window.innerWidth < 375)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const MAX_IMAGES = 4 // Số lượng ảnh tối đa hiển thị mỗi lần

  // Giả sử đoạn mã này nằm trong component của bạn

  // Xử lý để di chuyển đến slide tiếp theo
  const handleNext = () => {
    if (currentIndex + MAX_IMAGES < listImgProduct.length) {
      setCurrentIndex(currentIndex + MAX_IMAGES)
    }
  }

  // Xử lý để di chuyển đến slide trước
  const handlePrev = () => {
    if (currentIndex - MAX_IMAGES >= 0) {
      setCurrentIndex(currentIndex - MAX_IMAGES)
    }
  }

  // Hàm xử lý yêu thích
  const addToWishList = async (productId) => {
    try {
      const bodyPayload = {
        userId: getInfonUser.id,
        productId: productId,
      }
      await product.wishListPrd(bodyPayload)
      fetchData()

      Toast.success('찜 목록에 추가했습니다.')
    } catch (error) {
      console.error('위시리스트에 추가 실패')
    }
  }

  const tabItems = [
    {
      key: '1',
      label: 'Mô tả',
      content: 'Mô tả sản phẩm',
      // content: <CollapseComponent dataDescription={dataDescription} />
    },
    { key: '2', label: 'Thông số kỹ thuật', content: <PdfFlipBook /> },
    { key: '3', label: 'Hướng dẫn sử dụng', content: 'Hướng dẫn sử dụng sản phẩm...' },
  ]

  return (
    <>
      <div className='py-6 lg:px-0 mt-16'>
        {isLoading && <Loading />}
        <div>
          {checkData === 404 ? (
            <div className='flex flex-col justify-center items-center font-medium text-primaryPrdName mt-10 gap-4'>
              Sản phẩm không tồn tại
            </div>
          ) : (
            <>
              {/* Detail Product */}
              <div className='lg:max-w-7xl mx-auto mt-10'>
                <div className='flex lg:gap-10 gap-4 flex-col lg:flex-row justify-between'>
                  {/* Phần hiển thị ảnh chính */}
                  <div className='w-full lg:px-0 px-4'>
                    <div className='relative flex lg:flex-row gap-8 '>
                      {/* Ảnh nhỏ bên dưới */}
                      <div className='flex justify-between relative'>
                        <div>
                          <div className='flex flex-col gap-8'>
                            {listImg &&
                              listImg.length > 0 &&
                              listImg?.slice(currentIndex, currentIndex + MAX_IMAGES).map((image, index) => {
                                return (
                                  <div key={index}>
                                    <div
                                      className={`cursor-pointer border-2 rounded-lg ${
                                        selectedImage === image ? 'border-gray-300' : 'border-none'
                                      } lg:h-[110px] lg:w-[110px] w-14 h-14 `}
                                      onClick={() => setSelectedImage(image)}
                                    >
                                      <img
                                        src={image}
                                        alt={`Product ${index + currentIndex + 1}`}
                                        className='object-cover object-center rounded-lg h-full w-full'
                                        loading='lazy'
                                        onError={(e) => {
                                          e.target.onerror = null
                                          e.target.src = ImageError
                                        }}
                                      />
                                    </div>
                                  </div>
                                )
                              })}
                          </div>
                        </div>
                      </div>

                      {/* Ảnh main */}
                      <div className='w-full relative'>
                        <div className=' flex justify-center image-main'>
                          {dataDetail?.imageUrls?.length > 0 && (
                            <div className='w-full h-full aspect-square'>
                              <Image
                                width={640}
                                // style={{ width: '500' }}
                                // height={isSmallMobile ? 200 : isMobile ? 300 : 514}
                                src={selectedImage}
                                alt='Selected Product'
                                className='object-cover w-full h-full rounded-lg aspect-square'
                                loading='lazy'
                                onError={(e) => {
                                  e.target.onerror = null
                                  e.target.src = ImageError
                                }}
                              />
                            </div>
                          )}

                          {dataDetail && Object.keys(dataDetail).length > 0 && (
                            <div className='absolute top-2 right-2 z-50 cursor-pointer'>
                              <div
                                className='w-8 h-8 p-1 rounded-full bg-[#28282899] flex justify-center items-center'
                                onClick={() => addToWishList(dataDetail.id)}
                              >
                                <img
                                  src={dataDetail?.wishList ? IconHeartActive : IconHeart}
                                  alt='icon'
                                  className='w-full h-full object-cover'
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      {/* Hết phần 1 */}
                    </div>
                    {/* Content */}
                    <div className='mt-8 w-full lg:block hidden'>
                      {/* <CollapseComponent dataDescription={dataDescription} className='mx-auto' /> */}
                      <Tabs
                        type='card'
                        className='w-full'
                        items={tabItems.map(({ key, label, content }) => ({
                          key,
                          label: (
                            <div className='lg:w-56 w-full flex justify-center lg:text-textPrd font-medium'>
                              {label}
                            </div>
                          ),
                          children: <div className='p-4'>{content}</div>,
                        }))}
                      />
                    </div>
                  </div>

                  {/* Phần chi tiết sản phẩm */}
                  <div>
                    <div className='sticky top-24 lg:px-0 px-4'>
                      <div className='lg:w-[481px] w-full mx-auto px-0 flex flex-col gap-4 border-b-2 pb-4'>
                        <h2 className='tracking-tight font-bold lg:text-bigPrdName text-largerPrdName'>
                          {dataDetail.productName}
                        </h2>
                        {/* Thông số */}
                        <div>
                          <h3 className='font-semibold text-textPrd border-b-2 border-blue-500 inline-block pb-1'>
                            Thông số:
                          </h3>
                          <ul className='flex flex-col gap-2 mt-2'>
                            <li className='flex items-center gap-2'>
                              <div className='flex items-center gap-2'>
                                <img src={iconArrow} alt='icon' className='w-4' />
                                <span className='font-semibold'>Liên hệ:</span>
                              </div>
                              <span className='font-medium'>0123456456</span>
                            </li>
                            <li className='flex items-center gap-2'>
                              <div className='flex items-center gap-2'>
                                <img src={iconArrow} alt='icon' className='w-4' />
                                <span className='font-semibold'>Loại sản phẩm:</span>
                              </div>
                              <span className='font-medium'>Máy in Pet chuyển nhiệt</span>
                            </li>
                            <li className='flex items-center gap-2'>
                              <div className='flex items-center gap-2'>
                                <img src={iconArrow} alt='icon' className='w-4' />
                                <span className='font-semibold'>Thương hiệu:</span>
                              </div>

                              <span className='font-medium'>YF</span>
                            </li>
                            <li className='flex items-center gap-2'>
                              <div className='flex items-center gap-2'>
                                <img src={iconArrow} alt='icon' className='w-4' />
                                <span className='font-semibold'>Đầu phun:</span>
                              </div>
                              <span className='font-medium'>I3200 A1</span>
                            </li>
                            <li className='flex items-center gap-2'>
                              <div className='flex items-center gap-2'>
                                <img src={iconArrow} alt='icon' className='w-4' />
                                <span className='font-semibold'>Số lượng:</span>
                              </div>
                              <span className='font-medium'>8 đầu phun</span>
                            </li>
                            <li className='flex items-center gap-2'>
                              <div className='flex items-center gap-2'>
                                <img src={iconArrow} alt='icon' className='w-4' />
                                <span className='font-semibold'>Khổ in:</span>
                              </div>
                              <span className='font-medium'>1200</span>
                            </li>
                          </ul>
                        </div>
                        {/* Cam kết */}
                        <div>
                          <h3 className='font-semibold text-textPrd border-b-2 border-blue-500 inline-block pb-1'>
                            Cam kết:
                          </h3>
                          <div className='mt-2 flex flex-col gap-2'>
                            <div className='flex items-center gap-2'>
                              <img src={iconCheck} alt='icon' className='w-4' />
                              <p className='font-medium'>BIGCOLOR có hơn 20 năm kinh nghiệm trong lĩnh vực in ấn.</p>
                            </div>
                            <div className='flex items-center gap-2'>
                              <img src={iconCheck} alt='icon' className='w-4' />
                              <p className='font-medium'>
                                Hàng có sẵn trong kho, bảo hành 24/7, đảm bảo dịch vụ nhanh chóng.
                              </p>
                            </div>
                            <div className='flex items-center gap-2'>
                              <img src={iconCheck} alt='icon' className='w-4' />
                              <p className='font-medium'>
                                Sản phẩm chất lượng cao, công nghệ in UV tiên tiến, bền màu theo thời gian.
                              </p>
                            </div>
                            <div className='flex items-center gap-2'>
                              <img src={iconCheck} alt='icon' className='w-4' />
                              <p className='font-medium'>Hỗ trợ kỹ thuật chuyên sâu, hướng dẫn sử dụng tận tình.</p>
                            </div>
                          </div>
                        </div>
                        {/* social network */}
                        <div className='flex flex-wrap items-center gap-2 w-full'>
                          <CustomButton
                            size='large'
                            icon={<ShoppingCartOutlined />}
                            colors={['#eb3941', '#f15e64', '#e14e53', '#e2373f']}
                          >
                            Đặt hàng
                          </CustomButton>
                          <CustomButton
                            size='large'
                            icon={<PhoneOutlined />}
                            colors={['#667eea', '#764ba2', '#6B8DD6', '#8E37D7']}
                          >
                            Liên hệ
                          </CustomButton>
                          <CustomButton
                            size='large'
                            icon={<FileTextOutlined />}
                            colors={['#25aae1', '#4481eb', '#04befe', '#3f86ed']}
                          >
                            Báo giá
                          </CustomButton>
                          <CustomButton
                            size='large'
                            icon={<FileTextOutlined />}
                            colors={['#25aae1', '#40e495', '#30dd8a', '#2bb673']}
                          >
                            Chat ngay
                          </CustomButton>
                        </div>
                      </div>

                      <div className='mt-4'>
                        {/* Danh mục cùng lại */}
                        <div>
                          <div className='flex items-center flex-wrap gap-1'>
                            <div className=' font-semibold mr-2'>Danh mục cùng loại:</div>
                            {dataCategory.map((category, index) => (
                              <Tag key={index} color='blue'>
                                {category}
                              </Tag>
                            ))}
                          </div>
                        </div>
                        {/* Mạng xã hội */}
                        <div className='mt-8 flex items-center'>
                          {socialNetwork.map((social, index) => {
                            return (
                              <a
                                href={social.linkSocial}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='px-3 text-gray-7 hover:text-white cursor-pointer'
                                key={index}
                              >
                                {social.altImg === 'Phone' ? (
                                  <div
                                    className='rounded-full p-3 w-10 cursor-pointer'
                                    style={{ background: 'linear-gradient(#8a82fb, #407ed7)' }}
                                  >
                                    <img src={social.images} alt='icon' className='w-8' />
                                  </div>
                                ) : (
                                  <img src={social.images} alt='icon' className='w-10' />
                                )}
                              </a>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Detail Product */}
              <div className='mt-8 lg:hidden block lg:px-0 px-2'>
                <Tabs
                  type='card'
                  className='w-full'
                  items={tabItems.map(({ key, label, content }) => ({
                    key,
                    label: (
                      <div className='lg:w-56 w-full flex justify-center lg:text-textPrd font-medium'>{label}</div>
                    ),
                    children: <div className='p-4'>{content}</div>,
                  }))}
                />
                {/* <CollapseComponent dataDescription={dataDescription} className='mx-auto' /> */}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
