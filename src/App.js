import NavBar from "./components/NavBar";
import CartArea from "./components/CartArea";
import "./app.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    checkLocal();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function checkLocal() {
    if (localStorage.length === 0) return;

    const cart = localStorage.getItem("cart");

    setCartItems(JSON.parse(cart));
  }

  function toggleCart() {
    setShowCart(!showCart);
  }

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

  const location = useLocation();

  return (
    <div className="App">
      <NavBar toggleCart={toggleCart} showCart={showCart} />
      <CartArea
        cartItems={cartItems}
        updateCart={updateCart}
        showCart={showCart}
        toggleCart={toggleCart}
      />
      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop addToCart={addToCart} cartItems={cartItems} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
