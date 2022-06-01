import React from 'react';
import styles from './businesses.module.css';

const Businesses = () => {
  return (
    <section className={styles.businesses}>
      <div className={styles.container}>
        <div className={styles.businesses__content}>
          <p className={styles.businesses__intro}>We are trusted by <span className={styles.alt}>1 Million+</span> businesses</p>

          <div className={styles.businesses__list}>
            <div className={styles.business}>
              <img src="https://flutterwave.com/images/company/uber.svg" alt="uber logo" className={styles.business__logo} />
            </div>

            <div className={styles.business}>
              <img src="https://flutterwave.com/images/company/mtn.svg" alt="mtn logo" className={styles.business__logo} />
            </div>

            <div className={styles.business}>
              <img src="https://flutterwave.com/images/company/chipper.svg" alt="chipper logo" className={styles.business__logo} />
            </div>

            <div className={styles.business}>
              <img src="https://flutterwave.com/images/company/piggyvest.svg" alt="piggyvest logo" className={styles.business__logo} />
            </div>

            <div className={styles.business}>
              <img src="https://flutterwave.com/images/company/wise.svg" alt="wises logo" className={styles.business__logo} />
            </div>

            <div className={styles.business}>
              <img src="https://flutterwave.com/images/company/microsoft.svg" alt="microsoft logo" className={styles.business__logo} />
            </div> 
          </div>
        </div>
      </div>
    </section>
  )
}

export default Businesses;