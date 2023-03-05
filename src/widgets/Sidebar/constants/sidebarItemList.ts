import { SidebarItemType } from "../types/SidebarItemType";
import AboutIcon from "../assets/about.svg";
import HomeIcon from "../assets/home.svg";
import ProfileIcon from "../assets/profile.svg";
import { RoutePaths } from "shared/config/router";

export const sidebarItemList: SidebarItemType[] = [
  {
    Icon: HomeIcon,
    path: RoutePaths.home,
    translation: "sidebar.home",
  },
  {
    Icon: ProfileIcon,
    path: RoutePaths.profile,
    translation: "sidebar.profile",
  },
  {
    Icon: AboutIcon,
    path: RoutePaths.about,
    translation: "sidebar.about",
  },
];
