import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { IconWrap, NumWrap } from '../styles/components/StyledCartIcon'

const CartIcon = ({ toggleCart, sumItems, showCart }) => {
  return (
    <IconWrap className={showCart ? 'open' : 'closed'} onClick={toggleCart}>
      <FontAwesomeIcon icon={faShoppingCart} />
      {sumItems() && 
        <NumWrap>
          <p>{sumItems()}</p>
        </NumWrap>
      }
    </IconWrap>
  );
};

export default CartIcon;
