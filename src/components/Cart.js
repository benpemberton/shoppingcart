import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowCart, setCartItems } from "../redux/cartSlice";
import CartIcon from "./CartIcon";

const Cart = () => {
  const { cartItems, showCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    checkLocal();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const checkLocal = () => {
    if (localStorage.length === 0) return;

    const cart = localStorage.getItem("cart");

    dispatch(setCartItems(JSON.parse(cart)));
  };

  const toggleCart = () => {
    dispatch(setShowCart(!showCart));
  };

  const sumItems = () => {
    if (cartItems.length === 0) return;

    let total = 0;

    cartItems.forEach((item) => (total += Number(item.amount)));

    return total;
  };

  return <CartIcon sumItems={sumItems} showCart={showCart} toggleCart={toggleCart} />;
};

export default Cart;
