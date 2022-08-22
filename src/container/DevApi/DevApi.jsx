import React from 'react';
import { Link } from 'react-router-dom';
import './DevApi.scss';

const DevApi = () => {
  return (
    <section className='section__api'>
        <div className="wrapper">
            <h2 className="h1 api__h1">
                Well documented and easy-to-use<span className="c-dark-pk"> APIs </span>
                for <span className="c-dark-pk"> developers </span>
            </h2>
            <p className="p api__p">
                We have done the core payments integrations and abstractions, 
                so your team can easily integrate with our APIs and access 
                multiple payment functionalities.
            </p>
            <ul className="ul">
                <li>Quick transfers</li>
                <li>Initiate one-time and recurring payments</li>
                <li>Payment verification</li>
                <li>Instant virtual cards creation</li>
                <li>Customer verification</li>
            </ul>
            <Link to="/api-docs" className="btn btn-primary btn-lg">
                <span className="btn__label">Read the API docs</span>
            </Link>
        </div>
    </section>
  );
}

export default DevApi;