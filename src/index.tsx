import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./app/App";
import { ThemeProvider } from "./shared/config/theme";

import "./shared/styles/index.scss";

import "app/config/i18n";
import { ErrorBoundary } from "app/config/ErrorBoundary";
import { StoreProvider } from "app/config/StoreProvider";

render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById("root")
);
