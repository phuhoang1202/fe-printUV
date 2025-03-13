import BestProduct from '@components/bestProduct/BestProduct'
import ProductSuggest from '@components/product/ProductSuggest'
import Features from '@components//features/Features'
import Categories from '@components/categories/Categories'
import Article from '@components/article/Article'
import Partner from '@components/partner/Partner'
import HeroSection from '@components/heroSection/HeroSection'

export default function HomePage() {
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
