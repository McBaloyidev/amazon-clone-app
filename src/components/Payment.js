import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShoppingContext from "../context/shopping/shoppingContext";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";

const Payment = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(false);

  useEffect(() => {
    //Generate the special stripe which will allow us to charge the customer
    
  })

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout <Link to="/checkout">{basket?.length} items</Link>
          
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 ReactJS Road</p>
            <p>Cape Town, SA</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review itmes and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((basketItem) => {
              const { id, image, title, rating, price } = basketItem;
              return (
                <CheckoutProduct
                  key={id}
                  id={id}
                  title={title}
                  image={image}
                  price={price}
                  rating={rating}
                />
              );
            })}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">{/*Stripe code will go here*/}</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
