import { selectUserData, userActions } from "entities/User";
import { AuthModal } from "features/AuthByUsername";
import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib";
import { USER_DATA } from "shared/constants";

import { Button, ButtonVariant } from "shared/ui/Button";

import classes from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";

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
      {userData ? (
        <Button variant={ButtonVariant.CLEAR_INVERTED} onClick={handleLogout}>
          {t("sign_out")}
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
