import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";

import i18nTest from "../i18n/i18nForTests";

interface RenderOptions {
  route?: string;
}

export function renderWithProviders(
  ui: React.ReactNode,
  renderOptions: RenderOptions = {}
) {
  const { route } = renderOptions;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nTest}>{ui}</I18nextProvider>
    </MemoryRouter>
  );
}
