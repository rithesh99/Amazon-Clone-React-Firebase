import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

export default function Product({id, title, image, price, rating }) {
  const bnum = 5 - rating;
  const ratingArray = Array(rating).fill();
  const ratingbArray = Array(bnum).fill(true);

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {ratingArray.map((_, i) => {
            return (
              <StarIcon
                key={i}
                style={{ color: "#fc9803", fontSize: "20px" }}
              />
            );
          })}
          {ratingbArray.map((_, i) => {
            return (
              <StarBorderIcon
                key={i}
                style={{ color: "#fc7703", fontSize: "20px" }}
              />
            );
          })}
        </div>
      </div>
      <img src={image} alt="" />
      <button>Add to Cart</button>
    </div>
  );
}
