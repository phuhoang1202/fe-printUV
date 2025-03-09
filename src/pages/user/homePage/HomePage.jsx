import BestProduct from '@components/bestProduct/BestProduct'
import ProductSuggest from '@components/product/ProductSuggest'
import CarouselCommon from '@components/carousel/CarouselCommon'
import { getUserInfor } from '@utils/auth'
import Banner1 from '@assets/images/carouselBanner/Banner1.svg'
import Banner2 from '@assets/images/carouselBanner/Banner2.jpg'
import Banner8 from '@assets/images/carouselBanner/Banner8.svg'
import Banner9 from '@assets/images/carouselBanner/Banner9.svg'
import Banner10 from '@assets/images/carouselBanner/Banner10.png'
import Features from '@components//features/Features'
import Categories from '@components/categories/Categories'
import Article from '@components/article/Article'
import Partner from '@components/partner/Partner'
import HeroSection from '@components/heroSection/HeroSection'

export default function HomePage() {
  let getInfonUser = null

  try {
    const userInfo = getUserInfor()
    if (userInfo) {
      getInfonUser = JSON.parse(userInfo)
    } else {
      getInfonUser = {}
    }
  } catch (error) {
    console.error('Error parsing user information:', error)
    getInfonUser = {}
  }

  const items = [
    {
      image: Banner2,
    },
    {
      image: Banner1,
    },
    {
      image: Banner8,
    },
    {
      image: Banner9,
    },
    {
      image: Banner10,
    },
  ]

  return (
    <div>
      <HeroSection />
      {/* <CarouselCommon items={items} /> */}
      <Features />
      <Categories />
      <ProductSuggest />
      <BestProduct />
      <Article />
      <Partner />
    </div>
  )
}
