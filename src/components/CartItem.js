import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Input } from "../styles/GeneralElements";

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

const CartItemWrap = styled.div`
  background-color: rgb(241, 241, 241);
  padding: 1rem;
  margin-bottom: 0.2rem;
  border-radius: 5px;

  &:nth-child(even) {
    background-color: rgb(207, 207, 207);
  }

  &.appear {
    opacity: 0;
  }

  &.appear-active {
    opacity: 1;
    transition: opacity 300ms;
  }

  &.enter {
    opacity: 0;
  }

  &.enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }

  &.exit {
    opacity: 1;
  }

  &.exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
`;
const ItemName = styled.p`
  margin-bottom: 0.5rem;
`;

const UpdateArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default CartItem;
