import { useState } from "react";

export default function Item({ id, name, tagline, image_url, addToCart }) {
  const [amount, setAmount] = useState(1);

  function updateAmount(e) {
    setAmount(e.target.value);
  }

  return (
    <div className="item-card">
      <img src={image_url} />
      <div className="text">
        <h3>{name}</h3>
        <p>{tagline}</p>
      </div>
      <div className="add-item-area">
        <input type="number" value={amount} onChange={(e) => updateAmount(e)} />
        <button className="add-btn" onClick={() => addToCart(id, name, amount)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
