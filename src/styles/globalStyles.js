import { createGlobalStyle } from "styled-components";
import './fonts.css'

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Kanit', sans-serif;
}

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
button,
a {
  font-family: Kanit;
}

p,
span,
input {
  font-family: "Courier New", Courier, monospace;
  font-weight: 700;
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

.App {
  position: relative;
}

ul,
li,
a {
  color: white;
}

p,
h3 {
  font-family: "Courier New", Courier, monospace;
}

a:link {
  text-decoration: none;
}
`;

export default GlobalStyle;
