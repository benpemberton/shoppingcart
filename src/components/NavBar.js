import Logo from "./Logo";
import NavLinks from "./NavLinks";
import CartIcon from "./CartIcon";

const NavBar = ({ toggleCart }) => {
  return (
    <nav>
      <Logo />
      <NavLinks />
      <CartIcon toggleCart={toggleCart} />
    </nav>
  );
};

export default NavBar;
