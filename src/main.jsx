import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import  GlobalStyle  from "./styles/GlobalStyles";
import theme from "./styles/theme";
import { Home } from "./Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home/>
    </ThemeProvider>
  </React.StrictMode>
);
