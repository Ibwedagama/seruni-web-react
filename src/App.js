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
      <section
        className={styles.body}
        style={{
          backgroundImage: "url(/img/BG_Yellow.png)",
          backgroundSize: "cover",
        }}>

        {/* Home Section */}
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

        {/* Our Services */}
        <section className={styles.ourServices} id="our-services">
          <section className={styles.servicesGrid}>

            {/* Creative Content */}
            <figure className={styles.servicesCard}>
              <img src="/img/windows_bar_green.png" alt="Creative Content" />
              <figcaption className={styles.cardContent}>
                <h3>Creative Content</h3>
                <p>
                  We are a bunch of people passionate about social media.
                  Being viral is our passion! We have talented and professional writers,
                  creators, designers, illustrators, animators, to keep your
                  brand updated and noticed by our Great Clients, the Netizen.
                </p>
              </figcaption>
            </figure>

            {/* Social Media Management */}
            <figure className={styles.servicesCard}>
              <img src="/img/windows_bar_orange.png" alt="Social Media Management" />
              <figcaption className={styles.cardContent}>
                <h3>Social Media Management</h3>
                <p>
                  Do you think social media is about replying to all messages and comments?
                  It’s more than that, darling. Let us do this for you.
                  Our team is experienced and will be pleased to do the task.
                </p>
              </figcaption>
            </figure>

            {/* Digital Campaign */}
            <figure className={styles.sectionIllustration}>
              <img src="/img/person_image.webp" alt="Our Service Mobile Illustration" />
            </figure>

            {/* Digital Campaign */}
            <figure className={styles.servicesCard}>
              <img src="/img/windows_bar_red.png" alt="Digital Campaign" />
              <figcaption className={styles.cardContent}>
                <h3>Digital Campaign</h3>
                <p>
                  No no, we don’t run a campaign with flyers or roaring motorcycles.
                  We use fact, data, combined with creativity to ensure your message
                  is well conveyed to our audience. If needed, we will work with
                  influencers and communities to support the campaign.
                </p>
              </figcaption>
            </figure>

            {/* Media Buying */}
            <figure className={styles.servicesCard}>
              <img src="/img/windows_bar_blue.png" alt="Media Buying" />
              <figcaption className={styles.cardContent}>
                <h3>Media Buying</h3>
                <p>
                  We know that, sometimes, we need a booster to shoot
                  your contents to the right potential audience.
                  We’ll work it out for you, adjusted with your target and budget.
                </p>
              </figcaption>
            </figure>
          </section>
        </section>

        {/* Our Work */}
        <section className={styles.ourWork} id="our-work">
          This is Our Work
        </section>

        {/* Our Clients */}
        <section className={styles.clients}>
          This is Our Clients
        </section>
      </section>
      <Footer />
    </div>
  )
}

export default App
