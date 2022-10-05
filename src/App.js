import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ExpandedCart from "./components/ExpandedCart";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import PageLayout from "./components/PageLayout";
import styled from 'styled-components'

const App = () => {
  return (
    <AppWrap>
      <NavBar />
      <ExpandedCart />
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </AppWrap>
  );
};

const AppWrap = styled.div`
  overflow: auto;
`

export default App;
