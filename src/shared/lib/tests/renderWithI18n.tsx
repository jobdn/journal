import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18nTest from "../../config/i18n/i18nForTests";

export function renderWithI18n(ui: React.ReactNode) {
  return render(<I18nextProvider i18n={i18nTest}>{ui}</I18nextProvider>);
}
