import { PageWrap } from "../elements/ContainerElements";
import styled from "styled-components";
import BeerGlasses from "../../assets/colourful-beer-in-glasses.jpg";

const ShopWrap = styled(PageWrap)`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),
    url("${BeerGlasses}");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 0;
  display: block;
`;

export { ShopWrap }
