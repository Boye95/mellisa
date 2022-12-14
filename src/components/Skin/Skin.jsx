import './Skin.scss'
import { FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/free-mode'
import 'swiper/scss/pagination'

import Skin1 from '../../assets/skins/1.png'
import Skin2 from '../../assets/skins/2.png'
import Skin3 from '../../assets/skins/3.png'
import Skin4 from '../../assets/skins/4.png'
import Skin5 from '../../assets/skins/5.png'

const Skin = () => {
  return (
    <section className='container skin'>
      <div className='skin__header'>
        <h1>FOR ALL SKIN TYPE</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and i</p>
      </div>

      <div className='skin__reel'>
        <img src={Skin1} alt='skin' className='skins' />
        <img src={Skin2} alt='skin' className='skins' />
        <img src={Skin3} alt='skin' className='skins' />
        <img src={Skin4} alt='skin' className='skins' />
        <img src={Skin5} alt='skin' className='skins' />
      </div>

      <div className='skin__reelmobile'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className='mySwiper'
        >
          <SwiperSlide>
            <img src={Skin1} alt='skin' className='skins' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Skin2} alt='skin' className='skins' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Skin3} alt='skin' className='skins' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Skin4} alt='skin' className='skins' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Skin5} alt='skin' className='skins' />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Skin
