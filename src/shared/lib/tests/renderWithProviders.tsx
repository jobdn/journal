import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nTest from "../../config/i18n/i18nForTests";
import { StoreProvider } from "app/config/StoreProvider";
import { ReducersMapObject } from "@reduxjs/toolkit";

interface RenderOptions {
  route?: string;
  initialStore?: DeepPartial<StateSchema>;
  asyncReducers?: ReducersMapObject<DeepPartial<StateSchema>>;
}

export function renderWithProviders(
  ui: React.ReactNode,
  renderOptions: RenderOptions = {}
) {
  const { route = "", initialStore, asyncReducers } = renderOptions;
  return render(
    <StoreProvider asyncReducers={asyncReducers} initialState={initialStore}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nTest}>{ui}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
}
