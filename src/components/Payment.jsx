import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Payment.module.css';

const Payment = () => {
  return (
    <section className={styles.payment}>
        <div className={styles.payment__container}>
            <h2 className={styles.h1}>A fully unified set of <span className={styles.orColor}>payments tools</span></h2>

            <div className={styles.payment__grid}>
                {/* First Section */} 
                <div className={styles.grid__section}>
                    <div className={styles.payment__item}>
                        <h5 className={styles.payment__title}>Checkout</h5>
                        <p className={styles.payment__description}>Checkout features our smart payment ordering system, 
                        increased speed, and beautiful simplicity. It's designed to grow your revenue and provide 
                        the best payment experience to your customers</p>
                        <Link to="" className={styles.btn__block}>
                            <span className={styles.block__label}>Get started</span>
                        </Link>
                    </div>
                </div>

                {/* Second Section */}
                <div className={styles.grid__section}>
                    <div className={styles.payment__item}>
                        <img src="https://flutterwave.com/images/sections/checkout.png" alt="payment phone" className={styles.payment__img} />
                    </div>
                </div>

                {/* Third Section */}
                <div className={ [styles.grid__section, styles.alt__grid__section].join(' ') }>
                    <div className={styles.payment__item}>
                        <h5 className={styles.payment__title}>Accept payments</h5>
                        <p className={styles.payment__description}>Easily recieve money from anyone, anywhere in the world.</p>
                        <Link to="" className={styles.btn__inline}>
                            <span className={styles.inline__label}>Learn more</span>
                        </Link>
                    </div> 

                    <div className={styles.payment__item}>
                        <h5 className={styles.payment__title}>Transfers(Payout)</h5>
                        <p className={styles.payment__description}>Make single or bulk transfers to bank accounts from your flutterwave 
                        dashboard.</p>
                        <Link to="" className={styles.btn__inline}>
                            <span className={styles.inline__label}>Learn more</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Payment;