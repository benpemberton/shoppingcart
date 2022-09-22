import { useState } from "react";
import { motion } from "framer-motion";

export default function ListItem({
  id,
  name,
  amount,
  updateCart,
  itemVars,
  i,
  isCartOpen,
}) {
  const [quantity, setQuantity] = useState(amount);

  function updateAmount(e) {
    setQuantity(e.target.value);
  }

  return (
    <motion.div
      className="cart-list-item"
      initial={isCartOpen ? "visible" : "hidden"}
      animate="visible"
      variants={itemVars}
      custom={i}
    >
      <div className="item-info">
        <p className="item-name">{name}</p>
      </div>
      <div className="update-item-area">
        <input type="number" value={quantity} onChange={updateAmount} />
        <button onClick={() => updateCart(id, quantity)}>Update</button>
        <button onClick={() => updateCart(id, 0)}>Remove</button>
      </div>
    </motion.div>
  );
}
