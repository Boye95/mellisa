import './Toner.scss'
import ToneImg from '../../assets/toner/maxitoner.png'
import Toner1 from '../../assets/toner/toner1.png'
import Toner2 from '../../assets/toner/toner2.png'

const Toner = () => {
    return(
        <section className='container toner'>
            <h2 className='toner__header'>
                MAXI TONER
            </h2>
            <div className='toner__content'>
                <div className='toner__words'>
                    <li>Best product for acne</li>
                    <li>Removes any kind of <br />blemishes from your face</li>
                    <li>Apply some our toner to  <br />your face</li>
                </div>    
                <div className='toner__image'>
                    <img src={Toner1} alt1='toner1' className='toneI' />
                    <img src={ToneImg} alt='toner' className='toneImg' />
                    <img src={Toner2} alt2='toner2' className='toneI' />
                </div>
                <div className='toner__words'>
                    <li>Soft toner foam stimulates  <br />your face</li>
                    <li>Apply some our toner to your <br /> face</li>
                    <li>Apply some our toner to your <br /> face</li>
                </div>
            </div>
        </section>
    )
}

export default Toner