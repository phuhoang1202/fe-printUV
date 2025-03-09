import React, { useState, useEffect } from 'react'
import IconHeart from '@assets/images/IconHeart.svg'
import IconHeartActive from '@assets/images/IconHeartActive.svg'
import IconStar from '@assets/images/IconStar.svg'
import { Modal, Skeleton, Tooltip } from 'antd'
import { constants as c } from '@constants'
import { Link } from 'react-router-dom'
import { getToken } from '@utils/auth'
import { useTranslation } from 'react-i18next'
import ImageError from '@assets/images/ImageError.svg'

export default function Product({ item, type, combinedArray, index, addToWishList, setBestProducts, setDataCategory }) {
  const [loading, setLoading] = useState(true)
  const [unit, setUnit] = useState('KRW')
  const { t } = useTranslation()
  //  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  //   const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth < 375)

  const token = getToken()

  // Modal navigate login
  const [openModal, setOpenModal] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const handleOk = () => {
    setConfirmLoading(true)

    setOpenModal(false)
    setConfirmLoading(false)

    navigate('/login')
  }
  const handleCancel = () => {
    setOpenModal(false)
  }

  useEffect(() => {
    const getUnitLocal = JSON.parse(localStorage.getItem('exchangePrice')) || 'KRW'
    setUnit(getUnitLocal)
  }, [unit])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className='flex items-center gap-4'>
        <Skeleton.Image className='w-full h-full' />
        <Skeleton active />
      </div>
    )
  }

  // Hàm xử lý yêu thích
  const handleWishlistClick = async (productId, currentWishListStatus) => {
    if (!token) {
      setOpenModal(true)
    } else {
      try {
        await addToWishList(productId)

        if (type === 'best') {
          setBestProducts((prevProducts) =>
            prevProducts.map((product) =>
              product.id === productId ? { ...product, wishList: !currentWishListStatus } : product,
            ),
          )
        } else {
          setDataCategory((prevProducts) =>
            prevProducts.map((product) =>
              product.id === productId ? { ...product, wishList: !currentWishListStatus } : product,
            ),
          )
        }
      } catch (error) {
        console.error('Error updating wishlist', error)
      }
    }
  }

  // Kiểm tra và xử lý ảnh
  const arrCheck = ['detail', 'product']

  const mainImage = item.productImages.find((image) => image.main === true)
  const productImage = item.productImages.find((image) => image.imageType === 'product')

  const imageToShow = mainImage || productImage

  const imageUrl = imageToShow?.imageUrl || ''

  const isImageMatched = arrCheck.some((prefix) => imageUrl?.startsWith(prefix))

  const finalImageUrl = isImageMatched ? `${c.DOMAIN_IMG}${imageUrl}` : imageUrl

  return (
    <section className='flex justify-center items-center w-full max-w-3xl gap-6'>
      <article className='relative w-80 bg-white shadow-[0px_8px_24px_rgba(149,157,165,0.2)] rounded-xl overflow-hidden group'>
        <div
          className='relative h-60 bg-cover bg-center transition-all duration-300 group-hover:scale-110'
          style={{
            backgroundImage: `url(${finalImageUrl})`,
          }}
        ></div>
        {type === 'best' && (
          <div className='absolute top-2 left-2'>
            {index < 3 ? (
              <img src={combinedArray[index]} alt={`rating`} />
            ) : (
              <div className='bg-[#28282899] flex justify-center items-center h-10 w-10 rounded-full'>
                <span className='text-white font-bold text-textPrd'>{index + 1}</span>
              </div>
            )}
          </div>
        )}
        <div className='absolute top-0 right-0 bottom-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-4'>
          <img src={IconHeartActive} alt='icon' className='w-6 h-6' />
        </div>
        <div className='p-4 mt-1'>
          <h3 className='text-lg font-semibold'>
            <Link to={`/product/${item.id}`}>
              <div className='font-medium lg:text-textPrd text-normal'>
                <Tooltip title={item.productName} autoAdjustOverflow>
                  <div className='truncate text-[#3B3B3B]'>{item.productName}</div>
                </Tooltip>
              </div>
            </Link>
          </h3>
          <Link to={`/product/${item.id}`}>
            <button className='w-full mt-2 p-2 border border-gray-300 rounded-lg text-gray-700 font-medium transition-all duration-300 hover:bg-gray-100 active:bg-gray-200'>
              Xem chi tiết
            </button>
          </Link>
        </div>
      </article>
    </section>
  )
}
