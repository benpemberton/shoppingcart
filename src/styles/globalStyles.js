import { createGlobalStyle } from "styled-components";
import "./fonts.css";

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 16px;

  @media (max-width: 650px) {
    & {
      font-size: 14px;
    }
  }
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

* {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

img {
  max-width: 100%;
  height: auto;
}

body {
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
input,
button,
a {
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: normal;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

ul,
li,
a {
  color: white;
}

a:link {
  text-decoration: none;
}
`;

export default GlobalStyle;
