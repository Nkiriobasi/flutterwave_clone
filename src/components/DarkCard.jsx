import React from 'react';
import styles from './DarkCard.module.css';
import { Link } from 'react-router-dom';

const DarkCard = () => {
  return (
    <section className={styles.dark__card}>
        <div className={styles.dark__card__container}>
            <h2 className={styles.h1}>Create physical and virtual <span className={styles.blColor}>cards</span></h2>
            <p className={styles.p}>Issues physical and virtual cards that work globally. Create, launch, and manage your cards 
            easily from anywhere.</p>
            <Link to="" className={styles.btn}>
                <span className={styles.btn__label}>Get started with cards</span>
            </Link>
        </div>
    </section>
  )
};

export default DarkCard;