import React from 'react'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav>
      <a className={styles.logo} href="#">Correct <span>4</span></a>
      <div className={styles.links}>
        <a href="#" className={styles.active}><p>Home</p></a>
        <a href="#"><p>About Us</p></a>
        <a href="#"><p>Classes</p></a>
      </div>
      <a className={styles.sign_up} href="#"><p>Sign In</p></a>
    </nav>
  )
}

export default Navbar