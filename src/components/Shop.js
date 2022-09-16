import { useState, useEffect } from "react";
import Item from "./Item";
import FilterOptions from "./FilterOptions";
import Placeholder from "./Placeholder";
import TransitionDiv from "./TransitionDiv";
import uniqid from "uniqid";

export default function Shop({ addToCart, cartItems }) {
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
    <TransitionDiv name="shop">
      <FilterOptions filterItems={filterItems} />
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
    </TransitionDiv>
  );
}
