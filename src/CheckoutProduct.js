import React from 'react'
import './CheckoutProduct.css';

function CheckoutProduct({ id, title, image, price, rating }) {
    return (
        <div className="checkoutProduct">
            <img src={image} alt={title}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title ">
                    {title}
                </p>

            </div>
        </div>
    )
}

export default CheckoutProduct
