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

        <p>{props.rating}/5</p>
        <div className={"product__price"}>
          <p>
            ₹<strong>{props.price}</strong>
          </p>
        </div>
        <div className={"product__rating"}>
          {Array(props.rating)
            .fill(null)
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={props.image} alt={"productImage"} />
      <button onClick={addToCartHandler}>Add to Cart</button>
    </div>
  );
};

export default Product;
