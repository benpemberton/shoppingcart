import { useSelector, useDispatch } from "react-redux";
import { removeItem, setAmount, setShowCart } from "../redux/cartSlice";
import CartList from "./CartList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { Button } from "../styles/GeneralElements";

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
    >
      <CartWrap>
        <CSSTransition
          in={showCart}
          unmountOnExit
          appear
          timeout={{ enter: 600, exit: 200 }}
        >
          <CartLayout>
            <CloseCart>
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => dispatch(setShowCart(false))}
              />
            </CloseCart>
            <CartList cartItems={cartItems} updateCart={updateCart} />
            <CheckoutArea>
              <Button>Checkout</Button>
              <p>{sumItems()} items</p>
            </CheckoutArea>
          </CartLayout>
        </CSSTransition>
      </CartWrap>
    </CSSTransition>
  );
};

const CartWrap = styled.div`
  z-index: 999999;
  background-color: #2b94b1;
  border-radius: 5px 0 0 5px;
  position: fixed;
  right: 0;
  top: 10vh;
  height: 90vh;
  width: 30rem;
  padding: 1rem;
  font-family: "Courier New", Courier, monospace;

  &.appear {
    transform: translateX(100%);
  }

  &.appear-active {
    transform: translateX(0);
    transition: transform 400ms;
  }

  &.enter {
    transform: translateX(100%);
  }

  &.enter-active {
    transform: translateX(0);
    transition: transform 400ms;
  }

  &.exit {
    transform: translateX(0);
  }

  &.exit-active {
    transform: translateX(100%);
    transition: transform 400ms 200ms;
  }
`;

const CartLayout = styled.div`
  display: grid;
  grid-template-rows: min-content auto min-content;
  gap: 1rem;
  height: 100%;

  &.appear {
    opacity: 0;
  }

  &.appear-active {
    opacity: 1;
    transition: opacity 200ms 400ms;
  }

  &.enter {
    opacity: 0;
  }

  &.enter-active {
    opacity: 1;
    transition: opacity 200ms 400ms;
  }

  &.exit {
    opacity: 1;
  }

  &.exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;

const CloseCart = styled.div``;

const CheckoutArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default ExpandedCart;
