import { RouteProps } from "react-router-dom";

import { AvailableRoutes, RoutePaths } from "shared/config/router";

import { AboutPage } from "pages/about";
import { HomePage } from "pages/home";
import { NotFoundPage } from "pages/not-found";
import { ProfilePage } from "pages/profile";

export const routes: Record<AvailableRoutes, RouteProps> = {
  [AvailableRoutes.HOME]: {
    path: RoutePaths[AvailableRoutes.HOME],
    element: <HomePage />,
  },
  [AvailableRoutes.ABOUT]: {
    path: RoutePaths[AvailableRoutes.ABOUT],
    element: <AboutPage />,
  },
  [AvailableRoutes.PROFILE]: {
    path: RoutePaths[AvailableRoutes.PROFILE],
    element: <ProfilePage />,
  },
  [AvailableRoutes.NOT_FOUND]: {
    path: RoutePaths[AvailableRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
