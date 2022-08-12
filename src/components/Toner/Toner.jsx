import './Toner.scss'
import ToneImg from '../../assets/toner/maxitoner.png'
import Toner1 from '../../assets/toner/toner1.png'
import Toner2 from '../../assets/toner/toner2.png'

const Toner = () => {
  return (
    <section className='container toner'>
      <h2 className='toner__header'>MAXI TONER</h2>
      <div className='toner__content'>
        <div className='toner__words wordone'>
          <li>Best product for acne</li>
          <li>
            <span>Removes any kind of </span>
            <span>blemishes from your face</span>
          </li>
          <li>
            <span>Apply some our toner to </span>
            <span>your face</span>
          </li>
        </div>
        <div className='toner__image'>
          <img src={Toner1} alt1='toner1' className='toneI one' />
          <img src={ToneImg} alt='toner' className='toneImg' />
          <img src={Toner2} alt2='toner2' className='toneI two' />
        </div>
        <div className='toner__words wordtwo'>
          <li>
            <span>Soft toner foam stimulates </span>
            <span>your face</span>
          </li>
          <li>
            <span>Apply some our toner to your </span>
            <span>face</span>
          </li>
          <li>
            <span>Apply some our toner to your </span>
            <span>face</span>
          </li>
        </div>
      </div>
    </section>
  )
}

export default Toner
