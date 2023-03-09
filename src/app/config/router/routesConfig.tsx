import { RouteProps } from "react-router-dom";

import { AvailableRoutes, RoutePaths } from "shared/config/router";

import { AboutPage } from "pages/about";
import { HomePage } from "pages/home";
import { NotFoundPage } from "pages/not-found";
import { ProfilePage } from "pages/profile";

export type CustomRouteProps = RouteProps & {
  authOnly?: boolean;
};

export const routes: Record<AvailableRoutes, CustomRouteProps> = {
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
    authOnly: true,
  },
  [AvailableRoutes.NOT_FOUND]: {
    path: RoutePaths[AvailableRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
