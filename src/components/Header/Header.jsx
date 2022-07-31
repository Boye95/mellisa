import './Header.scss'

const Header = () => {
    return(
        <header className='container nav'>
            <div className='logo'>MELLISSA</div>
            <nav className='nav__links'>
                <a href='#' className='link'>Home</a>
                <a href='#' className='link'>About Us</a>
                <a href='#' className='link'>How it works</a>
                <a href='#' className='link'>Login</a>
                <a href='#' className='link sign'>Sign Up</a>
            </nav>
        </header>
    )
}

export default Header