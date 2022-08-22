import React from 'react';
import { images } from '../../constants';
import './Customers.scss';

const Customers = () => {
  return (
    <section className='section__customers'>
        <div className="customers__wrapper">

            <div className="customer__grid gap-x-16">
                <div className="customer__grid-section flex-auto md:w-7/12 w-full">
                    <div>
                        <figure className='customer block overflow-hidden relative'>
                            <img src={images.microsoftImg} alt="microsoft" className='customer__img1 w-full block' />
                            <figcaption className='customer__name text-white absolute bottom-6 right-6 font-medium text-2xl leading-tight'>Microsoft</figcaption>
                        </figure>
                    </div>
                </div>

                <div className="customer__grid-section2 flex-auto md:w-5/12 w-full">
                    <div>
                        <figure className='customer block overflow-hidden relative'>
                            <img src={images.yangaBeauty} alt="yanga beauty" className='customer__img2 w-full block' />
                            <figcaption className='customer__name text-white absolute bottom-6 left-6 font-medium text-2xl leading-tight'>Yanga beauty</figcaption>
                        </figure>
                    </div>

                    <p className="customer__grid-section-text text-xl font-normal">
                        It's not the size of the company, it's the size of the ambition. Ambitious 
                        businesses of all sizes count on Flutterwave to grow their business everywhere.
                    </p>
                </div>
            </div>

        </div>
    </section>
  );
}

export default Customers;