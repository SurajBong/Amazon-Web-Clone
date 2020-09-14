import React, { forwardRef } from "react";

import "./Checkout.css";

import Subtotal from "./Subtotal/Subtotal";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider";

import FlipMove from "react-flip-move";

const FunctionalCheckout = forwardRef((props, ref) => (
  <div ref={ref}>{props.children}</div>
));

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB23492668_.jpg"
          alt=""
        />
        <div>
          <h3 className="checkout__userTitle">
            Hello {user?.email.split("@")[0]}
          </h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <FlipMove leaveAnimation="accordionVertical">
            {basket?.map((item, index) => (
              <FunctionalCheckout key={`${item.id}_${index}`}>
                <CheckoutProduct
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  title={item.title}
                />
              </FunctionalCheckout>
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
