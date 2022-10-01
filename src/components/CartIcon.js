import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartIcon = ({ toggleCart }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="cart-num">{}</span>
    </div>
  );
};

export default CartIcon;
