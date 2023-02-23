import React from "react";

import classes from "./Modal.module.scss";

import { cn } from "shared/lib";
import { Button, ButtonThemes } from "../Button";
import { Portal } from "../Portal";
import CloseIcon from "./assets/close-icon.svg";

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { children, isOpen, onClose, className } = props;
  const [isClosing, setClosing] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>();

  const handleClose = React.useCallback(() => {
    setClosing(true);

    if (onClose) {
      timeoutRef.current = setTimeout(() => {
        onClose();
        setClosing(false);
      }, 300);
    }
  }, [onClose]);

  const handleKeyboardClose = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    },
    [handleClose]
  );

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyboardClose);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyboardClose);
      clearTimeout(timeoutRef.current);
    };
  }, [handleKeyboardClose, isOpen]);

  const preventPropagation = (e: React.MouseEvent) => e.stopPropagation();

  const mods = {
    [classes.opened]: isOpen,
    [classes.isClosing]: isClosing,
  };

  return (
    <Portal>
      <div className={cn(classes.Modal, mods, [className])}>
        <div className={classes.overlay} onClick={handleClose}>
          <div className={classes.content} onClick={preventPropagation}>
            <div className={classes.header}>
              <Button
                className={classes.closeBtn}
                theme={ButtonThemes.CLEAR}
                onClick={handleClose}
              >
                <CloseIcon className="icon" />
              </Button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
