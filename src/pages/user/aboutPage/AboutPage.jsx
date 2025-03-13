import React from 'react'

export default function AboutPage() {
  return (
    <div>
      {/* About Content */}
      <div className='max-w-7xl mx-auto  mt-24'>
        <div className='flex items-center gap-4 justify-between'>
          {/* Text */}
          <div className='w-1/2'>
            <div>We’re changing the way people connect</div>
            <p>
              Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et labore
              commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt mollit id
              pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat veniam occaecat aliqua.
            </p>
          </div>

          <div className='flex items-center gap-4'>
            <div>
              <img
                src='https://images2.thanhnien.vn/528068263637045248/2025/2/26/1-17405356837231991770130.jpg'
                alt=''
                className='w-80 h-56'
              />
            </div>

            <div>
              <img
                src='https://images2.thanhnien.vn/528068263637045248/2025/2/26/1-17405356837231991770130.jpg'
                alt=''
                className='w-80 h-56'
              />
              <img
                src='https://images2.thanhnien.vn/528068263637045248/2025/2/26/1-17405356837231991770130.jpg'
                alt=''
                className='w-80 h-56'
              />
            </div>
            <div>
              <img
                src='https://images2.thanhnien.vn/528068263637045248/2025/2/26/1-17405356837231991770130.jpg'
                alt=''
                className='w-80 h-56'
              />
              <img
                src='https://images2.thanhnien.vn/528068263637045248/2025/2/26/1-17405356837231991770130.jpg'
                alt=''
                className='w-80 h-56'
              />
              <img
                src='https://images2.thanhnien.vn/528068263637045248/2025/2/26/1-17405356837231991770130.jpg'
                alt=''
                className='w-80 h-56'
              />
            </div>
          </div>
        </div>
        {/* Section 1 */}
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-gray-900'>Chúng tôi là BigColor Việt Nam</h2>
          <p className='mt-4 text-gray-600'>
            BigColor Việt Nam là thương hiệu tiên phong trong lĩnh vực **thiết kế, in ấn và quảng cáo chuyên nghiệp**.
            Với sứ mệnh mang đến những giải pháp sáng tạo và hiệu quả, chúng tôi cam kết cung cấp các sản phẩm và dịch
            vụ có chất lượng tốt nhất cho khách hàng.
          </p>
        </div>

        {/* Section 2 - Sứ Mệnh */}
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <img src='@assets/images/about/mission.jpg' alt='Sứ mệnh BigColor' className='rounded-lg shadow-lg w-full' />
          <div>
            <h3 className='text-2xl font-semibold text-gray-800'>Sứ mệnh của chúng tôi</h3>
            <p className='mt-4 text-gray-600'>
              Chúng tôi không chỉ mang đến những **sản phẩm in ấn** chất lượng mà còn giúp doanh nghiệp của bạn nổi bật
              trên thị trường. Từ thiết kế nhận diện thương hiệu đến các chiến dịch quảng cáo sáng tạo, BigColor Việt
              Nam đồng hành cùng bạn trong mọi bước đi.
            </p>
          </div>
        </div>

        {/* Section 3 - Giá Trị Cốt Lõi */}
        <div className='text-center'>
          <h3 className='text-2xl font-semibold text-gray-800'>Giá trị cốt lõi</h3>
          <p className='mt-4 text-gray-600'>BigColor Việt Nam cam kết dựa trên **3 giá trị cốt lõi**:</p>
          <ul className='mt-4 space-y-3 text-gray-700'>
            <li>✔ **Chất lượng**: Cam kết cung cấp sản phẩm in ấn sắc nét, bền đẹp.</li>
            <li>✔ **Sáng tạo**: Luôn đổi mới để mang đến những thiết kế ấn tượng.</li>
            <li>✔ **Khách hàng là trung tâm**: Luôn lắng nghe và đồng hành cùng khách hàng.</li>
          </ul>
        </div>

        {/* Section 4 - Hình Ảnh */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <img src='@assets/images/about/team.jpg' alt='Đội ngũ BigColor' className='rounded-lg shadow-lg w-full' />
          <img
            src='@assets/images/about/workspace.jpg'
            alt='Văn phòng BigColor'
            className='rounded-lg shadow-lg w-full'
          />
          <img src='@assets/images/about/projects.jpg' alt='Dự án BigColor' className='rounded-lg shadow-lg w-full' />
        </div>

        {/* Section 5 - Kết Nối */}
        <div className='text-center'>
          <h3 className='text-2xl font-semibold text-gray-800'>Kết nối với chúng tôi</h3>
          <p className='mt-4 text-gray-600'>Hãy liên hệ ngay với **BigColor Việt Nam** để được tư vấn và hợp tác!</p>
          <div className='mt-6 flex justify-center space-x-4'>
            <a href='https://facebook.com' className='text-blue-600 hover:underline'>
              Facebook
            </a>
            <a href='https://zalo.me' className='text-green-600 hover:underline'>
              Zalo
            </a>
            <a href='/contact' className='text-gray-700 hover:underline'>
              Liên hệ
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
