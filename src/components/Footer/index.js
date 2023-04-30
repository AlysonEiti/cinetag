import React from 'react'
import styles from './Footer.module.css'
import instagram from './instagram.svg';
import github from './github.svg';
import linkedin from './linkedin.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <a
          href="https://www.linkedin.com/in/alyson-eiti"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/alyson-eiti"
          target="_blank"
        >
          <img src={github} alt="github icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/alyson-eiti"
          target="_blank"
        >
          <img src={instagram} alt="instagram icon" />
        </a>
      </div>
      <h2>Powered by Alyson Eiti</h2>
    </footer>
  )
}
