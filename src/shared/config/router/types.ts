export enum AvailableRoutes {
  ABOUT = "about",
  HOME = "home",
  PROFILE = "profile",
  NOT_FOUND = "not-found",
}

export const RoutePaths: Record<AvailableRoutes, string> = {
  [AvailableRoutes.HOME]: "/",
  [AvailableRoutes.ABOUT]: "/about",
  [AvailableRoutes.PROFILE]: "/profile",
  [AvailableRoutes.NOT_FOUND]: "*",
};
