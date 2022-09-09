import { useState, useEffect } from "react";
import Item from "./Item";
import CartArea from "./CartArea";
import FilterOptions from "./FilterOptions";
import uniqid from "uniqid";

export default function Shop(props) {
  const [items, setItems] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const data = await fetch("https://api.punkapi.com/v2/beers");

    const items = await data.json();

    console.log(items);

    setItems(items);
    setDisplayItems(items);
  };

  const filterItems = (string) => {
    if (string === "Show all") {
      setDisplayItems(items);
      return;
    }

    const filteredArray = items.filter((item) => {
      return item.tagline.includes(string);
    });

    setDisplayItems(filteredArray);
  };

  return (
    <div>
      <div className="cart-display">
        <CartArea cartItems={props.cartItems} items={items} />
      </div>
      <div className="shop-banner">
        <h2>Get yourself a tipple</h2>
      </div>
      <FilterOptions filterItems={filterItems} />
      <div className="cards-container">
        <div className="item-cards">
          {displayItems.map((item) => (
            <Item
              key={uniqid()}
              {...item}
              cartItems={props.cartItems}
              handler={props.handler}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
