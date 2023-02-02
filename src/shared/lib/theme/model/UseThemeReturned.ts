import { Theme } from "./Theme";

export interface UseThemeReturned {
  theme: Theme;
  toggleTheme: () => void;
}
