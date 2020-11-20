import React from "react";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";
import { useStateValue } from "../State/StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ cart, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad pic"
        />
        <div>
          {user ? (<h3>Hello, {user?.name}</h3>) : (<h3>Hello, Guest</h3>)}
          <h2 className="checkout__title">Your shopping Basket</h2>

          {cart.map((item,i) => (
            <CheckoutProduct
              index={i}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
