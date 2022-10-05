import { Link } from "react-router-dom";
import { UL } from '../styles/components/StyledNavBar'

const NavLinks = () => {
  return (
    <UL>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/shop">
        <li>Shop</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
    </UL>
  );
};

export default NavLinks;
