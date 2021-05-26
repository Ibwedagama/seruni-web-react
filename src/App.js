import styles from './App.module.scss'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'

import { useState } from 'react'

function App() {
  const [sidebar, setSidebar] = useState(false)

  const handleToggleSidebar = () => {
    setSidebar(!sidebar)
  }

  const closeSidebar = () => {
    setSidebar(false)
  }

  return (
    <div className={styles.App}>
      <Navbar toggleSidebar={handleToggleSidebar} />
      <Sidebar closeSidebar={closeSidebar} isSidebarOpen={sidebar} />
      <section className={styles.body}>
        <section className={styles.home} id="home">
          <div className={styles.heroBanner}>
            <img src="/img/seruni-sticker.webp" alt="Seruni Banner Sticker" />
          </div>
          <div className={styles.subtitle}>
            <h1>About Us</h1>
            <p>
              We are SERUNI, a creative social media agency based in Bandung,
              or wherever we like to work. We’re young, smart, and free!
              Even the sky is not our limit.
              We don’t work for you, but we want to work with you.
              Together, let’s conquer the digital world.
            </p>
            <p><b>Keep scrolling to know us deeper.</b></p>
          </div>
        </section>
        <section className={styles.aboutUs} id="about-us">
          <section className={styles.servicesGrid}>
            <div className={styles.servicesCard}>
              <img src="/img/windows_bar_green.png" alt="Creative Content" />
              <div className={styles.cardContent}>
                <h3>Creative Content</h3>
                <p>
                  We are a bunch of people passionate about social media.
                  Being viral is our passion! We have talented and professional writers,
                  creators, designers, illustrators, animators, to keep your
                  brand updated and noticed by our Great Clients, the Netizen.
                </p>
              </div>
            </div>
          </section>
        </section>
        <section className={styles.ourWork} id="our-work">
          This is Our Work
        </section>
        <section className={styles.clients}>
          This is Our Clients
        </section>
      </section>
      <Footer />
    </div>
  )
}

export default App
