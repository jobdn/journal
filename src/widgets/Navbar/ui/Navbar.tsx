import { useNavigate } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { selectUserData, userActions } from "entities/User";
import { AuthModal } from "features/AuthByUsername";
import { useAppDispatch } from "shared/lib";
import { USER_DATA } from "shared/constants";
import { Button, ButtonVariant } from "shared/ui/Button";
import { AppLink } from "shared/ui/AppLink";
import { AvailableRoutes, RoutePaths } from "shared/config/router";
import { Text } from "shared/ui/Text";

import classes from "./Navbar.module.scss";

import LogoutIcon from "../assets/logout.svg";

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
    <nav className={classes.Navbar}>
      <AppLink to={`${RoutePaths.home}`}>
        <Text title="Journal" titleClassName={classes.logo} />
      </AppLink>
      <AppLink
        to={`/${AvailableRoutes.ARTICLES}/${AvailableRoutes.NEW_ARTICLE}`}
        className={classes.new}
      >
        <Button variant={ButtonVariant.OUTLINED}>{t("new")}</Button>
      </AppLink>
      {userData ? (
        <Button variant={ButtonVariant.CLEAR} onClick={handleLogout}>
          <LogoutIcon className="inverted-icon" />
        </Button>
      ) : (
        <Button
          variant={ButtonVariant.CLEAR_INVERTED}
          onClick={handleOpenModal}
        >
          {t("sign_in")}
        </Button>
      )}

      <AuthModal onClose={handleCloseModal} isOpen={modalIsOpen} />
    </nav>
  );
};
