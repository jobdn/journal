import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./app";
import { ThemeProvider } from "./shared/config/theme";

import "./shared/styles/index.scss";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
