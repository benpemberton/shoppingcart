import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItems, addItem, updateAmount } from "../redux/cartSlice";
import store from "../redux/store";
import Products from "./Products";
import FilterList from "./FilterList";
import { PageWrap } from "../styles/ContainerElements";
import styled from "styled-components";
import BeerGlasses from "../assets/colourful-beer-in-glasses.jpg";

function getCartIndex(id) {
  const cartItems = store.getState().cart.cartItems;
  return cartItems.findIndex((item) => item.id === id);
}

const Shop = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [displayItems, setDisplayItems] = useState(null);

  useEffect(() => {
    items ? setDisplayItems(items) : fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const data = await fetch("https://api.punkapi.com/v2/beers");

    const items = await data.json();

    dispatch(setItems(items));
    setDisplayItems(items);
  };

  const addToCart = (id, name, amount) => {
    const index = getCartIndex(id);
    // findIndex returns -1 for arrays where no items return truthy for function
    if (index > -1) {
      dispatch(updateAmount({ id, index, amount }));
    } else {
      dispatch(addItem({ id, name, amount }));
    }
  };

  return (
    <ShopWrap>
      <FilterList items={items} setDisplayItems={setDisplayItems} />
      <Products
        items={items}
        displayItems={displayItems}
        addToCart={addToCart}
      />
    </ShopWrap>
  );
};

const ShopWrap = styled(PageWrap)`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),
    url("${BeerGlasses}");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 0;
  display: block;
`;

export default Shop;
