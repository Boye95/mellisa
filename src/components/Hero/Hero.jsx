import './Hero.scss'
import hero from '../../assets/heroimg2.png'

const Hero = () => {
  return (
    <section className='container hero'>
      <div className='hero__content'>
        <div className='hero__words'>
          <h1 className='hero__header'>
            <span>BEAUTY BEYOND </span>
            <span>YOUR IMAGINATION</span>
          </h1>
          <p className='hero__text'>
            <span>Lorem Ipsum is simply dummy text of the printing </span>
            <span>and typesetting industry. L industry's standard </span>
            <span>dummy text ever since the 1500s, when an </span>
            <span>unknown printer took a galley of type and </span>
            <span>scrambled it to including versions of Lorem </span>
            <span>Ipsum.</span>
          </p>
          <div className='hero__buttons'>
            <a href='#' className='hero__button'>
              View all Products
            </a>
            <a href='#' className='hero__button'>
              Sign Up
            </a>
          </div>
        </div>
        <div className='hero__image'>
          <img src={hero} alt='hero' />
        </div>
      </div>
    </section>
  )
}

export default Hero
