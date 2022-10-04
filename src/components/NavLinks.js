import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLinks = () => {
  return (
    <Ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/shop">
        <li>Shop</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
    </Ul>
  );
};

const Ul = styled.ul`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
  list-style: none;
`;

export default NavLinks;
