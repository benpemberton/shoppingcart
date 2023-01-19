import styled from "styled-components";

const IconWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 1.6rem;
  width: 1.6rem;

  svg {
    height: 100%;
    width: 100%;
  }

  &.open svg {
    fill: ${({ theme }) => theme.colours.darkOrange};
  }

  &.closed svg {
    fill: ${({ theme }) => theme.colours.lightOrange};
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
    margin-top: 25%;
    line-height: ${({ theme }) => theme.fontSizes.xs};
    color: #000;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-family: ${({ theme }) => theme.fonts.secondary};
  }
`;

export { IconWrap, NumWrap };
