import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");

@font-face {
    font-family: 'Kanit';
    src: url("https://fonts.googleapis.com/css2?family=Kanit&display=swap");
}

html {
  box-sizing: border-box;
  font-size: 16px;
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

/* 
MINE FROM HERE
*/

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
