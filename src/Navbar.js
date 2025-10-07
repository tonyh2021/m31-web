import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import logoimgLight from './images/m31logolight.png'
import logoimgGrey from './images/M31LogoGrey.png'
import { RxHamburgerMenu } from "react-icons/rx";


// import './App.css';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (showNavbar) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showNavbar]);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const handleNavLinkClick = () => {
    setShowNavbar(false);
    document.body.classList.remove('no-scroll');
  }

  return (
    <nav className={`nav-bar-wrapper ${isScrolled || showNavbar ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/" onClick={handleNavLinkClick}>
          <img src={(isScrolled || showNavbar) ? logoimgGrey : logoimgLight} alt="M31 Logo" className="logo-img" />
        </Link>
      </div>
      <div className={`menu-icon ${showNavbar ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`} onClick={handleShowNavbar}>
          <RxHamburgerMenu/>
      </div>
      <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <ul className="nav-links">
          <li className="nav-item"><Link to="/Products" onClick={handleNavLinkClick}>Our Approach</Link></li>
          <li className="nav-item"><Link to="/Resources" onClick={handleNavLinkClick}>Publications</Link></li>
          <li className="nav-item"><Link to="/Services" onClick={handleNavLinkClick}>Tools</Link></li>
          <li className="nav-item"><Link to="/About" onClick={handleNavLinkClick}>About</Link></li>
          <li className="nav-item"><Link to="/Contact" onClick={handleNavLinkClick}>Connect</Link></li>
        </ul>
      </div>
      
    </nav>
  );
}
