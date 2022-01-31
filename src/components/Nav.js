import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <h1>Shopping Cart</h1>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}
