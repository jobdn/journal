export enum AvailableRoutes {
  ABOUT = "about",
  HOME = "home",
  PROFILE = "profile",
  ARTICLES = "articles",
  DETAILED_ARTICLE = "article",
  NEW_ARTICLE = "new",
  EDIT_ARTICLE = "edit",
  NOT_FOUND = "not-found",
}

export const RoutePaths: Record<AvailableRoutes, string> = {
  [AvailableRoutes.HOME]: "/",
  [AvailableRoutes.ABOUT]: "/about",
  [AvailableRoutes.PROFILE]: "/profile/:id",
  [AvailableRoutes.ARTICLES]: "/articles",
  [AvailableRoutes.NEW_ARTICLE]: "/articles/new",
  [AvailableRoutes.EDIT_ARTICLE]: "/articles/:id/edit",
  [AvailableRoutes.DETAILED_ARTICLE]: "/articles/:id",
  [AvailableRoutes.NOT_FOUND]: "*",
};
