import { useEffect, useState } from 'react'
import Product from '@components/product/Product'
import { product } from '@services/user/product'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import Loading from '@components/loadingCommon/Loading'
const { Search } = Input

export default function CategoryProduct() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [amountProduct, setAmountProduct] = useState(2)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchPrd, setSearchPrd] = useState('')

  const categories = [
    { id: 1, name: 'Máy in quảng cáo', value: 'may-in-quang-cao' },
    { id: 2, name: 'Máy in vải', value: 'may-in-vai' },
    { id: 3, name: 'Máy cắt', value: 'may-cat' },
    { id: 4, name: 'Máy in DTF', value: 'may-in-dtf' },
    { id: 5, name: 'Phụ kiện', value: 'phu-kien' },
  ]

  const toggleCategory = (value) => {
    setSelectedCategory((prev) => (prev === value ? '' : value)) // Bấm lần nữa để bỏ chọn
  }

  const fetchBestProducts = async () => {
    try {
      setIsLoading(true)
      const response = await product.getAllPrds(10, 1, '', '')
      setProducts(response.data.data.items)
    } catch (error) {
      console.error('Error fetching recommended products')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchBestProducts()
  }, [])

  // Search
  const fetchSearchProducts = async () => {
    try {
      setIsLoading(true)
      const response = await product.searchPrd(searchPrd)
      setProducts(response.data.data.items)
    } catch (error) {
      console.error('Error fetching recommended products')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearchPrd = () => {
    if (searchPrd) {
      fetchSearchProducts()
    }
  }

  return (
    <div className='lg:mt-24 mt-20 max-w-7xl mx-auto'>
      {/* Tiêu đề */}
      <div className='flex items-center justify-between'>
        <h3 className='font-semibold text-bigPrdName'>Sản phẩm</h3>
        <div className='flex items-center gap-2'>
          <button
            className={`${
              amountProduct === 2 ? 'bg-gray-100' : 'bg-white'
            } border p-2 flex items-center justify-center w-10 h-10 rounded-lg`}
            onClick={() => setAmountProduct(2)}
          >
            <i class='fa-solid fa-grip-vertical' style={{ fontSize: '20px' }}></i>
          </button>
          <button
            className={`${
              amountProduct === 3 ? 'bg-gray-100' : 'bg-white'
            } border p-2 flex items-center justify-center w-10 h-10 rounded-lg`}
            onClick={() => setAmountProduct(3)}
          >
            <i class='fa-solid fa-grip' style={{ fontSize: '20px' }}></i>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className='flex gap-8 lg:mt-8 mt-4 lg:px-0 px-2'>
        {/* Sidebar - Categories */}
        <div>
          <div className='px-4 bg-[#F8F8F8] pt-6 pb-4 lg:w-60 w-full rounded-md sticky top-24 shadow-md'>
            <div className='relative'>
              <Input placeholder='Tìm kiếm category' className='h-11 ' onChange={(e) => setSearchPrd(e.target.value)} />
              <button className='absolute top-1/2 right-3 -translate-y-1/2' onClick={handleSearchPrd}>
                <SearchOutlined style={{ fontSize: '20px' }} />
              </button>
            </div>

            <div className='mt-4 pl-4'>
              {categories.map((category) => (
                <label key={category.id} className='flex items-center gap-2 mb-2'>
                  <input
                    type='checkbox'
                    checked={selectedCategory === category.value}
                    onChange={() => toggleCategory(category.value)}
                    className='w-4 h-4'
                  />
                  {category.name}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Product Listing */}
        <div>
          {isLoading && <Loading />}
          <div className={`${amountProduct === 2 ? 'grid-cols-3' : 'grid-cols-4'} flex-1 grid gap-2`}>
            {products?.map((item, index) => (
              <div key={index}>
                <Product item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
