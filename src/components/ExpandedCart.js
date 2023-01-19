import { useSelector, useDispatch } from "react-redux";
import { removeItem, setAmount, setShowCart } from "../redux/cartSlice";
import TimesSVG from "./svgs/TimesSVG";
import CartList from "./CartList";
import { CSSTransition } from "react-transition-group";
import { Button } from "../styles/elements/GeneralElements";
import {
  CartWrap,
  CartLayout,
  CloseCart,
  CheckoutArea,
} from "../styles/components/StyledExpandedCart";

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
            <CloseCart onClick={() => dispatch(setShowCart(false))}>
              <TimesSVG />
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

export default ExpandedCart;
