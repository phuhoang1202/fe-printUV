import React, { useEffect, useState } from 'react'
import IconLeft from '@assets/images/IconLeft.svg'
import IconRight from '@assets/images/IconRight.svg'
import { Modal, Skeleton } from 'antd'
import { product } from '@services/user/product'
import ImageError from '@assets/images/ImageError.svg'
import SeeMore from '@components/seeMore/SeeMore'
import Product from './Product'

export default function ProductSuggest() {
  const [recommendProducts, setRecommendProducts] = useState([])
  const [pageNumber, setPageNumber] = useState(0)
  const [pageSize, setPageSize] = useState(6)
  const [isLoading, setIsLoading] = useState(true)

  // const token = getToken()

  const fetchRecommendProducts = async () => {
    try {
      setIsLoading(true)
      const response = await product.getAllPrds(10, 0)

      setRecommendProducts(response.data.data.items)
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
    <div className=' py-20 lg:max-w-7xl mx-auto lg:px-0 px-4 w-full  wow fadeInUp' data-wow-delay='.1s'>
      <div className='font-bold lg:text-bigPrdName text-largerPrdName text-[#3B3B3B]'>Gợi ý</div>
      <span className='inline-block h-[2px] w-10 bg-[#F14646] mb-6' />

      <div className='relative'>
        <div className='lg:grid lg:grid-cols-4 gap-6 lg:py-2 pb-4 lg:overflow-hidden overflow-x-auto flex'>
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
    </div>
  )
}
