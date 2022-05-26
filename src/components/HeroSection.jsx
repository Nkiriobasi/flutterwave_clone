import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
        <div className={styles.hero__container}>
            <div className={styles.hero__info}>
                <h1 className={styles.hero__heading}> <span className={styles.orColor}>Endless possibilities</span> for every business</h1>
                <p className={styles.hero__subheading}>Sell online, process payments, build financial products, 
                or use business tools designed to grow your business.
                </p>

                <div className={styles.hero__ctas}>
                    <Link to="" className={ [styles.hero__btn, styles.btn__primary].join(' ') }>
                        <span className={styles.btn__label}>Create a free account</span>
                    </Link>
                    <Link to="" className={ [styles.hero__btn, styles.btn__secondary].join(' ') }>
                        <span className={styles.btn__label}>Contact sales</span>
                    </Link>
                </div>
            </div>
        </div>                               
    </section>
  )
}

export default HeroSection;