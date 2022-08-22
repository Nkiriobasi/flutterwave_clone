import React from 'react';
import './Commerce.scss';
import { Link } from 'react-router-dom';
import { images } from '../../constants';
import { FaChevronRight } from "react-icons/fa";


const Commerce = () => {
  return (
    <section className='section__commerce'>
        <div className="commerce__wrapper">
            <h2 className="h1 commerce__h1">
                Build a successful online business with our
                <span className="c-gr"> <br /> Commerce tools. </span>
            </h2>

            <div className="commerce-feature">
                {/* grid1 */}
                <div className="grid">
                    <div className="grid__section">
                        <div className="feature">
                            <h6 className="feature__title">Store</h6> 
                            <p className="feature__description">
                                Create a free ecommerce website and start 
                                selling worldwide with just a few clicks.
                            </p> 
                            <Link to="/store" className="btn btn-primary btn-sm">
                                <span className="btn__label">Start selling</span>
                            </Link>
                        </div>
                    </div>
                    <div className="grid__section">
                        <div>
                            <figure className='figure figure-1'>
                                <img src={images.yangaBeauty} alt="creator" className='h-full object-cover block' />
                            </figure>
                        </div>
                    </div>
                </div>

                {/* grid2 */}
                <div className="grid">
                    <div className="grid__section">
                        <div>
                            <figure className='figure figure-2'>
                                <img src={images.soloArtistImg} alt="creator" className='h-full object-cover block' />
                                <figcaption className="figure__caption mt-5 text-lg text-center">
                                    A platform for you, whether you’re a big business or a <span className="c-gr">solo artist.</span>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="grid__section">
                        <div className="feature mb-24">
                            <h6 className="feature__title">Invoices</h6>
                            <p className="feature__description">
                                Generate professional invoices for your customers 
                                and get paid from anywhere.
                            </p>
                            <Link to='/invoices' className='orange btn btn-inline'>
                                <span className="btn__label">Get Started</span>
                                <FaChevronRight className='btn__icon' />
                            </Link>
                        </div>
                        <div className="feature">
                            <h6 className="feature__title">Payment links</h6>
                            <p className="feature__description">
                                Generate professional invoices for your customers 
                                and get paid from anywhere.
                            </p>
                            <Link to='/invoices' className='orange btn btn-inline'>
                                <span className="btn__label">Learn more</span>
                                <FaChevronRight className='btn__icon' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <p className="commerce-p-text">
                Let’s play to our strengths, shall we? You focus on bringing 
                your amazing ideas to life and we focus on providing all the
                <span className="c-gr"> commerce tools </span>
                you need.
            </p>

            <Link to="/store" className="btn btn-primary btn-lg">
                <span className="btn__label">Okay, let’s go</span>
            </Link>
        </div>
    </section>
  );
}

export default Commerce;