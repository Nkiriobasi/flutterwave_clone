import React, { useState } from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import { images } from '../../constants';




const Footer = () => {
    // toggle isOpen state variable
    const [isOpen1, setIsOpen1] = useState("false");
    const [isOpen2, setIsOpen2] = useState("false");
    const [isOpen3, setIsOpen3] = useState("false");
    const [isOpen4, setIsOpen4] = useState("false");
    const [isOpen5, setIsOpen5] = useState("false");
    const [isOpen6, setIsOpen6] = useState("false");
    const [isOpen7, setIsOpen7] = useState("false");
    
    // toggler for location inserting location
    const [isVisible, setIsVisible] = useState("false");
    
    

    
    // toggle isOpen state variable
    const handleClick1 = () => {
        setIsOpen1(active => !active);
    };
    const handleClick2 = () => {
        setIsOpen2(active => !active);
    };
    const handleClick3 = () => {
        setIsOpen3(active => !active);
    }
    const handleClick4 = () => {
        setIsOpen4(active => !active);
    }
    const handleClick5 = () => {
        setIsOpen5(active => !active);
    }
    const handleClick6 = () => {
        setIsOpen6(active => !active);
    }
    const handleClick7 = () => {
        setIsOpen7(active => !active);
    }


    // toggler for location inserting location
    const handleVisibleClick = event => {
        setIsVisible(active => !active);
    }
    
    


  return (
    <footer className='ft'>
        <div className="wrapper">
            {/* ft-group1 */}
            <div className="ft__group">
                <div className={`ft__section ${isOpen1 ?  '' : 'is-open'}`}>
                    <div className="ft__section__head">
                        <h6 className="ft__section__title">Products</h6>
                        <FaAngleDown className='ft__section__icon' onClick={handleClick1} />
                    </div>
                    <nav className="ft__nav">
                        <Link to="/collect-payments" className="ft__nav__link">Collect Payments</Link> 
                        <Link to="/send-money" className="ft__nav__link">Send Money</Link> 
                        <Link to="/store" className="ft__nav__link">Store</Link> 
                        <Link to="/payment-links" className="ft__nav__link">Payment Links</Link> 
                        <Link to="/invoices" className="ft__nav__link">Invoices</Link> 
                        <Link to="/capital" className="ft__nav__link">Capital</Link> 
                        <Link to="/grow" className="ft__nav__link">Grow</Link> 
                        <Link to="/card-issuing" className="ft__nav__link">Card Issuing</Link> 
                        <Link to="/faas" className="ft__nav__link">FaaS</Link>
                    </nav>
                </div>
                <div className={`ft__section ${isOpen2 ?  '' : 'is-open'}`}>
                    <div className="ft__section__head">
                        <h6 className="ft__section__title">Resources</h6>
                        <FaAngleDown className='ft__section__icon' onClick={handleClick2} />
                    </div>
                    <nav className="ft__nav">
                        <Link to="/pricing" className="ft__nav__link">Pricing</Link> 
                        <Link to="/flutterwave-support" className="ft__nav__link">Support</Link> 
                        <Link to="/blog" className="ft__nav__link">Blog</Link> 
                        <Link to="/integrations" className="ft__nav__link">Integrations</Link> 
                        <Link to="/flutterwave-dispute" className="ft__nav__link">Why you got charged</Link>
                    </nav>
                </div>
                <div className={`ft__section ${isOpen3 ?  '' : 'is-open'}`}>
                    <div className="ft__section__head">
                        <h6 className="ft__section__title">Developers</h6>
                        <FaAngleDown className='ft__section__icon' onClick={handleClick3} />
                    </div>
                    <nav className="ft__nav">
                        <Link to="/flutterwave-docs" className="ft__nav__link">API Documentation</Link> 
                        <Link to="/flutterwave-reference" className="ft__nav__link">API Reference</Link> 
                        <Link to="/flutterwave-status" className="ft__nav__link ft__nav__link--status">API Status</Link>
                    </nav>
                </div>
                <div className={`ft__section ${isOpen4 ?  '' : 'is-open'}`}>
                    <div className="ft__section__head">
                        <h6 className="ft__section__title">Flutterwave</h6>
                        <FaAngleDown className='ft__section__icon' onClick={handleClick4} />
                    </div>
                    <nav className="ft__nav">
                        <Link to="/customers" className="ft__nav__link">Customers</Link> 
                        <Link to="/careers" className="ft__nav__link">Careers</Link> 
                        <Link to="/press-kit" className="ft__nav__link">Press kit</Link> 
                        <Link to="/covid19" className="ft__nav__link">Covid 19</Link> 
                        <Link to="/barter.me" className="ft__nav__link">Barter</Link> 
                        <Link to="/disha.ng" className="ft__nav__link">Disha</Link> 
                        <Link to="/send" className="ft__nav__link">Send</Link>
                    </nav>
                </div>
                <div className={`ft__section ${isOpen5 ?  '' : 'is-open'}`}>
                    <div className="ft__section__head">
                        <h6 className="ft__section__title">Contact</h6>
                        <FaAngleDown className='ft__section__icon' onClick={handleClick5} />
                    </div>
                    <nav className="ft__nav">
                        <Link to="mailto:norris@flutterwavego.com" className="ft__nav__link">norris@flutterwavego.com</Link> 
                        <Link to="mailto:hi@flutterwavego.com" className="ft__nav__link">hi@flutterwavego.com</Link> 
                        <Link to="https://twitter.com/flwsupport" className="ft__nav__link">Twitter Support</Link>
                    </nav>
                </div>
            </div>

            
            {/* ft-group2 */}
            <div className="ft__group ft__group-alt">
                <div className="ft__section">
                    <div className="location">
                        <button className="location__toggler" onClick={handleVisibleClick}>
                            <img src={images.ng} alt="Nigeria flag" className="location__flag" />
                            <span className="location__name">Nigeria</span>
                            <FaAngleDown className='location__toggler__icon' />
                        </button>

                        <div className={`location__dropdown ${isVisible ? '' : 'visible'}`}>
                            <ul className="location__dropdown-list">
                                <li className="location__dropdown-item">
                                    <button className='country'>
                                        <img src={images.cm} alt="Cameroon flag" className="country__flag" />
                                        <span className="country__name">Cameroon</span>
                                    </button>
                                </li>
                                <li className="location__dropdown-item">
                                    <button className='country'>
                                        <img src={images.gh} alt="Ghana flag" className="country__flag" />
                                        <span className="country__name">Ghana</span>
                                    </button>
                                </li>
                                <li className="location__dropdown-item">
                                    <button className='country'>
                                        <img src={images.ci} alt="Ivory Coast flag" className="country__flag" />
                                        <span className="country__name">Ivory Coast</span>
                                    </button>
                                </li>
                                <li className="location__dropdown-item">
                                    <button className='country'>
                                        <img src={images.ke} alt="Kenya flag" className="country__flag" />
                                        <span className="country__name">Kenya</span>
                                    </button>
                                </li>
                                <li className="location__dropdown-item">
                                    <button className='country'>
                                        <img src={images.mw} alt="Malawi flag" className="country__flag" />
                                        <span className="country__name">Malawi</span>
                                    </button>
                                </li>
                                <li className="location__dropdown-item">
                                    <button className='country'>
                                        <img src={images.mu} alt="Mauritius flag" className="country__flag" />
                                        <span className="country__name">Mauritius</span>
                                    </button>
                                </li>
                                <li className="location__dropdown-item">
                                    <button className='country'>
                                        <img src={images.ng} alt="Nigeria flag" className="country__flag" />
                                        <span className="country__name">Nigeria</span>
                                    </button>
                                </li>
                                <li className="location__dropdown-item">
                                    <button className='country'>
                                        <img src={images.eu} alt="Rest of europe flag" className="country__flag" />
                                        <span className="country__name">Rest of Europe</span>
                                    </button>
                                </li>
                                <li className="location__dropdown-item">
                                    <button className='country'>
                                        <img src={images.rw} alt="Rwanda flag" className="country__flag" />
                                        <span className="country__name">Rwanda</span>
                                    </button>
                                </li>
                                <li className="location__dropdown-item">
                                    <button className='country'>
                                        <img src={images.za} alt="South Africa flag" className="country__flag" />
                                        <span className="country__name">South Africa</span>
                                    </button>
                                </li>
                                <li className="location__dropdown-item">
                                    <button className='country'>
                                        <img src={images.tz} alt="Tanzania flag" className="country__flag" />
                                        <span className="country__name">Tanzania</span>
                                    </button>
                                </li>
                                <li className="location__dropdown-item">
                                    <button className='country'>
                                        <img src={images.ug} alt="Uganda flag" className="country__flag" />
                                        <span className="country__name">Uganda</span>
                                    </button>
                                </li>
                                <li className="location__dropdown-item">
                                    <button className='country'>
                                        <img src={images.gb} alt="United kingdom flag" className="country__flag" />
                                        <span className="country__name">United Kingdom</span>
                                    </button>
                                </li>
                                <li className="location__dropdown-item">
                                    <button className='country'>
                                        <img src={images.us} alt="United States flag" className="country__flag" />
                                        <span className="country__name">United States</span>
                                    </button>
                                </li>
                                <li className="location__dropdown-item">
                                    <button className='country'>
                                        <img src={images.zm} alt="Zambia flag" className="country__flag" />
                                        <span className="country__name">Zambia</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`ft__section ${isOpen6 ?  '' : 'is-open'}`}>
                    <div className="ft__section__head mobile-only">
                        <h6 className="ft__section__title">Connect</h6>
                        <FaAngleDown className='ft__section__icon' onClick={handleClick6} />
                    </div>
                    <nav className="ft__nav ft__nav-inline">
                        <a href="https://twitter.com/theflutterwave" className="ft__nav__link">Twitter</a> 
                        <a href="https://www.facebook.com/theFlutterwave/" className="ft__nav__link">Facebook</a> 
                        <a href="https://www.instagram.com/theflutterwave/" className="ft__nav__link">Instagram</a> 
                        <a href="https://www.youtube.com/channel/UCBIAbIysVyppFIiQP9CV-zQ" className="ft__nav__link">YouTube</a> 
                        <a href="https://www.linkedin.com/company/flutterwave/" className="ft__nav__link">LinkedIn</a>
                    </nav>
                </div>
            </div>


            {/* ft-group3 */}
            <div className="ft__group ft__group-alt">
                <div className="ft__section">
                    <p className="ft__text">© Flutterwave</p>
                </div>
                <div className={`ft__section ${isOpen7 ?  '' : 'is-open'}`}>
                    <div className="ft__section__head mobile-only">
                        <h6 className="ft__section__title">Legal</h6>
                        <FaAngleDown className='ft__section__icon' onClick={handleClick7} />
                    </div>
                    <nav className="ft__nav ft__nav-inline">
                        <a href="/privacy-policy" className="ft__nav__link">Privacy policy</a> 
                        <a href="/terms" className="ft__nav__link">Terms of use</a> 
                        <a href="/cookies-policy" className="ft__nav__link">Cookie policy</a> 
                        <a href="/merchant-service-agreement" className="ft__nav__link">Merchant service agreement</a> 
                        <a href="/payment-protection-promise" className="ft__nav__link">Payment protection promise</a>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;