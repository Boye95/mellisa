import { useState } from 'react'
import './Header.scss'
import x from '../../assets/nav/x.png'
import arrow from '../../assets/nav/arrow.png'
import { RiMenu3Fill } from 'react-icons/ri'

const Header = () => {
  // Navbar display script
  let [showMenu, setShowMenu] = useState(false)

  let handleShowMenu = () => {
    setShowMenu(!showMenu)
  }

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
        <RiMenu3Fill className='ham' size={38} onClick={handleShowMenu} />
      </div>

      <div className={showMenu ? 'ham_container toggle' : 'ham__container'}>
        <div className='x'>
          <img src={x} alt='xx' onClick={handleShowMenu} />
        </div>
        <a href='#' className='link'>
          Home
          <img src={arrow} alt='arrow' />
        </a>
        <a href='#' className='link'>
          About Us
          <img src={arrow} alt='arrow' />
        </a>
        <a href='#' className='link'>
          How it works
          <img src={arrow} alt='arrow' />
        </a>
        <a href='#' className='link'>
          Login
          <img src={arrow} alt='arrow' />
        </a>
        <a href='#' className='link sign'>
          Sign Up
          <img src={arrow} alt='arrow' />
        </a>
      </div>
    </header>
  )
}

export default Header
