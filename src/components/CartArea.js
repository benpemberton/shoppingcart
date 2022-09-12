import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import uniqid from "uniqid";

export default function CartArea(props) {
  const [showCart, setShowCart] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (props.cartItems.length > 0 && isEmpty) {
      setIsEmpty(false);
    }
  }, [props.cartItems]);

  function sumItems() {
    if (props.cartItems.length === 0) return;

    let total = 0;

    props.cartItems.forEach((item) => (total += Number(item.amount)));

    return total;
  }

  const getClasses = () => {
    if (showCart) return "cart expanded";

    return "cart";
  };

  return (
    <div className={getClasses()} onClick={() => setShowCart(true)}>
      {showCart ? (
        <>
          <i
            className="fas fa-times close-cart"
            onClick={() => setShowCart(false)}
          ></i>
          <div className="cart-list-wrap">
            {props.cartItems.map((item) => {
              return <ListItem key={uniqid()} {...item} />;
            })}
          </div>
          <button>Checkout</button>
        </>
      ) : (
        <>
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-num">{sumItems()}</span>
        </>
      )}
    </div>
  );
}
