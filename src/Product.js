import React from 'react'
import "./Product.css";

function Product({id, title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="product__rating">
                {
                    Array(rating + 1)
                    .fill()
                    .map(() => (
                        <span role='img' aria-label="product rating">⭐</span>
                    ))
                }
            </p>
            </div>
            
            <img src={image} alt="product" />
            <button>Add to basket</button>
        </div>
    )
}

export default Product
