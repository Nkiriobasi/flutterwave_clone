import React from 'react';
import styles from './cl.module.css';
import { Link } from 'react-router-dom';

const Cl = () => {
  return (
    <section className={styles.cl__section}>
        <div className={styles.cl__box}>
            <div className={styles.cl__wrapper}>
                <h3 className={styles.cl__heading}>Ready to get started?</h3>
                <p className={styles.cl__subheading}>
                    Create an account and instantly start accepting payments, selling your 
                    beautiful products online and building financial tools.
                </p>
                <div className={styles.cl__ctas}>
                    <Link to="" className={styles.btn__sm}>
                        <span className={styles.btn__label}>Get started</span>
                    </Link>
                    <Link to="" className={styles.link}>
                        <span className={styles.link__label}>Contact sales</span>
                    </Link> 
                </div>
            </div>
        </div>
    </section>
  )
};

export default Cl;