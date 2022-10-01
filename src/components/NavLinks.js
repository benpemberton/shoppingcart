import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/shop">
        <li>Shop</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
    </ul>
  );
};

export default NavLinks;
