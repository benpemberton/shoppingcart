import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function CartArea({ cartItems, updateCart }) {
  const [showCart, setShowCart] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (cartItems.length > 0 && isEmpty) {
      setIsEmpty(false);
    }
  }, [cartItems]);

  function sumItems() {
    if (cartItems.length === 0) return;

    let total = 0;

    cartItems.forEach((item) => (total += Number(item.amount)));

    return total;
  }

  const getClasses = () => {
    if (showCart) return "cart expanded";

    return "cart";
  };

  function toggleCart(e) {
    if (e.currentTarget.classList.contains("expanded")) return;

    e.currentTarget.classList.contains("close-cart")
      ? setShowCart(false)
      : setShowCart(true);
  }

  return (
    <div className={getClasses()} onClick={toggleCart}>
      {showCart ? (
        <>
          <div className="close-cart" onClick={toggleCart}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div className="cart-list-wrap">
            {cartItems.map((item) => {
              return (
                <ListItem key={uniqid()} {...item} updateCart={updateCart} />
              );
            })}
          </div>
          <button className="checkout-button">Checkout</button>
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="cart-num">{sumItems()}</span>
        </>
      )}
    </div>
  );
}
