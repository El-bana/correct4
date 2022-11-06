import React from 'react';
import styles from './Home.module.css'
import wave from '../../assets/icons/waving-hand.svg';
import playIcon from '../../assets/images/google-play.png';
import appleIcon from '../../assets/images/app-store.png';
import homeDecoration from '../../assets/images/home.png';

function Home() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.home_header}>
          <div className={styles.home_header_text}>
            <h1>Welcome to</h1>
            <h1 className={styles.logo}>Correct <span>4</span></h1>
          </div>
          <img src={wave} alt='icon' />
        </div>
        <p className={styles.home_description}>correct 4 is your best and fastest tool to corret MCQ question with 100% accuracy,all you need is ur phone</p>
        <div className={styles.home_logos}>
          <a href="#">
            <img src={playIcon} alt='google play link' />
          </a>
          <a href="#">
            <img src={appleIcon} alt='app store link' />
          </a>
        </div>
      </div>
      <div className={styles.home_image}>
        <img className='img-fluid' src={homeDecoration} alt='' />
      </div>
    </div>
  )
}

export default Home