import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Cart from "./Cart";
import { Nav, RightHandLinks } from '../styles/components/StyledNavBar'

const NavBar = () => {
  return (
    <Nav>
      <Logo />
      <RightHandLinks>
        <NavLinks />
        <Cart />
      </RightHandLinks>
    </Nav>
  );
};

export default NavBar;
