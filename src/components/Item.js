import { useState, useEffect } from "react";

export default function Item(props) {
  const [amount, setAmount] = useState(1);

  function updateAmount(e) {
    setAmount(e.target.value);
    console.log(amount);
  }

  return (
    <div className="item-card">
      <img src={props.image_url} />
      <div className="text">
        <h3>{props.name}</h3>
        <p>{props.tagline}</p>
      </div>
      <div className="add-item-area">
        <input type="number" value={amount} onChange={(e) => updateAmount(e)} />
        <button
          className="add-btn"
          onClick={() => props.handler(props.id, props.name, amount)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
