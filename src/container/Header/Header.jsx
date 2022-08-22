import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import { images } from '../../constants';
import { FaEquals, FaTimes, FaFontAwesomeFlag, FaCcVisa, FaPiedPiperSquare, FaShopify, FaClipboardCheck, FaScroll } from "react-icons/fa";

const Header = () => {
  return (
    <header className='hd'>
        <nav className='hd__nav wrapper'>
            {/* firstchild */}
            <div className="hd__nav__top flex flex-row items-center justify-between">
                <Link to="/"><img src={images.full} alt="logo" className='hd__nav__logo' /></Link>
                <button className="hd__nav__toggler">
                    <FaEquals className='toggler-equal text-2xl' />
                    <FaTimes className='toggler-times text-2xl hidden' />
                </button>
            </div>
            
            
            {/* secondchild */}
            <ul className="hd__nav__list inline-flex items-center justify-start text-sm font-medium">
                {/* listItem1 */}
                <li className="hd__nav__item has-menu mr-4 cursor-pointer">
                    <span className="hd__nav__label py-2.5 px-3">Payments</span>
                    <ul className="hd__nav__dropdown">
                        <li className="hd__nav__dropdown__item h-1/3 w-full">
                            <Link to='/collect-payments' className='hd__nav__link flex justify-start items-start py-2.5 px-2.5'>
                                <div className='mr-2.5'><FaFontAwesomeFlag className='hd__nav__link__icon w-10 h-10' /></div>
                                <span className="hd__nav__link__info flex flex-col justify-start items-stretch flex-auto">
                                    <span className='hd__nav__link__title font-semibold mb-1.5'>Collect payments</span>
                                    <span className='hd__nav__link__desc font-normal text-xs'>Collect payments in 30+ currencies</span>
                                </span>
                            </Link>
                        </li>
                        <li className="hd__nav__dropdown__item h-1/3 w-full">
                            <Link to='/send-money' className='hd__nav__link flex justify-start items-start py-2.5 px-2.5'>
                                <div className='mr-2.5'><FaCcVisa className='hd__nav__link__icon w-10 h-10' /></div>
                                <span className="hd__nav__link__info flex flex-col justify-start items-stretch flex-auto">
                                    <span className='hd__nav__link__title font-semibold mb-1.5'>Send money</span>
                                    <span className='hd__nav__link__desc font-normal text-xs'>Send money to anyone or business globally.</span>
                                </span>
                            </Link>
                        </li>
                        <li className="hd__nav__dropdown__item h-1/3 w-full">
                            <Link to='/checkout' className='hd__nav__link flex justify-start items-start py-2.5 px-2.5'>
                                <div className='mr-2.5'><FaPiedPiperSquare className='hd__nav__link__icon w-10 h-10' /></div>
                                <span className="hd__nav__link__info flex flex-col justify-start items-stretch flex-auto">
                                    <span className='hd__nav__link__title font-semibold mb-1.5'>Checkout demo</span>
                                    <span className='hd__nav__link__desc font-normal text-xs'>Experience checkout yourself</span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </li>
                
                {/* listItem2 */}
                <li className="hd__nav__item has-menu mr-4 cursor-pointer">
                    <span className="hd__nav__label py-2.5 px-3">Commerce</span>
                    <ul className="hd__nav__dropdown">
                        <li className="hd__nav__dropdown__item h-1/3 w-full">
                            <Link to='/store' className='hd__nav__link flex justify-start items-start py-2.5 px-2.5'>
                                <div className='mr-2.5'><FaShopify className='hd__nav__link__icon w-10 h-10' /></div>
                                <span className="hd__nav__link__info flex flex-col justify-start items-stretch flex-auto">
                                    <span className='hd__nav__link__title font-semibold mb-1.5'>Store</span>
                                    <span className='hd__nav__link__desc font-normal text-xs'>Start selling online.</span>
                                </span>
                            </Link>
                        </li>
                        <li className="hd__nav__dropdown__item h-1/3 w-full">
                            <Link to='/payment-links' className='hd__nav__link flex justify-start items-start py-2.5 px-2.5'>
                                <div className="mr-2.5"><FaClipboardCheck className='hd__nav__link__icon w-10 h-10' /></div>
                                <span className="hd__nav__link__info flex flex-col justify-start items-stretch flex-auto">
                                    <span className='hd__nav__link__title font-semibold mb-1.5'>Payment Links</span>
                                    <span className='hd__nav__link__desc font-normal text-xs'>Accept payments without writing code.</span>
                                </span>
                            </Link>
                        </li>
                        <li className="hd__nav__dropdown__item h-1/3 w-full">
                            <Link to='/invoices' className='hd__nav__link flex justify-start items-start py-2.5 px-2.5'>
                                <div className="mr-2.5"><FaScroll className='hd__nav__link__icon w-10 h-10' /></div>
                                <span className="hd__nav__link__info flex flex-col justify-start items-stretch flex-auto">
                                    <span className='hd__nav__link__title font-semibold mb-1.5'>Invoices</span>
                                    <span className='hd__nav__link__desc font-normal text-xs'>Create professional invoices</span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </li>
                
                {/* listItem3 */}
                <li className="hd__nav__item mr-4">
                    <Link to='/card-issuing' className='hd__nav__link py-2.5 px-3'>
                        <span className="hd__nav__link__info">
                            <span className='hd__nav__link__title'>Issuing</span>
                            <span className='hd__nav__link__desc hidden'>Issue phyiscal & virtual cards</span>
                        </span>
                    </Link>
                </li>

                {/* listItem4 */}
                <li className="hd__nav__item mr-4">
                    <Link to='/capital' className='hd__nav__link py-2.5 px-3'>
                        <span className="hd__nav__link__info">
                            <span className='hd__nav__link__title'>Capital</span>
                            <span className="hd__nav__link__desc hidden">Get quick access to flexible loans to grow your business.</span>
                        </span>
                    </Link>
                </li>

                {/* listItem5 */}
                <li className="hd__nav__item mr-4">
                    <Link to='/grow' className='hd__nav__link py-2.5 px-3'>
                        <span className="hd__nav__link__info">
                            <span className='hd__nav__link__title'>Grow</span>
                            <span className="hd__nav__link__desc hidden">Register &amp; incorporate your business from anywhere</span>
                        </span>
                    </Link>
                </li>

                {/* listItem6 */}
                <li className="hd__nav__item">
                    <Link to='/faas' className='hd__nav__link py-2.5 px-3'>
                        <span className="hd__nav__link__info">
                            <span className='hd__nav__link__title'>FaaS</span>
                            <span className="hd__nav__link__desc hidden">Embed financial services into your product</span>
                        </span>
                    </Link>
                </li>
            </ul>

            
            {/* thirdchild */}
            <ul className="hd__nav__list hd__nav__list--right inline-flex items-center justify-start">
                <li className="hd__list__item">
                    <Link to='/login' className='hd__nav__link pill rounded-xl inline-flex text-xs leading-tight font-medium'>Sign In</Link>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;