import Product from '@components/product/Product'
import React, { useEffect, useState } from 'react'
import Rating1 from '@assets/images/Rating1.svg'
import Rating2 from '@assets/images/Rating2.svg'
import Rating3 from '@assets/images/Rating3.svg'
import IconLeft from '@assets/images/IconLeft.svg'
import IconRight from '@assets/images/IconRight.svg'
import { product } from '@services/user/product'
import { getUserInfor } from '@utils/auth'
import { useTranslation } from 'react-i18next'

export default function BestProduct({ addToWishList }) {
  const ratings = [Rating1, Rating2, Rating3]
  let arrayRatings = []
  const [pageNumber, setPageNumber] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [bestProducts, setBestProducts] = useState([])

  const fetchBestProducts = async () => {
    try {
      setIsLoading(true)
      const response = await product.getAllPrds(10, 3)
      setBestProducts(response.data.data.items)
    } catch (error) {
      console.error('Error fetching recommended products')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchBestProducts()
  }, [])

  if (Array.isArray(bestProducts) && bestProducts.length > 3) {
    for (let i = 3; i <= bestProducts.length; i++) {
      arrayRatings.push(i)
    }
  }

  const combinedArray = [...ratings, ...arrayRatings]

  const handlePrev = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1)
    }
  }

  const handleNext = () => {
    if (bestProducts && bestProducts.length > 4) {
      setPageNumber(pageNumber + 1)
    }
  }

  return (
    <div className=' w-full lg:py-20 py-10 bg-[#F7F7F1]'>
      <div className='lg:max-w-7xl mx-auto lg:px-0 px-4'>
        <div className='font-bold lg:text-bigPrdName text-largerPrdName'>Sản phẩm hot</div>
        <span className='inline-block h-[2px] w-10 bg-[#F14646] mb-6' />

        <div className='mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 lg:gap-6 gap-4'>
          {bestProducts?.map((item, index) => (
            <div key={index}>
              <Product
                item={item}
                type={'best'}
                setBestProducts={setBestProducts}
                combinedArray={combinedArray}
                index={index}
                addToWishList={addToWishList}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
