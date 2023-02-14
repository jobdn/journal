import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./app";
import { ThemeProvider } from "./shared/config/theme";

import "./shared/styles/index.scss";

import "app/config/i18n";
import { ErrorBoundary } from "app/config/ErrorBoundary";

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById("root")
);
