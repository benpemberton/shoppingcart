import { useState, useEffect } from "react";
import Item from "./Item";
import CartArea from "./CartArea";
import FilterOptions from "./FilterOptions";
import uniqid from "uniqid";

export default function Shop({ addToCart, cartItems }) {
  const [items, setItems] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const data = await fetch("https://api.punkapi.com/v2/beers");

    const items = await data.json();

    setItems(items);
    setDisplayItems(items);
  };

  const filterItems = (...args) => {
    if (
      args.some((argument) => {
        return argument === "Show all";
      })
    ) {
      setDisplayItems(items);
      return;
    }

    const filteredArray = items.filter((item) => {
      const tag = args.some((argument) => {
        return item.tagline.includes(argument);
      });
      const name = args.some((argument) => {
        return item.name.includes(argument);
      });
      return tag || name;
    });

    setDisplayItems(filteredArray);
  };

  return (
    <div className="shop-wrap">
      <FilterOptions filterItems={filterItems} />
      <div className="cards-container">
        <div className="cards-bg">
          <div className="item-cards">
            {displayItems.map((item) => (
              <Item key={uniqid()} {...item} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
