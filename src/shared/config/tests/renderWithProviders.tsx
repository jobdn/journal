import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nTest from "../i18n/i18nForTests";
import { StoreProvider, StateSchema } from "app/config/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";

interface RenderOptions {
  route?: string;
  initialStore?: DeepPartial<StateSchema>;
}

export function renderWithProviders(
  ui: React.ReactNode,
  renderOptions: RenderOptions = {}
) {
  const { route, initialStore } = renderOptions;
  return render(
    <StoreProvider initialState={initialStore}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nTest}>{ui}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
}
