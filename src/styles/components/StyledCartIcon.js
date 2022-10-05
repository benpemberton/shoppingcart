import styled from "styled-components";

const IconWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 1.2rem;
    color: #e36d0e;
  }

  &.open svg {
    color: #e36d0e;
  }

  &.closed svg {
    color: #fd933e;
  }
`;

const NumWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -25%;
  left: 60%;
  background-color: #fff;
  border-radius: 50%;
  padding: 0.2rem;
  height: 1.2rem;
  width: 1.2rem;
  user-select: none;

  p {
    margin-top: 0.15rem;
    line-height: 0.8rem;
    color: #000;
    font-size: 0.8rem;
    font-family: "Courier New", Courier, monospace;
    font-weight: 900;
  }
`;

export { IconWrap, NumWrap }