import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, updateAmount } from "../redux/cartSlice";
import Item from "./Item";
import FilterList from "./FilterList";
import Placeholder from "./Placeholder";
import uniqid from "uniqid";

export default function Shop() {
  const cartItems = useSelector((state) => state.cart.cartItems);
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

  function addToCart(id, name, amount) {
    const index = cartItems.findIndex((item) => item.id === id);
    // findIndex returns -1 for arrays where no items return truthy for function
    if (index > -1) {
      dispatch(updateAmount({ id, index, amount }));
    } else {
      dispatch(addItem({ id, name, amount }));
    }
  }

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
}
