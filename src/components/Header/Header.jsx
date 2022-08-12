import { useState } from 'react'
import './Header.scss'
import ham from '../../assets/nav/ham.png'
import x from '../../assets/nav/x.png'
import arrow from '../../assets/nav/arrow.png'


const Header = () => {
  
// Navbar display script
let [showMenu, isShowMenu] = useState(false)

  const body = document.querySelector('body')
  // const open = document.querySelector('.ham')
  const navResponsive = document.querySelector('.ham__container')
  // const closeBtn = document.querySelector('.x')
  // const overlay = document.querySelector('.overlay')
  let mQuery900 = window.matchMedia('(max-width: 900px)')
  
  let menuOpen = false
  
  function handleShowMenu () {
    menuOpen = true
    body.style.overflow = 'hidden'
    navResponsive.style.right = '0'
  
    if (mQuery900.matches) {
      navResponsive.style.width = '100vw'
    } else {
      navResponsive.style.width = '40vw'
      // overlay.style.display = 'block'
    }
  }
  
  function handleHideMenu () {
    menuOpen = false
  
    navResponsive.style.width = '0'
    navResponsive.style.right = '-40vw'
    body.style.overflow = 'auto'
    // overlay.style.display = 'none'
  }
  
  // open.addEventListener('click', showMenu)
  // closeBtn.addEventListener('click', hideMenu)
  mQuery900.addEventListener('change', () => {
    if (menuOpen) {
      handleShowMenu()
    }
  })

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
        <img src={ham} alt='ham' className='ham' onClick={handleShowMenu} />
      </div>

      <div className='ham__container'>
        <div className='x'>
          <img src={x} alt='xx' onClick={handleHideMenu} />
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
