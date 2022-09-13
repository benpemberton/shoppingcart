import Nav from "./components/Nav";
import CartArea from "./components/CartArea";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import { useState, useEffect } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function updateCart(id, amount) {
    const newArray = cartItems;
    if (!amount) {
      removeFromCart();
    } else if (newArray.find((item) => item.id === id)) {
      updateAmount();
    }

    setCartItems([...newArray]);

    function updateAmount() {
      const index = newArray.findIndex((item) => item.id === id);
      const newObj = newArray[index];
      newObj.amount = amount;
      newArray[index] = newObj;
    }

    function removeFromCart() {
      const index = newArray.findIndex((item) => item.id === id);
      newArray.splice(index, 1);
    }
  }

  function addToCart(id, name, amount) {
    const newArray = cartItems;
    if (newArray.find((item) => item.id === id)) {
      updateAmount();
    } else {
      addToCart();
    }

    setCartItems([...newArray]);

    function addToCart() {
      const newObj = { id, name, amount };
      newArray.push(newObj);
    }

    function updateAmount() {
      const index = newArray.findIndex((item) => item.id === id);
      const newObj = newArray[index];
      newObj.amount = Number(newObj.amount) + Number(amount);
      newArray[index] = newObj;
    }
  }

  return (
    <div className="App">
      <Nav />
      <div className="cart-display">
        <CartArea cartItems={cartItems} updateCart={updateCart} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop addToCart={addToCart} cartItems={cartItems} />}
        />
      </Routes>
    </div>
  );
}

export default App;
