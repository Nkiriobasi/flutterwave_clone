import React from 'react';
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";
import img1 from '../assets/payment-method.svg';
import img2 from '../assets/send-money.svg';
import img3 from '../assets/checkout-demo.svg';
import img4 from '../assets/store.svg';
import img5 from '../assets/payment-link.svg';
import img6 from '../assets/invoice.svg';

const Navbar = () => {
  return (
    <header className={styles.hd}>
            <nav className={styles.hd__nav}>
                <div className={styles.hd__nav__top}>
                    <Link to="/"><img src="https://flutterwave.com/images/logo/full.svg" alt="flutterwave logo" className={styles.hd__nav__logo} /></Link>

                </div>

                <ul className={styles.hd__nav__list}>

                    {/* First list item */}
                    <li className={styles.hd__nav__item}>
                        <span className={styles.hd__nav__label}>Payment</span>

                        <ul className={styles.hd__nav__dropdown}>
                            <li className="hd__nav__dropdown__item">
                                <Link to="" className={styles.hd__nav__link}>
                                    <img src={img1} alt='payment-method logo' className={styles.payments__icon} />

                                    <span className="hd__nav__link__info">
                                        <span className="hd__nav__link__title">Collect payments</span>
                                        <span className="hd__nav__link__desc">Collect payment in 30+ currencies</span>
                                    </span>                    
                                </Link>
                            </li>

                            <li className="hd__nav__dropdown__item">
                                <Link to="" className={styles.hd__nav__link}>
                                    <img src={img2} alt='send-money logo' className={styles.payments__icon} />

                                    <span className="hd__nav__link__info">
                                        <span className="hd__nav__link__title">Send money</span>
                                        <span className="hd__nav__link__desc">Send money to anyone or business globally</span>
                                    </span>                    
                                </Link>
                            </li>

                            <li className="hd__nav__dropdown__item">
                                <Link to="" className={styles.hd__nav__link}>
                                    <img src={img3} alt='checkout logo' className={styles.payments__icon} />

                                    <span className="hd__nav__link__info">
                                        <span className="hd__nav__link__title">Checkout demo</span>
                                        <span className="hd__nav__link__desc">Experience checkout yourself</span>
                                    </span>                    
                                </Link>
                            </li>
                        </ul>
                    </li>
                    
                    {/* Second list item */}
                    <li className={styles.hd__nav__item}>
                        <span className={styles.hd__nav__label}>Commerce</span>

                        <ul className={styles.hd__nav__dropdown}>
                            <li className="hd__nav__dropdown__item">
                                <Link to="" className={styles.hd__nav__link}>
                                    <img src={img4} alt='payment-method logo' className={styles.payments__icon} />

                                    <span className="hd__nav__link__info">
                                        <span className="hd__nav__link__title">Store</span>
                                        <span className="hd__nav__link__desc">Start selling online</span>
                                    </span> 
                                </Link>
                            </li>
                            
                            <li className="hd__nav__dropdown__item">
                                <Link to="" className={styles.hd__nav__link}>
                                    <img src={img5} alt='payment-method logo' className={styles.payments__icon} />

                                    <span className="hd__nav__link__info">
                                        <span className="hd__nav__link__title">Payment Links</span>
                                        <span className="hd__nav__link__desc">Accept payment without writing code</span>
                                    </span> 
                                </Link>
                            </li>

                            <li className="hd__nav__dropdown__item">
                                <Link to="" className={styles.hd__nav__link}>
                                    <img src={img6} alt='payment-method logo' className={styles.payments__icon} />

                                    <span className="hd__nav__link__info">
                                        <span className="hd__nav__link__title">Invoices</span>
                                        <span className="hd__nav__link__desc">Create professional invoices</span>
                                    </span> 
                                </Link>
                            </li>
                        </ul>
                    </li>
                    
                    {/* Third list item */}
                    <li className={styles.hd__nav__item}>
                        <Link to="" className={styles.hd__nav__link}>
                            <span className={styles.hd__nav__link__info}>
                                <span className={styles.hd__nav__link__title}>Issuing</span>
                                <span className={styles.hd__nav__link__desc}>Issue physical and virtual cards</span>
                            </span>
                        </Link>
                    </li>
                    
                    {/* Fourth list item */}
                    <li className={styles.hd__nav__item}>
                        <Link to="" className={styles.hd__nav__link}>
                            <span className={styles.hd__nav__link__info}>
                                <span className={styles.hd__nav__link__title}>Capital</span>
                                <span className={styles.hd__nav__link__desc}>Get quick access to flexible loans to grow your business</span>
                            </span>
                        </Link>
                    </li>
                    
                    {/* Fifth list item */}
                    <li className={styles.hd__nav__item}>
                        <Link to="" className={styles.hd__nav__link}>
                            <span className={styles.hd__nav__link__info}>
                                <span className={styles.hd__nav__link__title}>Grow</span>
                                <span className={styles.hd__nav__link__desc}>Register & incorporate your business from anywhere</span>
                            </span>
                        </Link>
                    </li>
                    
                    {/* sixth list item */}
                    <li className={styles.hd__nav__item}>
                        <Link to="" className={styles.hd__nav__link}>
                            <span className={styles.hd__nav__link__info}>
                                <span className={styles.hd__nav__link__title}>Faas</span>
                                <span className={styles.hd__nav__link__desc}>Embed financial services into your product</span>
                            </span>
                        </Link>
                    </li>  
                </ul>
                
                {/* Sign in button */}
                <button className={styles.hd__btn__box}>
                    <Link to="" className={styles.hd__btn}>Sign in</Link>
                </button>
            </nav>
    </header>
  )
}

export default Navbar