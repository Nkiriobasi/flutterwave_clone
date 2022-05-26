import React from 'react';
import styles from './CustomerSection.module.css';

const CustomerSection = () => {
  return (
    <section className={styles.customer}>
        <div className={styles.customer__container}>
            <div className={styles.customer__grid}>
                <div className={styles.grid__item}>
                  <img src="https://cdn.filestackcontent.com/resize=width:1200/output=format:webp/NKQW90wYQoKKGmYXn7RE" alt="microsoft" className={ [styles.microsoft__img, styles.customer__img].join(' ') } /> 
                </div>

                <div className={styles.grid__item}>
                  <img src="https://cdn.filestackcontent.com/resize=width:1100/output=format:webp/bkgNvkPuRLyYGNqXNFGP" alt="yanga beauty" className={ [styles.yanga__img, styles.customer__img].join(' ') } />
                  <p className={styles.customer__grid__text}>It's not the size of the company. It's the size of the ambition, Ambitious businesses of all sizes count 
                  on flutterwave to grow their business everywhere.</p>
                </div>
            </div>
        </div>                      
    </section>
  )
}

export default CustomerSection;

      