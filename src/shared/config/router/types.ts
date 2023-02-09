export enum AvailableRoutes {
  ABOUT = "about",
  HOME = "home",
}

export const RoutePaths: Record<AvailableRoutes, string> = {
  [AvailableRoutes.HOME]: "/",
  [AvailableRoutes.ABOUT]: "/about",
};
