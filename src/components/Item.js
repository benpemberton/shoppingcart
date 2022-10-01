import { useState } from "react";

const Item = ({ id, name, tagline, image_url, addToCart }) => {
  const [amount, setAmount] = useState(1);

  const updateAmount = (e) => {
    setAmount(e.target.value);
  };

  const addAndReset = () => {
    addToCart(id, name, amount);
    setAmount(1);
  };

  return (
    <div className="item-card">
      <img src={image_url} />
      <div className="text">
        <h3>{name}</h3>
        <p>{tagline}</p>
      </div>
      <div className="add-item-area">
        <input type="number" value={amount} onChange={updateAmount} />
        <button className="add-btn" onClick={addAndReset}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Item;
