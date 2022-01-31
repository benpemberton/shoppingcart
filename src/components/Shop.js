import { useState, useEffect } from "react";
import Item from "./Item";
import CartArea from "./CartArea";
import uniqid from "uniqid";

export default function Shop(props) {
  useEffect(() => {
    fetchInfo();
  }, []);

  const [items, setItems] = useState([]);

  const fetchInfo = async () => {
    const data = await fetch("https://api.punkapi.com/v2/beers");

    const items = await data.json();

    setItems(items);
  };

  return (
    <div>
      <div className="cart-display">
        <CartArea cartItems={props.cartItems} items={items} />
      </div>
      <div className="cards-container">
        <div className="item-cards">
          {items.map((item) => (
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
