import { useDispatch, useSelector } from "react-redux";
import { setShowCart } from "../redux/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartIcon = () => {
  const showCart = useSelector((state) => state.cart.showCart);
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(setShowCart(!showCart));
  };

  return (
    <div className="cart-icon" onClick={toggleCart}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="cart-num">{}</span>
    </div>
  );
};

export default CartIcon;
