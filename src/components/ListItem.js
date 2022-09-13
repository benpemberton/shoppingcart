import { useState } from "react";

export default function ListItem({ id, name, amount, updateCart }) {
  const [quantity, setQuantity] = useState(amount);

  function updateAmount(e) {
    setQuantity(e.target.value);
  }

  return (
    <div className="cart-list-item">
      <div className="item-info">
        <p className="item-name">{name}</p>
      </div>
      <div className="update-item-area">
        <input type="number" value={quantity} onChange={updateAmount} />
        <button onClick={() => updateCart(id, quantity)}>Update</button>
        <button onClick={() => updateCart(id, 0)}>Remove</button>
      </div>
    </div>
  );
}
