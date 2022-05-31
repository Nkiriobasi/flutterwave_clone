import React from 'react';
import styles from './Apis.module.css';
import { Link } from 'react-router-dom';

const Apis = () => {
  return (
    <section className={styles.apis__section}>
        <div className={styles.apis__container}>
            <h2 className={styles.h1}>Well documented and easy-to-use <span className={styles.pinkColor}>APIs</span> for <span className={styles.pinkColor}>developers</span></h2>
            <p className={styles.api__description}>
                We have done the core payments integrations and abstractions, so your team can easily integrate with our 
                APIs and access multiple payment functionalities.
            </p>

            <ul className={styles.ul}>
                <li className={styles.li}>Quick transfers</li>
                <li className={styles.li}>Initiate one-time and recurring payments</li>
                <li className={styles.li}>Payment verification</li>
                <li className={styles.li}>Instant virtual cards creation</li>
                <li className={styles.li}>Customers verification</li> 
            </ul>

            <Link to="" className={styles.btn__lg}>
                <span className={styles.btn__label}>Read th API docs</span>
            </Link>
        </div>
    </section>
  )
}

export default Apis;