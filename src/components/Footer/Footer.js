import React from 'react'
import styles from './Footer.module.scss'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer} id="contact-us">
      <div className={styles.footerImage}>
        <img src="/img/badge.png" alt="Footer Badge" />
      </div>
      <div className={styles.footerForm}>
        <form>
          <div className={styles.inputGroup}>
            <select name="type" id="type">
              <option value="Client Inquiries">Client Inquiries</option>
              <option value="Job Application">Job Application</option>
              <option value="Collaboration Request">Collaboration Request</option>
            </select>
          </div>
          <div className={styles.twoColumn}>
            <div className={styles.inputGroup}>
              <input type="text" name="name" id="name" placeholder="Name*" />
            </div>
            <div className={styles.inputGroup}>
              <input type="text" name="company" id="company" placeholder="Company Name*" />
            </div>
            <div className={styles.inputGroup}>
              <input type="email" name="email" id="email" placeholder="Email*" />
            </div>
            <div className={styles.inputGroup}>
              <input type="tel" name="phone" id="phone" placeholder="Phone*" />
            </div>
          </div>
          <div className={styles.inputGroup}>
            <textarea name="message" id="message" cols="30" rows="5" placeholder="Message" />
          </div>

          <button className={styles.formButton}>Send!</button>
        </form>
      </div>
      <div className={styles.footerInfo}>
        <p className={styles.subtitle}>hello@serunicreative.com</p>
        <p className={styles.subtitle}>+6222-20465155</p>
        <p className={styles.subtitle}>or pop us a visit at :</p>

        <div className={styles.socialMedia}>
          <a href="/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>

        <p className={styles.copywrite}>Brings You Joy | &copy; 2020 Seruni</p>
      </div>
    </footer>
  )
}

export default Footer
