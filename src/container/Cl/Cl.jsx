import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import './Cl.scss';


const Cl = () => {
  return (
    <section className='cl'>
        <div className="wrapper cl__wrapper">

            <div className="cl__box">
                <h4 className="cl__heading">Ready to get started?</h4>
                <p className="cl__sub-heading">
                    Create an account and instantly start accepting payments, 
                    selling your beautiful products online and building financial tools.
                </p>
                <div className="cl__ctas flex justify-start items-center flex-wrap"> 
                    <div className="cl__cta">
                        <Link to="/contact-sales" className="btn btn-inline text-white">
                            <span className="btn__label">Contact sales</span> 
                            <FaChevronRight className='btn__icon mt-0.5' />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
}

export default Cl;