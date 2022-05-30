import React from 'react';
import styles from './Commerce.module.css';
import { Link } from 'react-router-dom';

const Commerce = () => {
  return (
    <section className={styles.commerce}>
        <div className={styles.commerce__container}>
            <h2 className={styles.h1}>Build a successful online business with our 
            <span className={styles.grColor}> Commerce tools.</span>
            </h2>
             
            {/* Grid-1 */}
            <div className={styles.commerce__grid}>
                {/* First Section */}
                <div className={styles.item}>
                    <h5 className={styles.commerce__title}>Store</h5>
                    <p className={styles.commerce__description}>Create a free ecommerce website and start selling worldwide 
                    with just a few clicks.
                    </p>
                    <Link to="" className={styles.btn__sm}>
                        <span className={styles.btn__label}>Start selling</span>
                    </Link>
                </div>
                
                {/* Section Section */}
                <div className={styles.item}>
                    <div className={styles.image__wrapper}>
                        <img src="https://cdn.filestackcontent.com/resize=width:1100/output=format:webp/bkgNvkPuRLyYGNqXNFGP" alt="creator" />
                    </div>
                </div>
            </div>

            
            {/* Grid-2 */}
            <div className={[styles.commerce__grid, styles.commerce__grid__alt].join(' ')}>
                {/* First Section */}
                <figure className={styles.figure}>
                    <div className={styles.image__wrapper}>
                        <img src="https://cdn.filestackcontent.com/resize=width:700/output=format:webp/lc5K7jXVQiS9jBWmcdKg" alt="creator" />
                    </div>
                    <figcaption className={styles.figurecaption}>A platform for you, whether you're a big business or a   
                        <span className={styles.grColor}> solo artist.</span>
                    </figcaption>
                </figure>
                
                {/* Second Section */}
                <div className={styles.grid__section}>
                    <div className={styles.grid__item}>
                        <h5 className={styles.commerce__title}>Invoices</h5>
                        <p className={styles.commerce__description}>Generate professional invoices for your customers and get paid from anywhere.</p>
                        <Link to="" className={styles.btn__inline}>
                            <span className={styles.inline__label}>Get started</span>
                        </Link>
                    </div> 

                    <div className={styles.grid__item}>
                        <h5 className={styles.commerce__title}>Transfers(Payout)</h5>
                        <p className={styles.commerce__description}>Make single or bulk transfers to bank accounts from your flutterwave 
                        dashboard.</p>
                        <Link to="" className={styles.btn__inline}>
                            <span className={styles.inline__label}>Get started</span>
                        </Link>
                    </div>
                </div>
            </div>

            <section className={styles.commerce__para__wrapper}>
                <p className={styles.commerce__para__text}>Let's play to our strengths, shall we? You focus on bringing your amazing ideas to life 
                and we focus on providing all the <span className={styles.grColor}>commerce tools</span> you need.
                </p>
                <Link to="" className={styles.btn__lg}>
                    <span className={styles.btn__label}>Okay let's go</span>
                </Link> 
            </section>
        </div>
    </section>
  )
}

export default Commerce;