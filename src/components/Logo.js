import { Link } from "react-router-dom";
import { LogoWrap } from '../styles/components/StyledNavBar'

const Logo = () => {
  return (
    <LogoWrap>
      <Link to="/">Splashy Brews</Link>
    </LogoWrap>
  );
};



export default Logo;
