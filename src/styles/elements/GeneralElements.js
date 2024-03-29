import styled from "styled-components";

const Button = styled.button`
    align-items: center;
    background-color: #fd933e;
    border: 1px solid #000;
    border-radius: 10px;
    color: #000;
    cursor: pointer;
    display: inline-flex;
    font-size: ${({ theme, fontSize }) => fontSize || theme.fontSizes.sm};
    justify-content: center;
    line-height: 1.5;
    padding: 0.4rem 0.8rem;
    text-align: center;
    transition: all 0.2s;
    vertical-align: top;
  }

  &:active,
  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colours.darkOrange};
    color: #fff;
  }

  &:active {
    background-color: ${({ theme }) => theme.colours.darkerOrange};
  }
`;

const Input = styled.input`
  width: 2rem;
  line-height: 2;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.secondary};

  &:focus {
    outline: 1px solid;
  }
`;

export { Button, Input };
