import React, { useState} from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import { images } from '../../constants';
import { FaFontAwesomeFlag, FaCcVisa, FaPiedPiperSquare, FaShopify, FaClipboardCheck, FaScroll } from "react-icons/fa";

const Header = () => {
    const [isOpen, setIsOpen] = useState("false");

    const handleClick = () => {
        setIsOpen(active => !active);
    };


  return (
    <header className='hd'>
        <nav className={`hd__nav wrapper ${isOpen ?  '' : 'open'}`}>
            {/* firstchild */}
            <div className="hd__nav__top">
                <Link to="/"><img src={images.full} alt="logo" className='hd__nav__logo' /></Link>

                <div className="hd__nav__toggler" onClick={handleClick}>
                    <span className="hd__nav__toggler-icon"></span>
                    <span className="hd__nav__toggler-icon"></span>
                </div>
            </div>
            
            
            {/* secondchild */}
            <ul className={`hd__nav__list text-sm font-medium ${isOpen ?  '' : 'open'}`}>
                {/* listItem1 */}
                <li className="hd__nav__item has-menu cursor-pointer">
                    <span className="hd__nav__label py-2.5 px-3">Payments</span>
                    <ul className="hd__nav__dropdown">
                        <li className="hd__nav__dropdown__item h-1/3 w-full">
                            <Link to='/collect-payments' className='hd__nav__link flex justify-start items-start py-2.5 px-2.5'>
                                <div className='mr-2.5 bg-pink-100 rounded-xl p-2'><FaFontAwesomeFlag className='hd__nav__link__icon w-6 h-6' /></div>
                                <span className="hd__nav__link__info flex flex-col justify-start items-stretch flex-auto">
                                    <span className='hd__nav__link__title font-bold mb-1.5'>Collect payments</span>
                                    <span className='hd__nav__link__desc font-medium'>Collect payments in 30+ currencies</span>
                                </span>
                            </Link>
                        </li>
                        <li className="hd__nav__dropdown__item h-1/3 w-full">
                            <Link to='/send-money' className='hd__nav__link flex justify-start items-start py-2.5 px-2.5'>
                                <div className='mr-2.5 bg-blue-100 rounded-xl p-2'><FaCcVisa className='hd__nav__link__icon w-6 h-6' /></div>
                                <span className="hd__nav__link__info flex flex-col justify-start items-stretch flex-auto">
                                    <span className='hd__nav__link__title font-bold mb-1.5'>Send money</span>
                                    <span className='hd__nav__link__desc font-medium'>Send money to anyone or business globally.</span>
                                </span>
                            </Link>
                        </li>
                        <li className="hd__nav__dropdown__item h-1/3 w-full">
                            <Link to='/checkout' className='hd__nav__link flex justify-start items-start py-2.5 px-2.5'>
                                <div className='mr-2.5 bg-pink-100 rounded-xl p-2'><FaPiedPiperSquare className='hd__nav__link__icon w-6 h-6' /></div>
                                <span className="hd__nav__link__info flex flex-col justify-start items-stretch flex-auto">
                                    <span className='hd__nav__link__title font-bold mb-1.5'>Checkout demo</span>
                                    <span className='hd__nav__link__desc font-medium'>Experience checkout yourself</span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </li>
                
                {/* listItem2 */}
                <li className="hd__nav__item has-menu cursor-pointer">
                    <span className="hd__nav__label py-2.5 px-3">Commerce</span>
                    <ul className="hd__nav__dropdown">
                        <li className="hd__nav__dropdown__item h-1/3 w-full">
                            <Link to='/store' className='hd__nav__link flex justify-start items-start py-2.5 px-2.5'>
                                <div className='mr-2.5 bg-green-100 rounded-xl p-2'><FaShopify className='hd__nav__link__icon w-6 h-6' /></div>
                                <span className="hd__nav__link__info flex flex-col justify-start items-stretch flex-auto">
                                    <span className='hd__nav__link__title font-bold mb-1.5'>Store</span>
                                    <span className='hd__nav__link__desc font-medium'>Start selling online.</span>
                                </span>
                            </Link>
                        </li>
                        <li className="hd__nav__dropdown__item h-1/3 w-full">
                            <Link to='/payment-links' className='hd__nav__link flex justify-start items-start py-2.5 px-2.5'>
                                <div className="mr-2.5 bg-pink-100 rounded-xl p-2"><FaClipboardCheck className='hd__nav__link__icon w-6 h-6' /></div>
                                <span className="hd__nav__link__info flex flex-col justify-start items-stretch flex-auto">
                                    <span className='hd__nav__link__title font-bold mb-1.5'>Payment Links</span>
                                    <span className='hd__nav__link__desc font-medium'>Accept payments without writing code.</span>
                                </span>
                            </Link>
                        </li>
                        <li className="hd__nav__dropdown__item h-1/3 w-full">
                            <Link to='/invoices' className='hd__nav__link flex justify-start items-start py-2.5 px-2.5'>
                                <div className="mr-2.5 bg-pink-100 rounded-xl p-2"><FaScroll className='hd__nav__link__icon w-6 h-6' /></div>
                                <span className="hd__nav__link__info flex flex-col justify-start items-stretch flex-auto">
                                    <span className='hd__nav__link__title font-bold mb-1.5'>Invoices</span>
                                    <span className='hd__nav__link__desc font-medium'>Create professional invoices</span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </li>
                
                {/* listItem3 */}
                <li className="hd__nav__item nav-item-diff">
                    <Link to='/card-issuing' className='hd__nav__link py-2.5 px-3'>
                        <span className="hd__nav__link__info nav-info-diff">
                            <span className='hd__nav__link__title'>Issuing</span>
                            <span className='hd__nav__link__desc font-medium'>Issue phyiscal & virtual cards</span>
                        </span>
                    </Link>
                </li>

                {/* listItem4 */}
                <li className="hd__nav__item nav-item-diff">
                    <Link to='/capital' className='hd__nav__link py-2.5 px-3'>
                        <span className="hd__nav__link__info nav-info-diff">
                            <span className='hd__nav__link__title'>Capital</span>
                            <span className="hd__nav__link__desc font-medium">Get quick access to flexible loans to grow your business.</span>
                        </span>
                    </Link>
                </li>

                {/* listItem5 */}
                <li className="hd__nav__item nav-item-diff">
                    <Link to='/grow' className='hd__nav__link py-2.5 px-3'>
                        <span className="hd__nav__link__info nav-info-diff">
                            <span className='hd__nav__link__title'>Grow</span>
                            <span className="hd__nav__link__desc font-medium">Register &amp; incorporate your business from anywhere</span>
                        </span>
                    </Link>
                </li>

                {/* listItem6 */}
                <li className="hd__nav__item nav-item-diff">
                    <Link to='/faas' className='hd__nav__link py-2.5 px-3'>
                        <span className="hd__nav__link__info nav-info-diff">
                            <span className='hd__nav__link__title'>FaaS</span>
                            <span className="hd__nav__link__desc">Embed financial services into your product</span>
                        </span>
                    </Link>
                </li>
            </ul>

            
            {/* thirdchild */}
            <ul className={`hd__nav__list hd__nav__list-right ${isOpen ?  '' : 'open'}`}>
                <li className="hd__list__item">
                    <Link to='/login' className='hd__nav__link pill rounded-xl inline-flex text-xs leading-tight font-medium'>Sign In</Link>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;