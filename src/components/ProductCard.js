import { useState } from "react";
import { Button, Input } from "../styles/GeneralElements";
import styled from "styled-components";

const ProductCard = ({ id, name, tagline, image_url, addToCart }) => {
  const [amount, setAmount] = useState(1);

  const updateAmount = (e) => {
    setAmount(e.target.value);
  };

  const addAndReset = () => {
    addToCart(id, name, amount);
    setAmount(1);
  };

  return (
    <CardWrap>
      <img src={image_url} />
      <Details>
        <h3>{name}</h3>
        <p>{tagline}</p>
      </Details>
      <AddItemArea>
        <Input type="number" value={amount} onChange={updateAmount} />
        <Button className="add-btn" onClick={addAndReset}>
          Add to cart
        </Button>
      </AddItemArea>
    </CardWrap>
  );
};

const CardWrap = styled.div`
  background-color: #fff;
  height: 24rem;
  width: 15rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 5px;

  &:nth-child(even) {
    background-color: #fff;
  }

  img {
    object-fit: contain;
    max-height: 12rem;
    padding: 1rem 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.521);
    margin-bottom: 1.2rem;
  }
`;

const Details = styled.div`
  margin-bottom: 1.2rem;

  h3,
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  p {
    font-size: 0.8em;
    margin-top: 1%;
  }
`;

const AddItemArea = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default ProductCard;
