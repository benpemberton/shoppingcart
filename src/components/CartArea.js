import { useEffect, useRef } from "react";
import ListItem from "./ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function CartArea({
  cartItems,
  updateCart,
  showCart,
  toggleCart,
}) {
  function sumItems() {
    if (cartItems.length === 0) return;

    let total = 0;

    cartItems.forEach((item) => (total += Number(item.amount)));

    return total;
  }

  return (
    <CSSTransition
      in={showCart}
      unmountOnExit
      timeout={{ enter: 400, exit: 600 }}
      classNames="cart-area"
    >
      <div className="cart-area">
        <CSSTransition
          in={showCart}
          unmountOnExit
          appear
          timeout={{ enter: 600, exit: 200 }}
          classNames="inner-cart"
        >
          <div className="inner-cart">
            <div className="close-button" onClick={toggleCart}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <TransitionGroup className="cart-list-wrap">
              {cartItems.map((item) => {
                return (
                  <CSSTransition
                    key={item.id}
                    unmountOnExit
                    timeout={{ enter: 300, exit: 300 }}
                    classNames="cart-list-item"
                  >
                    <ListItem {...item} updateCart={updateCart} />
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
            <div className="checkout-area">
              <button className="checkout-button">Checkout</button>
              <p>{sumItems()} items</p>
            </div>
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
}
