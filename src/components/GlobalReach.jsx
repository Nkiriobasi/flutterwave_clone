import React from 'react';
import {Link} from 'react-router-dom';
import styles from './globalReach.module.css';

const Global = () => {
  return (
    <section className={styles.global__reach}>
        <div className={styles.global__reach__container}>
            <h2 className={styles.h1}>Our <span className={styles.blColor}>global</span> reach</h2>

            <div className={styles.stats}>
                <div className={ [styles.stat, styles.diff].join(' ') }>
                    <Link to="" className={styles.link}>
                        <span>30+ Currencies</span>
                    </Link>
                    <p className={styles.stat__info}>We accept payments in more than thirty currencies.</p>
                </div>

                <div className={ [styles.stat, styles.diff].join(' ') }>
                    <h5 className={styles.stat__heading}>20M+ API calls</h5>
                    <p className={styles.stat__info}>API calls per day, peaking at 231 request per second.</p>
                </div>

                <div className={ [styles.stat, styles.diff].join(' ') }>
                    <h5 className={styles.stat__heading}>500K+ payments daily</h5>
                    <p className={styles.stat__info}>Average number of payment processed daily.</p>
                </div>

                <div className={styles.stat}>
                    <h5 className={styles.stat__heading}>15+ payment options</h5>
                                
                    <ul className={styles.stat__list}>
                        <li className={styles.li}>Debit & Credit cards</li>
                        <li className={styles.li}>Bank Account</li>
                        <li className={styles.li}>Mobile money</li>
                        <li className={styles.li}>POS</li>
                        <li className={styles.li}>M-Pesa</li>
                        <li className={styles.li}>VISA QR</li>
                        <li className={styles.li}>Bank Transfer</li>
                        <li className={styles.li}>USSD</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
};

export default Global;