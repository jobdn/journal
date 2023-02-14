export enum AvailableRoutes {
  ABOUT = "about",
  HOME = "home",
  NOT_FOUND = "not-found",
}

export const RoutePaths: Record<AvailableRoutes, string> = {
  [AvailableRoutes.HOME]: "/",
  [AvailableRoutes.ABOUT]: "/about",
  [AvailableRoutes.NOT_FOUND]: "*",
};
