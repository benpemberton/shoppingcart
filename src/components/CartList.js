import CartItem from "./CartItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ListWrap } from '../styles/components/StyledExpandedCart'

const CartList = ({ cartItems, updateCart }) => {
  return (
    <ListWrap>
      <TransitionGroup>
        {cartItems.map((item) => {
          return (
            <CSSTransition
              key={item.id}
              unmountOnExit
              timeout={{ enter: 300, exit: 300 }}
            >
              <CartItem {...item} updateCart={updateCart} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </ListWrap>
  );
};

export default CartList;
