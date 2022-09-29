import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCartItems } from "./redux/cartSlice";
import NavBar from "./components/NavBar";
import CartArea from "./components/CartArea";
import "./app.css";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import PageLayout from "./components/PageLayout";

function App() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    checkLocal();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function checkLocal() {
    if (localStorage.length === 0) return;

    const cart = localStorage.getItem("cart");

    dispatch(setCartItems(JSON.parse(cart)));
  }

  return (
    <div className="App">
      <NavBar />
      <CartArea />
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
