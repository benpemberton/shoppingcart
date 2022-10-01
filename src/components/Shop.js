import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem, updateAmount } from "../redux/cartSlice";
import store from "../redux/store";
import Item from "./Item";
import FilterList from "./FilterList";
import Placeholder from "./Placeholder";
import uniqid from "uniqid";

function getCartIndex(id) {
  const cartItems = store.getState().cart.cartItems;
  return cartItems.findIndex((item) => item.id === id);
}

const Shop = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const data = await fetch("https://api.punkapi.com/v2/beers");

    const items = await data.json();

    setItems(items);
    setDisplayItems(items);
    setIsLoading(false);
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
    <div className="shop-wrap">
      <FilterList items={items} setDisplayItems={setDisplayItems} />
      <div className="cards-container">
        <div className="cards-bg">
          <div className="item-cards">
            {isLoading &&
              Array(12)
                .fill()
                .map((item) => (
                  <div key={uniqid()} className="card-placeholder">
                    <Placeholder />
                  </div>
                ))}
            {!isLoading &&
              displayItems.map((item) => (
                <Item key={uniqid()} {...item} addToCart={addToCart} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
