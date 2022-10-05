import { Link } from "react-router-dom";
import { Button } from "../styles/elements/GeneralElements";
import { HomeWrap, BannerWrap } from '../styles/components/StyledHome'

const Home = () => {
  return (
    <HomeWrap>
      <BannerWrap>
        <h1>The finest beer known to man</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis
          odio eget est vulputate tristique et at diam. In sed est felis.
          Aliquam ornare, ligula eu gravida consectetur, purus massa fermentum
          velit, sit amet viverra elit tortor a magna. Ut malesuada elementum
          venenatis.
        </p>
        <Link to="/shop">
          <Button>Shop beers</Button>
        </Link>
      </BannerWrap>
    </HomeWrap>
  );
};

export default Home;
