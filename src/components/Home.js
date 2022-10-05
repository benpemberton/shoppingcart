import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageWrap } from "../styles/ContainerElements";
import HomeImage from "../assets/ipa-can-and-glass.jpg";
import { Button } from "../styles/GeneralElements";

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

const HomeWrap = styled(PageWrap)`
  height: calc(100vh - var(--headerHeight));
  justify-content: end;
  background-image: url("${HomeImage}");
  background-size: cover;
  background-position: center;
`;

const BannerWrap = styled.div`
  bottom: 0;
  color: #6dd483;
  padding: 4rem;
  padding-bottom: 7rem;
  background-image: linear-gradient(
    transparent,
    20%,
    rgba(0, 0, 0, 0.7),
    70%,
    rgba(0, 0, 0, 0.95)
  );

  h1 {
    font-size: 6rem;
    font-family: Kanit;
    line-height: 1;
    margin-bottom: 1rem;
  }

  p {
    font-size: 16px;
    max-width: 800px;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 650px) {
    & {
      padding-bottom: 5rem;
    }
  }

  @media (max-width: 650px) and (max-height: 800px) {
    & {
      padding: 2rem;
    }

    h1 {
      font-size: 4rem;
    }
  }
`;

export default Home;
