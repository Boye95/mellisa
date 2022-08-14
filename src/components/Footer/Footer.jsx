import './Footer.scss'

import location from '../../assets/footer/location1.svg'
import mail from '../../assets/footer/mail1.svg'
import phone from '../../assets/footer/phone.svg'

const Footer = () => {
  return (
    <section className='container footer'>
      <div className='footer__contact'>
        <div className='contact'>
          <p className='image'>
            <img src={phone} alt='phone' />
          </p>
          <a href='tel:+44799992972282'>+447 9999 2972 282</a>
        </div>
        <div className='contact'>
          <p className='image'>
            <img src={mail} alt='mail' />
          </p>
          <a href='mailto:himellisa@gmail.com'>himellisa@gmail.com</a>
        </div>
        <div className='contact'>
          <p className='image'>
            <img src={location} alt='location' />
          </p>
          <a href='https://goo.gl/maps/sNBSdp3GQHPJm38Z7'>
            38a Lucas way,England
          </a>
        </div>
      </div>
      <div className='line'></div>
      <div className='footer__links'>
        <div className='links about'>
          <h3>About</h3>
          <a href='#'>Awards</a>
          <a href='#'>Our Team</a>
          <a href='#'>Products</a>
        </div>

        <div className='links company'>
          <h3>Company</h3>
          <a href='#'>Our Services</a>
          <a href='#'>Contact</a>
          <a href='#'>Products</a>
        </div>

        <div className='links resources'>
          <h3>Resources</h3>
          <a href='#'>Blogs</a>
          <a href='#'>Newsletter</a>
          <a href='#'>Privacy Policy</a>
        </div>

        <div className='links subscribe'>
          <input type='email' name='email' placeholder='Enter Email' />
          <p>
            Subscribe to news letter for <br />
            exciting discounts
          </p>
        </div>
      </div>

      <div className='subscribemobile'>
        <input type='email' name='email' placeholder='Enter Email' />
        <p>
          Subscribe to news letter for <br />
          exciting discounts
        </p>
      </div>
    </section>
  )
}

export default Footer
