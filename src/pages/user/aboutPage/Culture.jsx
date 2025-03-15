import React from 'react'

function Culture() {
  const prestige = [
    {
      title: 'Uy tín',
      content:
        'Đảm bảo chất lượng sản phẩm tốt nhất. Tuân thủ thời gian chính xác. Làm việc và vận hành có hệ thống chuẩn. Mối quan hệ win-win đôi bên cùng có lợi.',
    },
    {
      title: 'Dẫn đầu',
      content:
        'Luôn đầu tư công nghệ tiên tiến và luôn đặt mục tiêu chất lượng hàng đầu. Mang lại các trải nghiệm tốt nhất tới các khách hàng.',
    },
  ]

  const solidarity = [
    {
      title: 'Đoàn kết',
      content:
        'Cùng chung mục tiêu, chí hướng. Luôn vì mình và vì mọi người. Luôn có tinh thần hợp tác. Không đối kháng - Tôn trọng lẫn nhau.',
    },
    {
      title: 'Trách nhiệm',
      content:
        'Luôn chịu trách nhiệm với hành động của mình. Không đổ lỗi - Không bao biện. Hoàn thành công việc tới cùng.',
    },
  ]

  const creative = [
    {
      content:
        'Luôn tìm tòi, học hỏi, phát huy tính sáng tạo. Luôn động viên, khuyến khích ý tưởng mới. Cập nhật và học tập các kiến thức mới, công nghệ mới.',
    },
  ]

  return (
    <div>
      <div className='my-container py-4 lg:py-8'>
        <div>
          <h1 className={styles.aboutPageTitle}>TRỤ CỘT VĂN HOÁ</h1>
        </div>

        <article>
          <div className='lg:flex'>
            <div className='lg:basis-[65%]'>
              <div className={`${styles.sectionBox} mt-2 lg:mt-4 after:bottom-[-12.5px] after:bg-p-color`}>
                <h2 className={styles.sectionTitle}>UY TÍN - DẪN ĐẦU</h2>

                <ul className=' duration-300 group-hover:text-white'>
                  {prestige.map((e, i) => {
                    return (
                      <li key={i} className='mb-[10px]'>
                        <p className='lg:text-normal text-small'>
                          <span className='font-semibold'>{e.title}: </span>
                          {e.content}
                        </p>
                      </li>
                    )
                  })}
                </ul>

                <div className={`${styles.slideBg} bottom-0`}></div>
              </div>

              <div className='w-full h-[629px] mt-[20px] md:mt-0'>
                <img
                  className={styles.image}
                  src={'https://mayinuv.vn/wp-content/uploads/2019/10/tham-du-trien-lam-may-in-uv.jpg'}
                  alt='image'
                />
              </div>
            </div>

            <div className='lg:basis-[35%]'>
              <div className={`${styles.sectionBox} mt-[20px] after:bottom-[-12.5px] after:bg-p-color`}>
                <div>
                  <h2 className={styles.sectionTitle}>ĐOÀN KẾT - TRÁCH NHIỆM</h2>
                </div>

                <ul className='pl-[10px] text-sm duration-300 group-hover:text-white lg:text-normal text-small'>
                  {solidarity.map((e, i) => {
                    return (
                      <li key={i} className='mb-[10px]'>
                        <p className='text-sm md:text-base lg:text-lg'>
                          <span className='font-semibold'>{e.title}: </span>
                          {e.content}
                        </p>
                      </li>
                    )
                  })}
                </ul>

                <div className={`${styles.slideBg} bottom-0`}></div>
              </div>

              <div className='w-full h-[280px] mt-[30px] md:mt-0'>
                <img
                  className={styles.image}
                  src={'https://mayinuv.vn/wp-content/uploads/2019/10/may-in-uv-cua-cong-ty-2.jpg'}
                  alt='image'
                />
              </div>

              <div>
                <div className={`${styles.sectionBox} after:top-[-12.5px] after:bg-white`}>
                  <div>
                    <h2 className={styles.sectionTitle}>SÁNG TẠO</h2>
                  </div>

                  <ul className='ml-[10px] text-sm duration-300 group-hover:text-white lg:text-primaryPrdName text-normal'>
                    {creative.map((e, i) => {
                      return (
                        <li key={i} className='mb-[5px] last:mb-0'>
                          {e.content}
                        </li>
                      )
                    })}
                  </ul>

                  <div className={`${styles.slideBg} top-0`}></div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

const styles = {
  aboutPageTitle: 'uppercase text-[#3B3B3B] text-[28px] font-bold text-center lg:text-[32px]',
  sectionBox:
    "overflow-hidden relative group p-[10px] md:px-[30px] md:py-[40px] after:hidden md:after:block after:content-[''] after:absolute after:left-[50%] after:translate-x-[-50%] after:rotate-[45deg] after:w-[25px] after:h-[25px] hover:after:bg-white after:duration-500",
  sectionTitle:
    'uppercase text-[#3B3B3B] font-bold text-center mb-[20px] duration-300 group-hover:text-white md:text-[20px] lg:text-[24px]',
  slideBg:
    'w-full h-0 absolute left-[50%] translate-x-[-50%] bottom-0 bg-p-color -z-10 duration-300 group-hover:h-full',
  image: 'w-full h-full object-cover object-center',
}

export default Culture
