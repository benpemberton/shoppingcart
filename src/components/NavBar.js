import Logo from "./Logo";
import NavLinks from "./NavLinks";
import CartIcon from "./CartIcon";

const NavBar = () => {
  return (
    <nav>
      <Logo />
      <NavLinks />
      <CartIcon />
    </nav>
  );
};

export default NavBar;
