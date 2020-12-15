import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from "./StateProvider"; 

function CheckoutProduct({ id, title, image, price, dep, desc }) {
    const [ { basket }, dispatch ] = useStateValue();

    const removeFromBasket = () => {
        //remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt={title}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title ">
                    {`${title} ${desc}`}
                </p>
                <p className="checkoutProduct__dep">
                    <span className="bs">#1 Best Seller </span> in {dep}
                </p>
                <span className="checkoutProduct__stock">In Stock</span>
                <p className="checkoutProduct__soldBy">Ships from and sold by Amazon</p>
                <img src="https://curlydavenport.com/wp-content/uploads/2018/05/Amazon-Prime-Logo-Curly-D-Pink-Coco-300x126.png" alt="" className="checkoutProduct__prime"/>
                <div className="checkoutProduct__select">
                    <label for="qty">Qty: </label>
                    <select name="qty" id="qty">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="2">3</option>
                        <option value="4">4</option>
                    </select>
                    <span className="checkoutProduct__i"> | </span>
                    <span onClick={removeFromBasket}
                    className="checkoutProduct__del"> Delete </span>
                </div>
            </div>
            <p className="checkoutProduct__price">
                    {`CDN$ ${price}`}
            </p>
        </div>
    )
}

export default CheckoutProduct
