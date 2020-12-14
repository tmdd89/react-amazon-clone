import React from 'react'
import './CheckoutProduct.css';

function CheckoutProduct({ id, title, image, price, rating, dep }) {
    return (
        <div className="checkoutProduct">
            <img src={image} alt={title}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title ">
                    {title}
                </p>
                <p className="checkoutProduct__dep">
                    <span className="bs">#1 Best Seller </span> in {dep}
                </p>
                <span className="checkoutProduct__stock">In Stock</span>
                <p className="checkoutProduct__soldBy">Ships from and sold by Amazon</p>
                <label for="qty">Qty: 1</label>

                <select name="qty" id="qty">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="2">3</option>
                    <option value="4">4</option>
                </select>
            </div>
        </div>
    )
}

export default CheckoutProduct
