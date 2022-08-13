import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper'
import 'swiper/scss'
import 'swiper/scss/free-mode'
import 'swiper/scss/pagination'



export default function MobileProducts ({ data1, data2 }) {

  let slidePikin = data1.map(({ prodImg, name, price }, index) => {
    return (
      <div key={index} className='product__product'>
        <div className='products__image'>
          <img src={prodImg} alt='product' />
        </div>
        <div className='products__info'>
          <h5 className='products__name'>{name}</h5>
          <p className='products__price'>{price}</p>
        </div>
      </div>
    )
  })
  
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true
        }}
        modules={[FreeMode, Pagination]}
        className='mobile__product'
        shouldSwiperUpdate
      >
        {slidePikin}
      </Swiper>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        modules={FreeMode}
        className='mobile__product'
      >
        {data2.map(({ prodImg, name, price }, index) => {
          return (
            <SwiperSlide className='product__product' key={index}>
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
      </Swiper>
    </div>
  )
}
