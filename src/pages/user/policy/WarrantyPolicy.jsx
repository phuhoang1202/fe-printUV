import React from 'react'

export default function WarrantyPolicy() {
  const addressCompany = [
    {
      id: 1,
      office: 'Văn phòng tại Hà Nội',
      address: 'Số 84 Giáp Bát - Q. Hoàng Mai - TP. Hà Nội',
      phoneNumber: '0246.668.0246 - 0949 58 11 58',
      email: 'bigcoloradv@gmail.com',
    },
    {
      id: 2,
      office: 'Văn phòng tại Đà Nẵng',
      address: '172 Lý Thái Tông - Q. Thanh Khê - Tp Đà Nẵng',
      phoneNumber: '0966161373',
      email: 'bigcoloradv@gmail.com',
    },
    {
      id: 3,
      office: 'Văn phòng tại Sài Gòn',
      address: '78/7 Nguyễn Thị Tú, P. Bình Hưng Hòa B, Quận Bình Tân',
      phoneNumber: '0286.286.6686 - 0935 389 988',
      email: 'bigcolorsaigon@gmail.com',
    },
  ]

  return (
    <div className=' mx-auto '>
      <h1 className='text-largerPrdName font-bold uppercase'>Chính Sách Bảo Hành Máy In UV</h1>

      {/* Giới thiệu chính sách bảo hành */}
      <p className='my-4'>
        Công ty BigColor Việt Nam cam kết mang đến dịch vụ bảo hành tận nơi, đảm bảo quyền lợi tốt nhất cho khách hàng
        khi sử dụng sản phẩm <span className='font-semibold'>máy in UV</span> của chúng tôi.
      </p>

      {/* 1. Thời gian bảo hành */}
      <h2 className='text-normal font-semibold mb-2'>1. Thời Gian Bảo Hành</h2>
      <ul className='list-disc list-inside mb-4 text-small'>
        <li>
          Bảo hành chính hãng: <span className='font-semibold'>12 - 24 tháng</span> tùy theo dòng sản phẩm.
        </li>
        <li>Thay thế linh kiện miễn phí trong thời gian bảo hành (trừ hao mòn tự nhiên).</li>
        <li>Hỗ trợ kỹ thuật và kiểm tra máy định kỳ.</li>
      </ul>

      {/* 2. Điều kiện bảo hành */}
      <h2 className='text-normal font-semibold mb-2'>2. Điều Kiện Bảo Hành</h2>
      <ul className='list-disc list-inside mb-4 text-small'>
        <li>Máy còn trong thời gian bảo hành và có tem niêm phong hợp lệ.</li>
        <li>Lỗi do nhà sản xuất hoặc lỗi kỹ thuật trong quá trình vận hành.</li>
        <li>Không áp dụng cho hư hỏng do tác động cơ học, thiên tai hoặc sử dụng sai hướng dẫn.</li>
      </ul>

      {/* 3. Phạm vi bảo hành */}
      <h2 className='text-normal font-semibold mb-2'>3. Phạm Vi Bảo Hành</h2>
      <ul className='list-disc list-inside mb-4 text-small'>
        <li>Hỗ trợ kỹ thuật từ xa và hướng dẫn sử dụng.</li>
        <li>Bảo hành tận nơi trong khu vực nội thành TP. Hà Nội, Đà Nẵng, Sài Gòn.</li>
        <li>Hỗ trợ vận chuyển nếu cần sửa chữa tại trung tâm bảo hành.</li>
      </ul>

      {/* 4. Liên hệ bảo hành */}
      <h2 className='text-xl font-semibold mb-2'>4. Liên Hệ Bảo Hành</h2>
      <p className='mb-4 text-small'>
        Nếu gặp sự cố kỹ thuật hoặc cần bảo hành, vui lòng liên hệ theo thông tin dưới đây:
      </p>
      <div className='grid grid-cols-1 gap-4'>
        {addressCompany.map((office) => (
          <div key={office.id} className='p-4 border rounded-lg bg-gray-100 shadow-sm'>
            <h3 className='text-lg font-semibold '>{office.office}</h3>
            <p className=''>
              <span className='font-semibold'>Địa chỉ:</span> {office.address}
            </p>
            <p className=''>
              <span className='font-semibold'>Điện thoại:</span> {office.phoneNumber}
            </p>
            <p className=''>
              <span className='font-semibold'>Email:</span> {office.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
