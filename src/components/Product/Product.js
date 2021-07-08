import React from "react";
import "./Product.css";
import { useStateValue } from "../../Store/UserData";

const Product = (props) => {
  const [, dispatch] = useStateValue();

  const addToCartHandler = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };

  return (
    <div className={"product"}>
      <div className={"product__info"}>
        <p>{props.title}</p>
        <div className={"product__price"}>
          <p>
            ₹<strong>{props.price}</strong>
          </p>
        </div>
        <div className={"product__rating"}>
          {Array(props.rating)
            .fill(null)
            .map((_) => (
              <p key={Math.random() * 90}>⭐</p>
            ))}
        </div>
        <p>{props.rating}/5</p>
      </div>
      <img src={props.image} alt={"productImage"} />
      <button onClick={addToCartHandler}>Add to Cart</button>
    </div>
  );
};

export default Product;
