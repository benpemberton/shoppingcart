import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItems, addItem, updateAmount } from "../redux/cartSlice";
import { getCartIndex } from "../utils/getCardIndex";
import Products from "./Products";
import FilterList from "./FilterList";
import { ShopWrap } from '../styles/components/StyledShop'

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

export default Shop;
