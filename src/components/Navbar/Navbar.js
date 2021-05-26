import React from 'react'
import styles from './Navbar.module.scss'
import { Link } from "react-scroll"
import { HiMenu } from "react-icons/hi"

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className={styles.navbar}>

      {/* Dekstop Navbar */}
      <nav className={styles.navDesktop}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="our-services"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          About Us
        </Link>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <img src="/img/logo_seruni.png" alt="Seruni Logo" />
        </Link>
        <Link
          activeClass="active"
          to="our-work"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Our Work
        </Link>
        <Link
          activeClass="active"
          to="contact-us"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Contact Us
        </Link>
      </nav>

      {/* Mobile Navbar */}
      <nav className={styles.navMobile}>
        <div className={styles.hamburgerMenu} >
          <button>
            <HiMenu onClick={toggleSidebar} />
          </button>
        </div>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <img src="/img/logo_seruni.png" alt="Seruni Logo" />
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
