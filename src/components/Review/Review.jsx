import './Review.scss'
import Reviewer from '../../assets/reviews/reviewer.png'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/scss'

const Review = () => {
  return (
    <section className='container review'>
      <div className='review__header'>
        WHAT OUR DOLLS ARE SAYING <br />
        ABOUT OUR PRODUCTS
      </div>
      <Swiper spaceBetween={50} slidesPerView={3}>
        <SwiperSlide>
          <div className='review__reviews'>
            <div className='review__image'>
              <img src={Reviewer} alt='reviewer' />
            </div>
            <div className='reviews'>
              <p>
                One of the best brands i've ever used. The cream toner does
                magic to my skin. I was battling with acute acne before my
                friend recommeded this brand. XOXO
              </p>
              <h6 className='reviewer__name'>Juliet Adekunle</h6>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Review
