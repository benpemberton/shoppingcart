import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import uniqid from "uniqid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

export default function CartArea({ cartItems, updateCart }) {
  const [showCart, setShowCart] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
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
    // if (e.currentTarget.classList.contains("expanded")) return;

    console.log(e.target);

    if (e.target.classList.contains("checkout-button")) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  }

  const cartVars = {
    cartOpen: {
      height: "25rem",
      width: "30rem",
      // padding: "1rem",
      // paddingRight: "2rem",
      transition: {
        duration: 0.01,
        // when: "beforeChildren",
        // staggerChildren: 0.3,
      },
    },
    cartClosed: {
      height: "50px",
      width: "50px",
      transition: {
        when: "afterChildren",
      },
    },
  };

  const itemVars = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.5 },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="cart"
        onClick={toggleCart}
        animate={showCart ? "cartOpen" : "cartClosed"}
        variants={cartVars}
        onAnimationComplete={() => console.log("done")}
      >
        {showCart ? (
          <>
            <div className="close-cart" onClick={toggleCart}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <div className="cart-list-wrap">
              {cartItems.map((item, i) => {
                return (
                  <ListItem
                    key={uniqid()}
                    {...item}
                    updateCart={updateCart}
                    itemVars={itemVars}
                    i={i}
                    isCartOpen={isCartOpen}
                  />
                );
              })}
            </div>
            <button className="checkout-button" onClick={toggleCart}>
              Checkout
            </button>
            <p>{sumItems()} items</p>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cart-num">{sumItems()}</span>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
