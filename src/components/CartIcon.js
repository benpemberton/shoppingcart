import CartQuantity from "./CartQuantity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const CartIcon = ({ toggleCart, sumItems, showCart }) => {
  return (
    <IconWrap className={showCart ? 'open' : 'closed'} onClick={toggleCart}>
      <FontAwesomeIcon icon={faShoppingCart} />
      {sumItems() && <CartQuantity sumItems={sumItems} />}
    </IconWrap>
  );
};

const IconWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 1.2rem;
    color: #e36d0e;
  }

  &.open svg {
    color: #e36d0e;
  }

  &.closed svg {
    color: #fd933e;
  }
`;

export default CartIcon;
