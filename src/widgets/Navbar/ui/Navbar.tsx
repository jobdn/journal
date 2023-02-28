import { AuthModal } from "features/AuthByUsername";
import React from "react";
import { useTranslation } from "react-i18next";

import { Button, ButtonThemes } from "shared/ui/Button";

import classes from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const { t } = useTranslation();
  const [modalIsOpen, setOpenModal] = React.useState(false);

  const handleOpenModal = React.useCallback(() => {
    setOpenModal(true);
  }, []);

  const handleCloseModal = React.useCallback(() => {
    setOpenModal(false);
  }, []);

  return (
    <nav className={classes.Navbar}>
      <Button theme={ButtonThemes.CLEAR_INVERTED} onClick={handleOpenModal}>
        {t("signIn")}
      </Button>

      <AuthModal onClose={handleCloseModal} isOpen={modalIsOpen} />
    </nav>
  );
};
