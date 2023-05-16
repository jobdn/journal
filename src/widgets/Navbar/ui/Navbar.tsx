import { useNavigate } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { isAdmin, selectUserData, userActions } from "entities/User";
import { AuthModal } from "features/AuthByUsername";
import { useAppDispatch } from "shared/lib";
import { USER_DATA } from "shared/constants";
import { Button, ButtonVariant } from "shared/ui/Button";
import { AppLink } from "shared/ui/AppLink";
import { AvailableRoutes, RoutePaths } from "shared/config/router";
import { Text } from "shared/ui/Text";
import { Dropdown } from "shared/ui/Dropdown";

import classes from "./Navbar.module.scss";

import { Avatar } from "shared/ui/Avatar";
import { HStack } from "shared/ui/Stack";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const { t } = useTranslation();
  const [modalIsOpen, setOpenModal] = React.useState(false);
  const userData = useSelector(selectUserData);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleOpenModal = React.useCallback(() => {
    setOpenModal(true);
  }, []);

  const handleCloseModal = React.useCallback(() => {
    setOpenModal(false);
  }, []);

  const handleLogout = React.useCallback(() => {
    localStorage.removeItem(USER_DATA);
    dispatch(userActions.logout());
    navigate("/", { replace: true });
  }, [dispatch, navigate]);

  return (
    <HStack justify="between" align="center" className={classes.Navbar}>
      <AppLink to={`${RoutePaths.home}`}>
        <Text title="Journal" titleClassName={classes.logo} />
      </AppLink>

      {userData ? (
        <Dropdown
          trigger={
            <Avatar
              src={userData?.avatar ?? ""}
              size={30}
              variant="circle"
              alt="User avatar"
            />
          }
          options={[
            ...(isAdmin(userData?.roles)
              ? [
                  {
                    content: t("admin"),
                    href: RoutePaths.admin,
                  },
                ]
              : []),
            {
              content: t("new"),
              href: `/${AvailableRoutes.ARTICLES}/${AvailableRoutes.NEW_ARTICLE}`,
            },
            {
              content: t("sidebar.profile"),
              href: `/${AvailableRoutes.PROFILE}/${userData.id}`,
            },
            {
              content: t("sign_out"),
              action: handleLogout,
            },
          ]}
        />
      ) : (
        <Button
          variant={ButtonVariant.CLEAR_INVERTED}
          onClick={handleOpenModal}
        >
          {t("sign_in")}
        </Button>
      )}
      <AuthModal onClose={handleCloseModal} isOpen={modalIsOpen} />
    </HStack>
  );
};
