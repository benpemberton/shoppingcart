import { useState } from "react";
import { Button, Input } from "../styles/elements/GeneralElements";
import { CardWrap, Details, AddItemArea } from "../styles/components/StyledProductCard";

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

export default ProductCard;
