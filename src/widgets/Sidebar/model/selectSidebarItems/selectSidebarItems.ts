import { createSelector } from "@reduxjs/toolkit";
import { selectUserState } from "entities/User";
import { SidebarItemType } from "../../types/SidebarItemType";
import AboutIcon from "../../assets/about.svg";
import HomeIcon from "../../assets/home.svg";
import ProfileIcon from "../../assets/profile.svg";
import ArticlesIcon from "../../assets/articles.svg";
import { AvailableRoutes } from "shared/config/router";

export const selectSidebarItems = createSelector(selectUserState, (user) => {
  const sidebarItemList: SidebarItemType[] = [
    {
      Icon: HomeIcon,
      path: AvailableRoutes.HOME,
      translation: "sidebar.home",
    },
    {
      Icon: AboutIcon,
      path: AvailableRoutes.ABOUT,
      translation: "sidebar.about",
    },
  ];

  if (user.isAuth) {
    sidebarItemList.push(
      {
        Icon: ProfileIcon,
        path: AvailableRoutes.PROFILE + "/" + user.userData?.id,
        translation: "sidebar.profile",
        authOnly: true,
      },
      {
        Icon: ArticlesIcon,
        path: AvailableRoutes.ARTICLES,
        translation: "sidebar.articles",
        authOnly: true,
      }
    );
  }

  return sidebarItemList;
});
