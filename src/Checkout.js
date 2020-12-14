import React from 'react';
import './Checkout.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
             <div className="checkout__ad">
                <img className="checkout__ad-img" src="https://images-na.ssl-images-amazon.com/images/G/15/gift-certificates/consumer/2020/MAPLE/Maple_144x80_B06W5SBSL7._CB421841709_.jpg" alt="ad"/>
                
                <div className="checkout__ad-text">
                    <span>
                        Get a 
                        <strong>$5 credit</strong>
                    </span>
                    <p>when you purchase $25 or more in Amazon Gift Cards (restrictions apply)</p>
                </div>
                <button className="checkout__ad-btn">Learn More</button>
             </div>
             {basket?.length === 0 ? (
                 <div>
                     <h2>Your Amazon cart is empty.</h2>
                     <p>Your shopping cart lives to serve. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.</p> 
                 </div>
             ) : (
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct 
                            item={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            dep={item.dep}
                        />
                    ))}
                </div>
             ) }
        </div>
    )
}

export default Checkout
