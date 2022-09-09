import Nav from "./components/Nav";
// import RouteSwitch from "./components/RouteSwitch";
import "./app.css";
import {  Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import { useState, useEffect } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => console.log(cartItems));

  function addHandler(id, name, amount) {
    const newArray = cartItems;
    if (newArray.find((item) => item.id === id)) {
      const index = newArray.findIndex((item) => item.id === id);
      const newObj = newArray[index];
      newObj.amount = Number(newObj.amount) + Number(amount);
      newArray[index] = newObj;
    } else {
      const newObj = { id, name, amount };
      newArray.push(newObj);
    }

    setCartItems([...newArray]);
  }

  return (
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop handler={addHandler} cartItems={cartItems} />}
          />
        </Routes>
      </div>
  );
}

export default App;
