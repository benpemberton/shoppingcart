import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export default function ListItem(props) {
  return (
    <div className="cart-list-item">
      <div className="item-info">
        <p className="item-name">{props.name}</p>
        <p className="item-quantity">Quantity: {props.amount}</p>
      </div>
      <div className="edit-quantity">
        <FontAwesomeIcon icon={faMinus} />

        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  );
}
