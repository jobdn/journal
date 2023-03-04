import React from "react";
import { Modal, ModalProps } from "shared/ui/Modal";
import AuthForm from "../AuthForm/AuthForm";

interface AuthModalProps extends ModalProps {
  className?: string;
}

export const AuthModal: React.FC<AuthModalProps> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal onClose={onClose} isOpen={isOpen} lazy>
      <AuthForm closeModal={onClose} />
    </Modal>
  );
};
