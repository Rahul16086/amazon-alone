import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../../Store/UserData";

const CheckoutProduct = (props) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCartHandler = () => {
    dispatch({ type: "REMOVE_FROM_CART", id: props.id });
  };
  return (
    <div className={"checkoutProduct"}>
      <img className={"checkoutProduct__image"} src={props.image} alt={""} />

      <div className={"checkoutProduct__info"}>
        <p className={"checkoutProduct__title"}>{props.title}</p>
        <div className={"checkoutProduct__price"}>
          <p>
            ₹<strong>{props.price}</strong>
          </p>
        </div>
        <div className={"checkoutProduct__rating"}>
          {Array(props.rating)
            .fill(null)
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCartHandler}>Remove from Cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
