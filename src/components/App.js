import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import ExpandedCart from "./ExpandedCart";
import Home from "./Home";
import Shop from "./Shop";
import About from "./About";
import PageLayout from "./PageLayout";
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
