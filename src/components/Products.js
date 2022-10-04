import ProductCard from "./ProductCard";
import Placeholder from "./Placeholder";
import uniqid from "uniqid";
import styled from "styled-components";

const Products = ({ items, displayItems, addToCart }) => {
  return (
    <ProductsWrap>
      <Background>
        <Layout>
          {!items &&
            Array(12)
              .fill()
              .map(() => <Placeholder key={uniqid()} />)}
          {displayItems?.map((item) => (
            <ProductCard key={uniqid()} {...item} addToCart={addToCart} />
          ))}
        </Layout>
      </Background>
    </ProductsWrap>
  );
};

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
`;

export default Products;
