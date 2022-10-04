import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Cart from "./Cart";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Nav>
      <Logo />
      <NavLinks />
      <Cart />
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 99999;
  background-color: #6db4d4;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  font-family: Kanit;
`;

export default NavBar;
