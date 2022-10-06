import { PageWrap } from "../elements/ContainerElements";
import HomeImage from "../../assets/ipa-can-and-glass.jpg";
import styled from "styled-components";

const HomeWrap = styled(PageWrap)`
  height: calc(100vh - var(--headerHeight));
  justify-content: end;
  background-image: url("${HomeImage}");
  background-size: cover;
  background-position: center top;
`;

const BannerWrap = styled.div`
  bottom: 0;
  color: #6dd483;
  padding: 4rem;
  padding-bottom: 7rem;
  background-image: linear-gradient(
    transparent,
    15%,
    rgba(0, 0, 0, 0.7),
    70%,
    rgba(0, 0, 0, 0.95)
  );

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    line-height: 1;
    margin-bottom: 1rem;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.md};
    max-width: 800px;
    margin-bottom: 1rem;
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
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
  }
`;

export { HomeWrap, BannerWrap };
