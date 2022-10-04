import CartQuantity from "./CartQuantity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const CartIcon = ({ toggleCart, sumItems }) => {
  return (
    <IconWrap onClick={toggleCart}>
      <FontAwesomeIcon icon={faShoppingCart} />
      {sumItems() && <CartQuantity sumItems={sumItems} />}
    </IconWrap>
  );
};

const IconWrap = styled.div`
  position: relative;

  svg {
    font-size: 1.2rem;
    color: #000;
  }
`;

export default CartIcon;
