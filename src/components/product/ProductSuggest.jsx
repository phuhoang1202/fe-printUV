import React, { useEffect, useState } from 'react'
import IconHeart from '@assets/images/IconHeart.svg'
import IconHeartActive from '@assets/images/IconHeartActive.svg'
import IconStar from '@assets/images/IconStar.svg'
import IconLeft from '@assets/images/IconLeft.svg'
import IconRight from '@assets/images/IconRight.svg'
import { constants as c } from '@constants'
import { Modal, Skeleton } from 'antd'
import { product } from '@services/user/product'
import { Link } from 'react-router-dom'
import { getToken, getUserInfor } from '@utils/auth'
import { Tooltip } from 'antd'
import { useTranslation } from 'react-i18next'
import { formatPrice, formatPriceMultilingual } from '@utils/index'
import ImageError from '@assets/images/ImageError.svg'
import SeeMore from '@components/seeMore/SeeMore'
import Product from './Product'

export default function ProductSuggest() {
  const [recommendProducts, setRecommendProducts] = useState([])
  const [pageNumber, setPageNumber] = useState(0)
  const [pageSize, setPageSize] = useState(6)
  const [isLoading, setIsLoading] = useState(true)

  // const [language, setLanguage] = useState(JSON.parse(localStorage.getItem('language')) || 'ko')
  const getUserId = JSON.parse(getUserInfor() || null)
  const { t } = useTranslation()
  const [unit, setUnit] = useState(JSON.parse(localStorage.getItem('exchangePrice')) || 'KRW')
  // const token = getToken()

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
    // const getLanguage = JSON.parse(localStorage.getItem('language'))
    // setLanguage(getLanguage)
    setUnit(getUnitLocal)
  }, [])

  const fetchRecommendProducts = async () => {
    try {
      setIsLoading(true)
      const response = await product.getProductByType({
        type: 'recommend',
        currency: unit,
        pageNumber: pageNumber,
        pageSize: pageSize,
        userId: getUserId?.id,
        sort: '',
        sortBy: 'desc',
      })
      const result = await Promise.all(
        response.data.content.map(async (product) => {
          product.imageMain = product.productImages.find((el) => el.main) || product.productImages[0]

          return product
        }),
      )
      setRecommendProducts(result)
    } catch (error) {
      console.error('Error fetching recommended products')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchRecommendProducts()
  }, [pageNumber])

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false)
  //   }, 1000)

  //   return () => clearTimeout(timer)
  // }, [recommendProducts])

  const handlePrev = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1)
    }
  }

  const handleNext = () => {
    if (recommendProducts.length >= 6) setPageNumber(pageNumber + 1)
  }

  return (
    <div className='lg:mt-10 mt-6 lg:max-w-7xl mx-auto lg:px-0 px-4 w-full wow fadeInUp' data-wow-delay='.1s'>
      <div className='font-bold lg:text-bigPrdName text-largerPrdName text-[#3B3B3B]'>Gợi ý</div>
      <span className='inline-block h-[2px] w-10 bg-[#F14646] mb-6' />

      <div className='relative'>
        <div className='lg:grid lg:grid-cols-4 gap-6 lg:pb-0 pb-4 lg:overflow-hidden overflow-x-auto flex'>
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className='flex lg:w-[406px] w-[386px] lg:min-h-[200px] min-h-[50px] lg:gap-6 gap-4 mx-auto'
                >
                  <Skeleton.Image className='w-[162px] lg:h-[240px] rounded-lg flex-1' />
                  <div className='flex flex-col justify-between lg:w-[220px] w-44'>
                    <Skeleton active paragraph={{ rows: 3 }} />
                  </div>
                </div>
              ))
            : recommendProducts.map((product, index) => {
                const arrCheck = ['detail', 'product']
                const mainImage = product.productImages.find((image) => image.main === true)
                const productImage = product.productImages.find((image) => image.imageType === 'product')
                const imageToShow = mainImage || productImage
                const imageUrl = imageToShow?.imageUrl || ''
                const isImageMatched = arrCheck.some((prefix) => imageUrl?.startsWith(prefix))
                const finalImageUrl = isImageMatched ? `${c.DOMAIN_IMG}${imageUrl}` : imageUrl

                return <Product item={product} index={index} />
              })}
        </div>
        <div className='lg:block hidden'>
          <button className='carousel-button prev h-12 w-12 flex justify-center items-center' onClick={handlePrev}>
            <img src={IconLeft} alt='left arrow' className='w-6 h-6' />
          </button>
          <button className='carousel-button next h-12 w-12 flex justify-center items-center' onClick={handleNext}>
            <img src={IconRight} alt='right arrow' className='w-6 h-6' />
          </button>
        </div>
      </div>

      <div className='flex justify-center mt-4'>
        <SeeMore />
      </div>

      {/* Modal navigate login */}
      <Modal open={openModal} confirmLoading={confirmLoading} onCancel={handleCancel} footer={false} centered>
        <div>
          <div className='font-semibold text-textPrd flex flex-col justify-center items-center mt-4 gap-2'>
            {/* <div>{t('loginText1')} </div> */}
            <div>{t('loginText2')}</div>
          </div>
        </div>

        <div className='flex items-center justify-center gap-6 mt-8'>
          <div>
            <button
              className='font-semibold text-normal h-11 min-w-36 rounded-lg'
              style={{ border: '2px solid black' }}
              onClick={handleCancel}
            >
              {t('btnCancel')}
            </button>
          </div>
          <div>
            <button
              className='text-white bg-[#D1B584] font-semibold text-normal h-11 min-w-36 rounded-lg'
              onClick={handleOk}
            >
              {t('loginBtn')}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
