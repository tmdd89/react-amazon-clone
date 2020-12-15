import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import "./Subtotal.css";

function Subtotal() {
  const [{ basket }] = useStateValue();
  console.log(getBasketTotal(basket));

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items):
        <span className="subtotal__price">
          &nbsp;
          <CurrencyFormat
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"CDN$ "}
          />
        </span>
      </p>
      <span className="subtotal__gift">
        <input type="checkbox" />
        &nbsp;This order contains a gift
      </span>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
