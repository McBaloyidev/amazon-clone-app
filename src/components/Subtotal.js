import React from "react";
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import ShoppingContext from "../context/shopping/shoppingContext";
import { useContext } from "react";

const Subtotal = () => {
  const history = useHistory();
  const shoppingContext = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContext;
  
  return (
    <div className="subtotal">
      <CurrencyFormat
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        prefix={"$"}
        renderText={(formattedValue) => (
          <>
            <p>
              Subtotal ({basket?.length} items):{" "}
              <strong>{formattedValue}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
