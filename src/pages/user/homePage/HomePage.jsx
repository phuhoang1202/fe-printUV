import BestProduct from '@components/bestProduct/BestProduct'
import ProductSuggest from '@components/product/ProductSuggest'
import Features from '@components//features/Features'
import Categories from '@components/categories/Categories'
import Article from '@components/article/Article'
import Partner from '@components/partner/Partner'
import HeroSection from '@components/heroSection/HeroSection'
import AboutMore from '../aboutPage/AboutMore'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Features />
      <Categories />
      <ProductSuggest />
      <BestProduct />
      <AboutMore />
      <Partner />
      <Article />
    </div>
  )
}
