import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const CartIcon = ({ toggleCart }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="cart-num">{}</span>
    </div>
  );
};

export default CartIcon;
