import React from "react";
import { useTranslation } from "react-i18next";

import { Button, ButtonThemes } from "shared/ui/Button";
import { Modal } from "shared/ui/Modal";

import classes from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const { t } = useTranslation();
  const [modalIsOpen, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = React.useCallback(() => {
    setOpenModal(false);
  }, []);

  return (
    <nav className={classes.Navbar}>
      <Button theme={ButtonThemes.CLEAR_INVERTED} onClick={handleOpenModal}>
        {t("navbar.signIn")}
      </Button>
      <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
        <input type="text" />
        <br />
        <input type="text" />
      </Modal>
    </nav>
  );
};
