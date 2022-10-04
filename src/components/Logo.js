import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = () => {
  return (
    <LogoWrap>
      <Link to="/">Splashy Brews</Link>
    </LogoWrap>
  );
};

const LogoWrap = styled.div`
  a {
    font-size: 3rem;
    color: white;
    line-height: 1;
  }
`;

export default Logo;
