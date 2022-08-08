import './Footer.scss'

import location from '../../assets/footer/location1.svg'
import mail from '../../assets/footer/mail1.svg'
import phone from '../../assets/footer/phone.svg'

const Footer = () => {
  return (
    <section className='container footer'>
      <div className='footer__contact'>
        <p>
          <img src={phone} alt='phone' />
          <a href='tel:+44799992972282'>++447 9999 2972 282</a>
        </p>
        <p>
            <img src={mail} alt="mail" />
            <a href="mailto:himellisa@gmail.com">himellisa@gmail.com</a>
        </p>
        <p>
            <img src={location} alt="location" />
            <a href="mailto:himellisa@gmail.com">38a Lucas way,England</a>
        </p>

      </div>
    </section>
  )
}

export default Footer
