import CartItem from "./CartItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

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

const ListWrap = styled.div`
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
  overflow-y: auto;
`;

export default CartList;
