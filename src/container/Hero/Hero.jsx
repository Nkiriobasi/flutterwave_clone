import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';


const Hero = () => {
  return (
    <section className='hero w-full h-auto'>
      <div className="wrapper flex justify-between items-start flex-wrap">

        <div className="hero__info">
          <h4 className="hero__heading font-medium">
            <span className="c-or">Endless possibilities</span> for every business
          </h4>
          <p className="hero__sub-heading font-normal mb-10 leading-8">
            Sell online, process payments, build financial products, 
            or use business tools designed to grow <br /> your business.
          </p>

          <div className="hero__ctas flex items-center justify-start">
            <div className="hero__cta">
              <Link to='/signup' className='btn btn-primary btn-md mr-5'>
                <span className="btn__label">Create a free account</span>
              </Link>
              <Link to='/contact-sales' className='btn btn-secondary btn-md'>
                <span className="btn__label">Contact Sales</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;