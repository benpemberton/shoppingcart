import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ExpandedCart from "./components/ExpandedCart";
import "./app.css";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import PageLayout from "./components/PageLayout";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ExpandedCart />
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
