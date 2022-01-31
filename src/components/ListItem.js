export default function ListItem(props) {
  return (
    <div className="cart-list-item">
      <p className="item-name">{props.name}</p>
      <p className="item-quantity">Quantity: {props.amount}</p>
    </div>
  );
}
