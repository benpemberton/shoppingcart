import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Cart from "./Cart";
import styled from "styled-components";

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

const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 99999;
  background-color: #6db4d4;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  font-family: Kanit;

  @media (max-width: 650px) {
    & {
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
    }
  }
`;

const RightHandLinks = styled.div `
  display: flex;
  gap: 2rem;
`

export default NavBar;
