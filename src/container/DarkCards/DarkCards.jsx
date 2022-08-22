import React from 'react';
import './DarkCards.scss';
import { Link } from 'react-router-dom';

const DarkCards = () => {
  return (
    <section className='section__dark-card'>
        <div className="dark-card__wrapper">
            <h2 className="h1 dark-card__h1">
                Create physical and virtual
                <span className="c-pp"> cards </span>
            </h2>
            <p className="p dark-card__p">
                Issue physical and virtual cards that work globally. 
                Create, launch, and manage your cards easily from anywhere.
            </p>
            <Link to="/card-issuing" className="btn btn-secondary btn-lg mb-16">
                <span className="btn__label">Get started with cards </span>
            </Link>

            <div className="sliding-card">
                <div className="card">
                    <h6 className="card__title">Better Business Expense management</h6>
                    <p className="card__description">
                        You can issue cards for specific business purposes so you can 
                        better manage your expenses. An example of a business expense 
                        you’re able to better manage now is your Instagram ad. You’re 
                        able to issue a specific virtual card for all your Instagram 
                        ads to better manage and account for that expense within your business.
                    </p>
                </div>
                <div className="card">
                    <h6 className="card__title">New revenue lines</h6>  
                    <p className="card__description">
                        You can issue a physical bank card to an employee or even a 
                        trusted merchant at your local market to make the purchases 
                        for you. Every time you have an order, you’re able to fund 
                        that card so they can purchase it and send it to you for 
                        delivery to your customer. The possibilities are endless.
                    </p>
                </div>
                <div className="card">
                    <h6 className="card__title">Seamless Business Organization</h6>
                    <p className="card__description">
                        Reduce the friction of expense management by ditching 
                        the old ways of obtaining expense approvals. Use Flutterwave 
                        Issuing to issue cards to the teams within your organization. 
                        A physical card for your procurement team, for instance, would 
                        help to speed up their execution while providing you with a 
                        birds-eye view of your overall spending.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default DarkCards;