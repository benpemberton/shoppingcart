import { useState, useEffect } from "react";

const CartItem = ({ id, name, amount, updateCart }) => {
  const [quantity, setQuantity] = useState(amount);

  useEffect(() => {
    setQuantity(amount);
  }, [amount]);

  return (
    <div className="cart-list-item">
      <div className="item-info">
        <p className="item-name">{name}</p>
      </div>
      <div className="update-item-area">
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={() => updateCart(id, quantity)}>Update</button>
        <button onClick={() => updateCart(id, 0)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
