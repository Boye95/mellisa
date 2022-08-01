import './Hero.scss'
import hero from '../../assets/heroimg2.png'

const Hero = () => {
  return (
    <section className='container hero'>
      <div className='hero__content'>
        <div className='hero__words'>
          <h1 className='hero__header'>
            BEAUTY BEYOND <br /> YOUR IMAGINATION
          </h1>
          <p className='hero__text'>
            Lorem Ipsum is simply dummy text of the printing <br />
            and typesetting industry. L industry's standard <br />
            dummy text ever since the 1500s, when an <br />
            unknown printer took a galley of type and <br />
            scrambled it to including versions of Lorem <br />
            Ipsum.
          </p>
          <a href='#' className='hero__button'>
            View all Products
          </a>
        </div>
        <div className='hero__image'>
          <img src={hero} alt='hero' />
        </div>
      </div>
    </section>
  )
}

export default Hero
