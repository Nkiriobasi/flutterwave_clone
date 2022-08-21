import React from 'react';
import { images } from '../../constants';
import './Businesses.scss';

const Businesses = () => {
  return (
    <section className='section section__businesses w-full h-auto'>
        <div className="businesses__wrapper">
            <div>
                <p className="businesses__intro mb-5 font-medium">Wea are trusted by <b>1 Million+</b> businesses</p>
                <div className="businesses__list flex items-center flex-wrap justify-start">
                    <div className="flex-initial py-5 md:px-6 px-5">
                        <img src={images.uber} alt="uber logo" className="business__logo block" />
                    </div>
                    <div className="flex-initial py-5 md:px-6 px-5">
                        <img src={images.mtn} alt="mtn logo" className="business__logo block" />
                    </div>
                    <div className="flex-initial py-5 md:px-6 px-5">
                        <img src={images.chipper} alt="chipper logo" className="business__logo block" />
                    </div>
                    <div className="flex-initial py-5 md:px-6 px-5">
                        <img src={images.piggyvest} alt="piggyvest logo" className="business__logo block" />
                    </div>
                    <div className="flex-initial py-5 md:px-6 px-5">
                        <img src={images.wise} alt="" className="business__logo block" />
                    </div>
                    <div className="flex-initial py-5 md:px-6 px-5">
                        <img src={images.microsoft} alt="" className="business__logo block" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Businesses;