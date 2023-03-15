export enum AvailableRoutes {
  ABOUT = "about",
  HOME = "home",
  PROFILE = "profile",
  ARTICLES = "articles",
  DETAILED_ARTICLE = "article",
  NOT_FOUND = "not-found",
}

export const RoutePaths: Record<AvailableRoutes, string> = {
  [AvailableRoutes.HOME]: "/",
  [AvailableRoutes.ABOUT]: "/about",
  [AvailableRoutes.PROFILE]: "/profile",
  [AvailableRoutes.ARTICLES]: "/articles",
  [AvailableRoutes.DETAILED_ARTICLE]: "/articles/:id",
  [AvailableRoutes.NOT_FOUND]: "*",
};
