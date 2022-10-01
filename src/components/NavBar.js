import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Cart from "./Cart";

const NavBar = () => {
  return (
    <nav>
      <Logo />
      <NavLinks />
      <Cart />
    </nav>
  );
};

export default NavBar;
