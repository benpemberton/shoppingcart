import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import App from "./components/App";
import GlobalStyle from "./styles/globalStyles";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/shoppingcart">
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
