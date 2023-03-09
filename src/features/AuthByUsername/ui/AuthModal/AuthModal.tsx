import React from "react";
import { useTranslation } from "react-i18next";
import { CircleLoader } from "shared/ui/CircleLoader";
import { Modal, ModalProps } from "shared/ui/Modal";
import { AsyncAuthForm } from "../AuthForm/AuthForm.async";

import classes from "./AuthModal.module.scss";
interface AuthModalProps extends ModalProps {
  className?: string;
}

export const AuthModal: React.FC<AuthModalProps> = (props) => {
  const { isOpen, onClose } = props;
  const { t } = useTranslation();

  return (
    <Modal onClose={onClose} isOpen={isOpen} lazy>
      <React.Suspense
        fallback={
          <CircleLoader
            align="center"
            className={classes.fallback}
            text={t("form_loading_text")}
          />
        }
      >
        <AsyncAuthForm closeModal={onClose} />
      </React.Suspense>
    </Modal>
  );
};
