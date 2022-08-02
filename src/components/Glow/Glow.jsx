import './Glow.scss'
import GlowImg from '../../assets/glow/glow.png'
import Rinse from '../../assets/glow/rinse.png'
import Wash from '../../assets/glow/wash.png'
import Toner from '../../assets/glow/toner.png'

const Glow = () => {
  return (
    <section className='container glow'>
      <img src={GlowImg} alt='glow' className='glow__img' />
      <div className='glow__content'>
        <h2 className='glow__title'>THREE STEPS GLOW</h2>
        <div className='glow__text'>
            <img src={Wash} alt="wash" />
            <p>Deep wash your face</p>
        </div>
        <div className='glow__text'>
            <img src={Toner} alt="toner" />
            <p>Apply some of our toner on your face</p>
        </div>
        <div className='glow__text'>
            <img src={Rinse} alt="rinse" />
            <p>Rinse face after 15mins</p>
        </div>
        <button>Learn More</button>
      </div>
    </section>
  )
}

export default Glow
