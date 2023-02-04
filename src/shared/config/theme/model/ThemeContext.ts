import { createContext } from "react";

import { ThemeContextProps } from "./ThemeContextProps";

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";
