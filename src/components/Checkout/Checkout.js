import React from "react";
import { useStateValue } from "../../Store/UserData";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProducts/CheckoutProduct";
import Subtotal from "./Subtotal/Subtotal";

const Checkout = () => {
  const [{ cart }] = useStateValue();

  return (
    <div className={"checkout"}>
      <div className={"checkout__left"}>
        {cart?.length === 0 ? (
          <div>
            <h1>Your Cart is empty 😟</h1>
            <p>
              Please start by adding some products to the cart in order to
              checkout 😃
            </p>
          </div>
        ) : (
          <div className={"checkout__title"}>
            <h2>Your Cart 🛒</h2>
          </div>
        )}

        {cart.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
            key={item.id * Math.random() * 10000}
          />
        ))}
      </div>
      {cart.length > 0 && (
        <div className={"checkout__right"}>
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
