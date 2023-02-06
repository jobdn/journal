export enum AvailableRoutes {
  MAIN = "main",
  ABOUT = "about",
  HOME = "home",
}

export const RoutePaths: Record<AvailableRoutes, string> = {
  [AvailableRoutes.MAIN]: "/",
  [AvailableRoutes.HOME]: "/home",
  [AvailableRoutes.ABOUT]: "/about",
};
