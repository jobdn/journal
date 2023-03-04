import { selectUserData, userActions } from "entities/User";
import { AuthModal } from "features/AuthByUsername";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/config/store";
import { USER_DATA } from "shared/constants";

import { Button, ButtonThemes } from "shared/ui/Button";

import classes from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const { t } = useTranslation();
  const [modalIsOpen, setOpenModal] = React.useState(false);
  const userData = useSelector(selectUserData);
  const dispatch = useAppDispatch();

  const handleOpenModal = React.useCallback(() => {
    setOpenModal(true);
  }, []);

  const handleCloseModal = React.useCallback(() => {
    setOpenModal(false);
  }, []);

  const handleLogout = React.useCallback(() => {
    localStorage.removeItem(USER_DATA);
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <nav className={classes.Navbar}>
      {userData ? (
        <Button theme={ButtonThemes.CLEAR_INVERTED} onClick={handleLogout}>
          {t("sign_out")}
        </Button>
      ) : (
        <Button theme={ButtonThemes.CLEAR_INVERTED} onClick={handleOpenModal}>
          {t("sign_in")}
        </Button>
      )}

      <AuthModal onClose={handleCloseModal} isOpen={modalIsOpen} />
    </nav>
  );
};
