import React from 'react';
import {Link} from 'react-router-dom';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.ft}>
        <div className={styles.ft__container}>
                {/* group 1*/}
                <div className={styles.ft__group}>

                    {/* first section */}
                    <div className={styles.ft__section}>
                        <div className={styles.ft__section__head}>
                            <h6 className={styles.ft__section__title}>Products</h6> 
                        </div>
                        
                        <nav className={styles.ft__nav}>
                            <Link to="" className={styles.ft__nav__link}>Collect Payments</Link>
                            <Link to="" className={styles.ft__nav__link}>Send Money</Link>
                            <Link to="" className={styles.ft__nav__link}>Store</Link>
                            <Link to="" className={styles.ft__nav__link}>Payment Links</Link>
                            <Link to="" className={styles.ft__nav__link}>Invoices</Link>
                            <Link to="" className={styles.ft__nav__link}>Capital</Link>
                            <Link to="" className={styles.ft__nav__link}>Grow</Link>
                            <Link to="" className={styles.ft__nav__link}>Card Issuing</Link>
                            <Link to="" className={styles.ft__nav__link}>Faas</Link>  
                        </nav>
                    </div>
                    
                    {/* second section */}
                    <div className={styles.ft__section}>
                        <div className={styles.ft__section__head}>
                            <h6 className={styles.ft__section__title}>Resources</h6>
                        </div>
                        
                        <nav className={styles.ft__nav}>
                            <Link to="" className={styles.ft__nav__link}>Pricing</Link>
                            <Link to="" className={styles.ft__nav__link}>Support</Link>
                            <Link to="" className={styles.ft__nav__link}>Blog</Link>
                            <Link to="" className={styles.ft__nav__link}>Integrations</Link>
                            <Link to="" className={styles.ft__nav__link}>Why you got charged</Link> 
                        </nav>
                    </div>
                    
                    {/* third section */}
                    <div className={styles.ft__section}>
                        <div className={styles.ft__section__head}>
                            <h6 className={styles.ft__section__title}>Developers</h6>
                        </div>
                        
                        <nav className={styles.ft__nav}>
                            <Link to="" className={styles.ft__nav__link}>API Documentation</Link>
                            <Link to="" className={styles.ft__nav__link}>API Reference</Link>
                            <Link to="" className={styles.ft__nav__link}>API Status</Link> 
                        </nav>
                    </div>
                    
                     {/* fourth section */}
                    <div className={styles.ft__section}>
                        <div className={styles.ft__section__head}>
                            <h6 className={styles.ft__section__title}>Flutterwave</h6> 
                        </div>
                        
                        <nav className={styles.ft__nav}>
                            <Link to="" className={styles.ft__nav__link}>Careers</Link>
                            <Link to="" className={styles.ft__nav__link}>Press Kit</Link>
                            <Link to="" className={styles.ft__nav__link}>Covid 19</Link>
                            <Link to="" className={styles.ft__nav__link}>Barter</Link>
                            <Link to="" className={styles.ft__nav__link}>Disha</Link>
                            <Link to="" className={styles.ft__nav__link}>Send</Link>
                        </nav>
                    </div>
                    
                    {/* fifth section */}
                    <div className={styles.ft__section}>
                        <div className={styles.ft__section__head}>
                            <h6 className={styles.ft__section__title}>Contact</h6>
                        </div>
                        
                        <nav className={styles.ft__nav}>
                            <Link to="" className={styles.ft__nav__link}>hi@flutterwavego.com</Link>
                            <Link to="" className={styles.ft__nav__link}>Twitter Support</Link>  
                        </nav>
                    </div>
                </div>
                
                {/* group 2 */}
                <div className={ [styles.ft__group, styles.ft__group__alt].join(" ") }>
                    <div className={styles.ft__section}>
                        <div className={styles.location}>
                            <button className={styles.location__toggler}>
                                <img src="https://flutterwave.com/images/flags/ng.svg" alt="" className={styles.location__flag} />
                                <span className={styles.location__name}>Nigeria</span>
                            </button>

                            <div className={ [styles.location__dropdown, styles.toggle].join(" ") }>
                                <ul className={styles.location__dropdown__list}>
                                    <li className={styles.location__dropdown__item}>
                                        <button className={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/cm.svg" alt="cameroon's flag" className={styles.country__flag} />
                                            <span className={styles.country__name}>Cameroon</span>
                                        </button>
                                    </li>

                                    <li className={styles.location__dropdown__item}>
                                        <button className={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/gh.svg" alt="ghana's flag" className={styles.country__flag} />
                                            <span className={styles.country__name}>Ghana</span>
                                        </button>
                                    </li>

                                    <li className={styles.location__dropdown__item}>
                                        <button className={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/ci.svg" alt="Ivory coast flag" className={styles.country__flag} />
                                            <span className={styles.country__name}>Ivory Coast</span>
                                        </button>
                                    </li>

                                    <li className={styles.location__dropdown__item}>
                                        <button className={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/ke.svg" alt="Kenya's flag" className={styles.country__flag} />
                                            <span className={styles.country__name}>Kenya</span>
                                        </button>
                                    </li> 

                                    <li className={styles.location__dropdown__item}>
                                        <button className={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/mw.svg" alt="malawi's flag" className={styles.country__flag} />
                                            <span className={styles.country__name}>Malawi</span>
                                        </button>
                                    </li>

                                    <li className={styles.location__dropdown__item}>
                                        <button className={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/mu.svg" alt="mauritius's flag" className={styles.country__flag} />
                                            <span className={styles.country__name}>Mauritius</span>
                                        </button>
                                    </li> 

                                    <li className={styles.location__dropdown__item}>
                                        <button className={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/ng.svg" alt="nigeria flag" className={styles.country__flag} />
                                            <span className={styles.country__name}>Nigeria</span>
                                        </button>
                                    </li>

                                    <li className={styles.location__dropdown__item}>
                                        <button className={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/eu.svg" alt="rest of europe flag" className={styles.country__flag} />
                                            <span className={styles.country__name}>Rest Of Europe</span>
                                        </button>
                                    </li>
                                    
                                    <li className={styles.location__dropdown__item}>
                                        <button className={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/rw.svg" alt="rwanda's flag" className={styles.country__flag} />
                                            <span className={styles.country__name}>Rwanda</span>
                                        </button>
                                    </li>

                                    <li className={styles.location__dropdown__item}>
                                        <button className={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/za.svg" alt="south africa flag" className={styles.country__flag} />
                                            <span className={styles.country__name}>South Africa</span>
                                        </button>
                                    </li>

                                    <li className={styles.location__dropdown__item}>
                                        <button className={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/tz.svg" alt="tanzania flag" className={styles.country__flag} />
                                            <span className={styles.country__name}>Tanzania</span>
                                        </button>
                                    </li>

                                    <li className={styles.location__dropdown__item}>
                                        <button className={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/ug.svg" alt="uganda's flag" className={styles.country__flag} />
                                            <span className={styles.country__name}>Uganda</span>
                                        </button>
                                    </li>

                                    <li className={styles.location__dropdown__item}>
                                        <button className={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/gb.svg" alt="united kingdom's flag" className={styles.country__flag} />
                                            <span className={styles.country__name}>United Kingdom</span>
                                        </button>
                                    </li>

                                    <li className={styles.location__dropdown__item}>
                                        <button className={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/us.svg" alt="united states flag" className={styles.country__flag} />
                                            <span className={styles.country__name}>United States</span>
                                        </button>
                                    </li>

                                    <li className={styles.location__dropdown__item}>
                                        <button className={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/zm.svg" alt="zambia's flag" className={styles.country__flag} />
                                            <span className={styles.country__name}>Zambia</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={styles.ft__section}>
                        <nav className={ [styles.ft__nav, styles.ft__nav__inline].join(" ") }>
                            <Link to="" className={styles.ft__nav__link}>Twitter</Link>
                            <Link to="" className={styles.ft__nav__link}>Facebook</Link>
                            <Link to="" className={styles.ft__nav__link}>Instagram</Link> 
                            <Link to="" className={styles.ft__nav__link}>Youtube</Link> 
                            <Link to="" className={styles.ft__nav__link}>LinkedIn</Link>
                        </nav>
                    </div>
                </div>
                
                {/* group 3*/}
                <div className={ [styles.ft__group, styles.ft__group__alt].join(" ") }>
                    <div className={styles.ft__section}>
                        <p className={styles.ft__text}>© Flutterwave</p>
                    </div>

                    <div className={styles.ft__section}>
                        <nav className={ [styles.ft__nav, styles.ft__nav__inline].join(" ") }>
                            <Link to="" className={styles.ft__nav__link}>Privacy policy</Link> 
                            <Link to="" className={styles.ft__nav__link}>Terms of use</Link>
                            <Link to="" className={styles.ft__nav__link}>Cookie policy</Link>
                            <Link to="" className={styles.ft__nav__link}>Merchant service agreement</Link> 
                            <Link to="" className={styles.ft__nav__link}>Payment protection promise</Link>
                        </nav> 
                    </div>
                </div>
            </div>
    </footer>
  )
}

export default Footer;