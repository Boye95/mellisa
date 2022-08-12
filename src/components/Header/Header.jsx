import './Header.scss'
import ham from '../../assets/nav/ham.png'
import x from '../../assets/nav/x.png'
import arrow from '../../assets/nav/arrow.png'

const Header = () => {
  return (
    <header className='container nav'>
      <div className='logo'>MELLISSA</div>
      <nav className='nav__links'>
        <a href='#' className='link'>
          Home
        </a>
        <a href='#' className='link'>
          About Us
        </a>
        <a href='#' className='link'>
          How it works
        </a>
        <a href='#' className='link'>
          Login
        </a>
        <a href='#' className='link sign'>
          Sign Up
        </a>
      </nav>

      <div className='ham__nav'>
        <img src={ham} alt='ham' className='ham' />
      </div>

      <div className='ham__container'>
        <img src={x} alt="xx" />
      <a href='#' className='link'>
          Home
        </a>
        <a href='#' className='link'>
          About Us
        </a>
        <a href='#' className='link'>
          How it works
        </a>
        <a href='#' className='link'>
          Login
        </a>
        <a href='#' className='link sign'>
          Sign Up
        </a>
      </div>
    </header>
  )
}

export default Header
