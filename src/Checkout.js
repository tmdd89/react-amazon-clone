import React from 'react';
import './Checkout.css';
import { useStateValue } from "./StateProvider";


function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
             <div className="checkout__ad">
                <img className="checkout__ad-img" src="https://images-na.ssl-images-amazon.com/images/G/15/gift-certificates/consumer/2020/MAPLE/Maple_144x80_B06W5SBSL7._CB421841709_.jpg" alt="ad"/>
                
                <div className="checkout_ad-text">
                    <span>
                        Get a 
                        <strong>$5 credit</strong>
                    </span>
                    <p>when you purchase $25 or more in Amazon Gift Cards (restrictions apply)</p>
                </div>
                <button className="checkout__ad-btn">Learn More</button>
             </div>
        </div>
    )
}

export default Checkout
