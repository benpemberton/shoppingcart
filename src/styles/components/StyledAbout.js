import BreweryPic from "../../assets/beer-kegs-piled-up.jpg";
import { PageWrap } from "../elements/ContainerElements";
import styled from "styled-components";

const AboutWrap = styled(PageWrap)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media (max-width: 650px) {
    align-items: start;
    padding: 0;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
`;

const TextArea = styled.div`
  padding-top: 2rem;

  p {
    line-height: 1.5;
  }

  @media (max-width: 650px) {
    padding: 2rem;
  }
`;

const ImageDiv = styled.div`
  background: url('${BreweryPic}') no-repeat center;
  background-size: cover;
  box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.221);
  width: 100%;
  padding-bottom: 56.25%;

  @media (max-width: 650px) {
    height: 40vh;
  }
`;

export { AboutWrap, MainContent, TextArea, ImageDiv }
