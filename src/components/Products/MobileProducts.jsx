import React from 'react'
import { FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/free-mode'
import 'swiper/scss/pagination'

let checker = true

export default function MobileProducts ({ data1, data2 }) {
  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        modules={FreeMode}
        className='mobile__products'
      >
        {data1.map(({ prodImg, name, price }, index) => {
          return (
            <SwiperSlide className='product' key={index}>
              <img src={prodImg} alt='product' className='products__image' />
              <div className='products__info'>
                <h5 className='products__name'>{name}</h5>
                <p className='products__price'>{price}</p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        modules={ FreeMode }
        className='mobile__products'
      >
        {data2.map(({ prodImg, name, price }, index) => {
          return (
            <SwiperSlide className='product' key={index}>
              <img src={prodImg} alt='product' className='products__image' />
              <div className='products__info'>
                <h5 className='products__name'>{name}</h5>
                <p className='products__price'>{price}</p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
