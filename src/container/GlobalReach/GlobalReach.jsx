import React from 'react';
import './GlobalReach.scss';
import { images } from '../../constants';
import { Link } from 'react-router-dom';

const GlobalReach = () => {
  return (
    <section className='section global-reach'>
        <div className="wrapper">
            <h2 className="h1 global-reach__h1">Our <span className="c-pp"> global </span> reach</h2>

            <div className="grid">
                <div className="grid__section">
                    <div className="stats">
                        <div className="stat">
                            <h5 className="stat__heading">
                                <Link to="/flutterwave-support" className="link">30+ Currencies</Link>
                            </h5> 
                            <p className="stat__info">We accept payments in more than thirty currencies.</p>  
                        </div> 

                        <div className="stat">
                            <h5 className="stat__heading">20M+ API calls</h5> 
                            <p className="stat__info">API calls per day, peaking at 231 requests per second.</p>
                        </div> 

                        <div className="stat">
                            <h5 className="stat__heading">500k+ payments daily</h5> 
                            <p className="stat__info">Average number of payments processed daily.</p>
                        </div>

                        <div className="stat">
                            <h5 className="stat__heading">15+ payment options</h5> 
                            <ul className="stat__list">
                                <li>Debit &amp; Credit cards</li>
                                <li>Bank Account</li>
                                <li>Mobile money</li>
                                <li>POS</li>
                                <li>M-Pesa</li>
                                <li>VISA QR</li>
                                <li>Bank Transfer</li>
                                <li>USSD</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="grid__section">
                    <div className='globe'>
                        <img src={images.globalReach} alt="map" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default GlobalReach;