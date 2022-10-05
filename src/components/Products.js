import ProductCard from "./ProductCard";
import Placeholder from "./Placeholder";
import uniqid from "uniqid";
import { ProductsWrap, Background, Layout } from "../styles/components/StyledProducts";

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

export default Products;
