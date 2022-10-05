import styled from "styled-components";

const CartWrap = styled.div`
  z-index: 999999;
  background-color: #2b94b1;
  position: fixed;
  right: 0;
  top: var(--headerHeight);
  height: calc(100vh - var(--headerHeight));
  width: min(30rem, 100%);
  padding: 1rem;
  font-family: "Courier New", Courier, monospace;

  &.appear {
    transform: translateX(100%);
  }

  &.appear-active {
    transform: translateX(0);
    transition: transform 400ms;
  }

  &.enter {
    transform: translateX(100%);
  }

  &.enter-active {
    transform: translateX(0);
    transition: transform 400ms;
  }

  &.exit {
    transform: translateX(0);
  }

  &.exit-active {
    transform: translateX(100%);
    transition: transform 400ms 200ms;
  }
`;

const CartLayout = styled.div`
  display: grid;
  grid-template-rows: min-content auto min-content;
  gap: 1rem;
  height: 100%;

  &.appear {
    opacity: 0;
  }

  &.appear-active {
    opacity: 1;
    transition: opacity 200ms 400ms;
  }

  &.enter {
    opacity: 0;
  }

  &.enter-active {
    opacity: 1;
    transition: opacity 200ms 400ms;
  }

  &.exit {
    opacity: 1;
  }

  &.exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;

const CloseCart = styled.div`
  svg {
    color: #fff;
    font-size: 1.3rem;
    cursor: pointer;
  }
`;

const ListWrap = styled.div`
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
  overflow-y: auto;
`;

const CartItemWrap = styled.div`
  background-color: rgb(241, 241, 241);
  padding: 1rem;
  margin-bottom: 0.2rem;
  border-radius: 5px;

  &:nth-child(even) {
    background-color: rgb(207, 207, 207);
  }

  &.appear {
    opacity: 0;
  }

  &.appear-active {
    opacity: 1;
    transition: opacity 300ms;
  }

  &.enter {
    opacity: 0;
  }

  &.enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }

  &.exit {
    opacity: 1;
  }

  &.exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
`;
const ItemName = styled.p`
  margin-bottom: 0.5rem;
`;

const UpdateArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CheckoutArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export { CartWrap, CartLayout, CloseCart, ListWrap, CartItemWrap, ItemName, UpdateArea, CheckoutArea }