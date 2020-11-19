import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../State/StateProvider";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const bnum = 5 - rating;
  const ratingArray = Array(rating).fill();
  const ratingbArray = Array(bnum).fill(true);

  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
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
        {!hideButton && (
          <button onClick={removeFromCart}>Remove from Cart</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
