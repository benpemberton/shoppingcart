import { useState } from "react";
import ListItem from "./ListItem";
import uniqid from "uniqid";
import { useEffect } from "react";

export default function CartArea(props) {
  const [showCart, setShowCart] = useState(false);

  function sumItems() {
    if (props.cartItems.length === 0) return;

    let total = 0;

    props.cartItems.forEach((item) => (total += Number(item.amount)));

    return total;
  }

  if (showCart) {
    return (
      <div className="cart expanded">
        <i
          class="fas fa-times close-cart"
          onClick={() => setShowCart(false)}
        ></i>
        <div className="cart-list-wrap">
          {props.cartItems.map((item) => {
            return <ListItem key={uniqid()} {...item} />;
          })}
        </div>
      </div>
    );
  } else
    return (
      <div className="cart" onClick={() => setShowCart(true)}>
        <i class="fas fa-shopping-cart"></i>
        <span className="cart-num">{sumItems()}</span>
      </div>
    );
}
