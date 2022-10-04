import styled from "styled-components";

const CartQuantity = ({ sumItems }) => {
  return (
    <NumWrap>
      <p>{sumItems()}</p>
    </NumWrap>
  );
};

const NumWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -50%;
  left: 60%;
  background-color: #fd933e;
  border-radius: 50%;
  padding: 0.2rem;
  height: 1.2rem;
  width: 1.2rem;

  p {
    margin-top: 0.15rem;
    line-height: 0.8rem;
    color: white;
    font-size: 0.8rem;
    font-family: "Courier New", Courier, monospace;
    font-weight: 900;
  }
`;

export default CartQuantity;
