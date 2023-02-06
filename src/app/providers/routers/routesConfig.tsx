import { RouteProps } from "react-router-dom";

import { AvailableRoutes, RoutePaths } from "shared/config/routers";

import { AboutPage } from "pages/about";
import { HomePage } from "pages/home";

export const routes: Record<AvailableRoutes, RouteProps> = {
  [AvailableRoutes.MAIN]: {
    path: RoutePaths[AvailableRoutes.MAIN],
    element: <h1>Main</h1>,
  },
  [AvailableRoutes.HOME]: {
    path: RoutePaths[AvailableRoutes.HOME],
    element: <HomePage />,
  },
  [AvailableRoutes.ABOUT]: {
    path: RoutePaths[AvailableRoutes.ABOUT],
    element: <AboutPage />,
  },
};
