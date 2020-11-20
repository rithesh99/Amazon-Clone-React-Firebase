import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { useStateValue } from "../State/StateProvider";

export default function Product({id, title, image, price, rating }) {
  const bnum = 5 - rating;
  const ratingArray = Array(rating).fill();
  const ratingbArray = Array(bnum).fill(true);
  // eslint-disable-next-line ---- state is assigned but never used
  const [state,dispatch] = useStateValue();
  function addToCart(){
    //dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
   }

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
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
