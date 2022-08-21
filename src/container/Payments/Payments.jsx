import React from 'react';
import './Payments.scss';
import { Link } from 'react-router-dom';
import { images } from '../../constants';
import { FaChevronRight } from "react-icons/fa";


const Payments = () => {
  return (
    <section className='section section__payments w-full h-auto'>
        <div className="payments__wrapper">
          <h2 className="h1 payments__h1">A fully unified set of <span className="c-or">payments tools</span></h2>

          <div className="features-grid">
            <div className="features-grid__section">
              <div className="feature">
                <h6 className="feature__title">Checkout</h6>
                <p className="feature__description">
                  Checkout features our smart payment ordering system, 
                  incredible speed, and beautiful simplicity. It's designed 
                  to grow your revenue and provide the best payment experience to your customers.
                </p>
                <Link to='/checkout' className='btn btn-primary btn-sm'>
                  <span className='text-sm'>Get Started</span>
                </Link>
              </div>
            </div>
            
            <div className="features-grid__section media">
              <div>
                <img src={images.checkout} alt="payment phone" className='features-grid__section__img' />
              </div>
            </div>
            
            <div className="features-grid__section">
              <div className="feature">
                <h6 className="feature__title">Accept Payments</h6>
                <p className="feature__description">
                  Easily receive money from anyone, anywhere in the world.
                </p>
                <Link to='/collect-payments' className='orange btn btn-inline'>
                  <span className="btn__label">Learn more</span>
                  <FaChevronRight className='btn__icon' />
                </Link>
              </div>
              <div className="feature">
                <h6 className="feature__title">Transfers (Payout)</h6>
                <p className="feature__description">
                  Make single or bulk transfers to bank accounts from your 
                  Flutterwave dashboard.
                </p>
                <Link to='/send-money' className='orange btn btn-inline'>
                  <span className="btn__label">Learn more</span>
                  <FaChevronRight className='btn__icon' />
                </Link>
              </div>
            </div>
          </div>

        </div>
    </section>
  )
};

export default Payments;