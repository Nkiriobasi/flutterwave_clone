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
                        
                        <nav class={styles.ft__nav}>
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
                        
                        <nav class={styles.ft__nav}>
                            <Link to="" className={styles.ft__nav__link}>Pricing</Link>
                            <Link to="" className={styles.ft__nav__link}>Support</Link>
                            <Link to="" className={styles.ft__nav__link}>Blog</Link>
                            <Link to="" className={styles.ft__nav__link}>Integrations</Link>
                            <Link to="" className={styles.ft__nav__link}>Why you got charged</Link> 
                        </nav>
                    </div>
                    
                    {/* third section */}
                    <div class={styles.ft__section}>
                        <div class={styles.ft__section__head}>
                            <h6 class={styles.ft__section__title}>Developers</h6>
                        </div>
                        
                        <nav class={styles.ft__nav}>
                            <Link to="" className={styles.ft__nav__link}>API Documentation</Link>
                            <Link to="" className={styles.ft__nav__link}>API Reference</Link>
                            <Link to="" className={styles.ft__nav__link}>API Status</Link> 
                        </nav>
                    </div>
                    
                     {/* fourth section */}
                    <div class={styles.ft__section}>
                        <div class={styles.ft__section__head}>
                            <h6 class={styles.ft__section__title}>Flutterwave</h6> 
                        </div>
                        
                        <nav class={styles.ft__nav}>
                            <Link to="" className={styles.ft__nav__link}>Careers</Link>
                            <Link to="" className={styles.ft__nav__link}>Press Kit</Link>
                            <Link to="" className={styles.ft__nav__link}>Covid 19</Link>
                            <Link to="" className={styles.ft__nav__link}>Barter</Link>
                            <Link to="" className={styles.ft__nav__link}>Disha</Link>
                            <Link to="" className={styles.ft__nav__link}>Send</Link>
                        </nav>
                    </div>
                    
                    {/* fifth section */}
                    <div class={styles.ft__section}>
                        <div class={styles.ft__section__head}>
                            <h6 class={styles.ft__section__title}>Contact</h6>
                        </div>
                        
                        <nav class={styles.ft__nav}>
                            <Link to="" className={styles.ft__nav__link}>hi@flutterwavego.com</Link>
                            <Link to="" className={styles.ft__nav__link}>Twitter Support</Link>  
                        </nav>
                    </div>
                </div>
                
                {/* group 2 */}
                <div class={ [styles.ft__group, styles.ft__group__alt].join(" ") }>
                    <div class={styles.ft__section}>
                        <div class={styles.location}>
                            <button class={styles.location__toggler}>
                                <img src="https://flutterwave.com/images/flags/ng.svg" alt="" class={styles.location__flag} />
                                <span class={styles.location__name}>Nigeria</span>
                            </button>

                            <div class={ [styles.location__dropdown, styles.toggle].join(" ") }>
                                <ul class={styles.location__dropdown__list}>
                                    <li class={styles.location__dropdown__item}>
                                        <button class={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/cm.svg" alt="cameroon's flag" class={styles.country__flag} />
                                            <span class={styles.country__name}>Cameroon</span>
                                        </button>
                                    </li>

                                    <li class={styles.location__dropdown__item}>
                                        <button class={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/gh.svg" alt="ghana's flag" class={styles.country__flag} />
                                            <span class={styles.country__name}>Ghana</span>
                                        </button>
                                    </li>

                                    <li class={styles.location__dropdown__item}>
                                        <button class={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/ci.svg" alt="Ivory coast flag" class={styles.country__flag} />
                                            <span class={styles.country__name}>Ivory Coast</span>
                                        </button>
                                    </li>

                                    <li class={styles.location__dropdown__item}>
                                        <button class={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/ke.svg" alt="Kenya's flag" class={styles.country__flag} />
                                            <span class={styles.country__name}>Kenya</span>
                                        </button>
                                    </li> 

                                    <li class={styles.location__dropdown__item}>
                                        <button class={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/mw.svg" alt="malawi's flag" class={styles.country__flag} />
                                            <span class={styles.country__name}>Malawi</span>
                                        </button>
                                    </li>

                                    <li class={styles.location__dropdown__item}>
                                        <button class={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/mu.svg" alt="mauritius's flag" class={styles.country__flag} />
                                            <span class={styles.country__name}>Mauritius</span>
                                        </button>
                                    </li> 

                                    <li class={styles.location__dropdown__item}>
                                        <button class={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/ng.svg" alt="nigeria flag" class={styles.country__flag} />
                                            <span class={styles.country__name}>Nigeria</span>
                                        </button>
                                    </li>

                                    <li class={styles.location__dropdown__item}>
                                        <button class={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/eu.svg" alt="rest of europe flag" class={styles.country__flag} />
                                            <span class={styles.country__name}>Rest Of Europe</span>
                                        </button>
                                    </li>
                                    
                                    <li class={styles.location__dropdown__item}>
                                        <button class={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/rw.svg" alt="rwanda's flag" class={styles.country__flag} />
                                            <span class={styles.country__name}>Rwanda</span>
                                        </button>
                                    </li>

                                    <li class={styles.location__dropdown__item}>
                                        <button class={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/za.svg" alt="south africa flag" class={styles.country__flag} />
                                            <span class={styles.country__name}>South Africa</span>
                                        </button>
                                    </li>

                                    <li class={styles.location__dropdown__item}>
                                        <button class={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/tz.svg" alt="tanzania flag" class={styles.country__flag} />
                                            <span class={styles.country__name}>Tanzania</span>
                                        </button>
                                    </li>

                                    <li class={styles.location__dropdown__item}>
                                        <button class={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/ug.svg" alt="uganda's flag" class={styles.country__flag} />
                                            <span class={styles.country__name}>Uganda</span>
                                        </button>
                                    </li>

                                    <li class={styles.location__dropdown__item}>
                                        <button class={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/gb.svg" alt="united kingdom's flag" class={styles.country__flag} />
                                            <span class={styles.country__name}>United Kingdom</span>
                                        </button>
                                    </li>

                                    <li class={styles.location__dropdown__item}>
                                        <button class={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/us.svg" alt="united states flag" class={styles.country__flag} />
                                            <span class={styles.country__name}>United States</span>
                                        </button>
                                    </li>

                                    <li class={styles.location__dropdown__item}>
                                        <button class={styles.country__btn}>
                                            <img src="https://flutterwave.com/images/flags/zm.svg" alt="zambia's flag" class={styles.country__flag} />
                                            <span class={styles.country__name}>Zambia</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class={styles.ft__section}>
                        <nav class={ [styles.ft__nav, styles.ft__nav__inline].join(" ") }>
                            <Link to="" className={styles.ft__nav__link}>Twitter</Link>
                            <Link to="" className={styles.ft__nav__link}>Facebook</Link>
                            <Link to="" className={styles.ft__nav__link}>Instagram</Link> 
                            <Link to="" className={styles.ft__nav__link}>Youtube</Link> 
                            <Link to="" className={styles.ft__nav__link}>LinkedIn</Link>
                        </nav>
                    </div>
                </div>
                
                {/* group 3*/}
                <div class={ [styles.ft__group, styles.ft__group__alt].join(" ") }>
                    <p class={styles.ft__text}>&copy Flutterwave</p>

                    <nav class={ [styles.ft__nav, styles.ft__nav__inline].join(" ") }>
                        <Link to="" className={styles.ft__nav__link}>Privacy policy</Link> 
                        <Link to="" className={styles.ft__nav__link}>Terms of use</Link>
                        <Link to="" className={styles.ft__nav__link}>Cookie policy</Link>
                        <Link to="" className={styles.ft__nav__link}>Merchant service agreement</Link> 
                    </nav> 
                </div>
            </div>
    </footer>
  )
}

export default Footer;