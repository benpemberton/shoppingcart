import { useState, useEffect } from "react";
import { CartItemWrap, ItemName, UpdateArea } from '../styles/components/StyledExpandedCart'
import { Button, Input } from "../styles/elements/GeneralElements";

const CartItem = ({ id, name, amount, updateCart }) => {
  const [quantity, setQuantity] = useState(amount);

  useEffect(() => {
    setQuantity(amount);
  }, [amount]);

  return (
    <CartItemWrap>
      <ItemName>{name}</ItemName>
      <UpdateArea>
        <Input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Button fontSize={"0.8rem"} onClick={() => updateCart(id, quantity)}>
          Update
        </Button>
        <Button fontSize={"0.8rem"} onClick={() => updateCart(id, 0)}>
          Remove
        </Button>
      </UpdateArea>
    </CartItemWrap>
  );
};

export default CartItem;
