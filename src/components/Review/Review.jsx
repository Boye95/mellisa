import './Review.scss'
import Reviewer from '../../assets/reviews/reviewer.png'
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/pagination'

const data = [
  {
    avatar: Reviewer,
    name: 'Juliet Adekunle',
    review:
      "One of the best brands I've ever used. The cream toner does magic to my skin. I was battling with acute acne before my friend recommended this brand. XOXO"
  },
  {
    avatar: Reviewer,
    name: 'Juliet Adekunle',
    review:
      "One of the best brands I've ever used. The cream toner does magic to my skin. I was battling with acute acne before my friend recommended this brand. XOXO"
  },
  {
    avatar: Reviewer,
    name: 'Juliet Adekunle',
    review:
      "One of the best brands I've ever used. The cream toner does magic to my skin. I was battling with acute acne before my friend recommended this brand. XOXO"
  }
]

const Review = () => {
  return (
    <section className='container review'>
      <div className='review__header'>
        WHAT OUR DOLLS ARE SAYING <br />
        ABOUT OUR PRODUCTS
      </div>
      <div className='swiper__qoute'>
        <Swiper
          className='swiper__box'
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          slidesPerView={1}
          pagination={true}
        >
          {data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='review__reviews'>
                <div className='review__image'>
                  <img src={avatar} alt='reviewer' />
                </div>
                <div className='reviews'>
                  <p>{review}</p>
                  <h6 className='reviewer__name'>{name}</h6>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Review
