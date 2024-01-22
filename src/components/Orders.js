import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import ShoppingContext from "../context/shopping/shoppingContext";
import CheckoutProduct from "./CheckoutProduct";
import "./Orders.css";

const Orders = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { user } = shoppingContext;

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      // Fetch orders from Firestore for the logged-in user
      const unsubscribe = db
        .collection("user")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });

      return () => {
        unsubscribe(); // Unsubscribe when the component unmounts
      };
    } else {
      setOrders([]); // Set orders to empty array if there is no logged-in user
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders_order">
        {orders.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

const Order = ({ order }) => {
  const { id, data } = order;

  return (
    <div className="order">
      <h2>Order ID: {id}</h2>
      <p>
        Order Total: <strong>${(data.amount / 100).toFixed(2)}</strong>
      </p>
      <p>Ordered on: {new Date(data.created * 1000).toLocaleString()}</p>

      <div className="order_items">
        {data.basket.map((item) => (
          <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            hideButton
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
