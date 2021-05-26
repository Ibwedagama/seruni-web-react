import React from 'react'
import styles from './Sidebar.module.scss'
import { Link } from "react-scroll"
import { HiX } from 'react-icons/hi'

const Sidebar = ({closeSidebar, isSidebarOpen}) => {
  return (
    <section className={isSidebarOpen ? `${styles.sidebar} ${styles.open}` : styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <button>
          <HiX className={styles.closeIcon} onClick={closeSidebar}/>
        </button>
      </div>
      <nav className={styles.sidebarLink}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={closeSidebar}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about-us"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={closeSidebar}
        >
          About Us
        </Link>
        <Link
          activeClass="active"
          to="our-work"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={closeSidebar}
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
          onClick={closeSidebar}
        >
          Contact Us
        </Link>
      </nav>
    </section>
  )
}

export default Sidebar
