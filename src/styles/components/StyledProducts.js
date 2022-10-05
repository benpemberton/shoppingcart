import styled from "styled-components";

const ProductsWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
`;

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 2rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.521);
  border-radius: 20px;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1250px) {
    & {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  @media (max-width: 950px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 550px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

export { ProductsWrap, Background, Layout };
