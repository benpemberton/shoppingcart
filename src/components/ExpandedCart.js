import { useSelector, useDispatch } from "react-redux";
import { removeItem, setAmount, setShowCart } from "../redux/cartSlice";
import CartItem from "./CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ExpandedCart = () => {
  const { cartItems, showCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const sumItems = () => {
    if (cartItems.length === 0) return;

    let total = 0;

    cartItems.forEach((item) => (total += Number(item.amount)));

    return total;
  };

  const updateCart = (id, amount) => {
    const index = cartItems.findIndex((item) => item.id === id);
    if (!amount) {
      dispatch(removeItem({ index }));
    } else {
      dispatch(setAmount({ index, amount }));
    }
  };

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
            <div
              className="close-button"
              onClick={() => dispatch(setShowCart(false))}
            >
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
                    <CartItem {...item} updateCart={updateCart} />
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
};

export default ExpandedCart;
