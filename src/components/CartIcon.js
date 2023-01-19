import CartSVG from "./svgs/CartSVG";
import { IconWrap, NumWrap } from "../styles/components/StyledCartIcon";

const CartIcon = ({ toggleCart, sumItems, showCart }) => {
  return (
    <IconWrap className={showCart ? "open" : "closed"} onClick={toggleCart}>
      <CartSVG />
      {sumItems() && (
        <NumWrap>
          <p>{sumItems()}</p>
        </NumWrap>
      )}
    </IconWrap>
  );
};

export default CartIcon;
