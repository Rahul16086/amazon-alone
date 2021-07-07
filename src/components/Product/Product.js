import React from "react";
import "./Product.css";

const Product = (props) => {
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
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
