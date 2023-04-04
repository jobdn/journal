import { RouteProps } from "react-router-dom";

import { AvailableRoutes, RoutePaths } from "shared/config/router";

import { AboutPage } from "pages/about";
import { HomePage } from "pages/home";
import { NotFoundPage } from "pages/not-found";
import { ProfilePage } from "pages/profile";
import { DetailedArticlePage } from "pages/detailed-article";
import { ArticlesPage } from "pages/articles";
import { ArticleEditPage } from "pages/article-edit";
import { ArticleNewPage } from "pages/article-new";

export type CustomRouteProps = RouteProps & {
  authOnly?: boolean;
};

export type RoutesMapElement = Record<AvailableRoutes, CustomRouteProps>;

export const routes: RoutesMapElement = {
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
  [AvailableRoutes.NEW_ARTICLE]: {
    path: RoutePaths[AvailableRoutes.NEW_ARTICLE],
    element: <ArticleNewPage />,
    authOnly: true,
  },
  [AvailableRoutes.EDIT_ARTICLE]: {
    path: RoutePaths[AvailableRoutes.EDIT_ARTICLE],
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AvailableRoutes.ARTICLES]: {
    path: RoutePaths[AvailableRoutes.ARTICLES],
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AvailableRoutes.DETAILED_ARTICLE]: {
    path: RoutePaths[AvailableRoutes.DETAILED_ARTICLE],
    element: <DetailedArticlePage />,
    authOnly: true,
  },
  [AvailableRoutes.NOT_FOUND]: {
    path: RoutePaths[AvailableRoutes.NOT_FOUND],
    element: <NotFoundPage />,
  },
};
