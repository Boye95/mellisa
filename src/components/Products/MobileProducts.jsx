import React from 'react'
import { FreeMode, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/free-mode'
import 'swiper/scss/pagination'

let checker = true;

export default function MobileProducts ({ data1, data2 }) {
  return (
    <div>
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      {data1.map(({ prodImg, name, price }, index) => {
          return (
            <SwiperSlide className='products__product' key={index}>
              <div className='products__image'>
                <img src={prodImg} alt='product' />
              </div>
              <div className='products__info'>
                <h5 className='products__name'>{name}</h5>
                <p className='products__price'>{price}</p>
              </div>
            </SwiperSlide>
          )
        })}
        <SwiperSlide>ffsss</SwiperSlide>
    </Swiper>

    </div>
  )
}
