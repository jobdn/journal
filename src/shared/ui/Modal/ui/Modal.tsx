import React from "react";

import classes from "./Modal.module.scss";

import { cn } from "shared/lib";

import { Button, ButtonVariant } from "../../Button";
import { Portal } from "../../Portal";
import CloseIcon from "../assets/close-icon.svg";
import { ModalProps } from "../types/ModalProps";
import { Mods } from "shared/lib/classNames/classNames";

const ANIMATION_TIMEOUT = 300;

export const Modal: React.FC<ModalProps> = (props) => {
  const { children, isOpen, onClose, lazy, className } = props;

  const [isMounted, setIsMounted] = React.useState(false);
  const [isOpening, setIsOpening] = React.useState(false);
  const [isClosing, setClosing] = React.useState(false);
  const closingTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const openingTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const handleClose = React.useCallback(() => {
    setClosing(true);

    if (onClose) {
      closingTimeoutRef.current = setTimeout(() => {
        onClose();
        setClosing(false);
        setIsMounted(false);
      }, ANIMATION_TIMEOUT);
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
      if (closingTimeoutRef.current) {
        clearTimeout(closingTimeoutRef.current);
      }
    };
  }, [handleKeyboardClose, isOpen]);

  React.useEffect(() => {
    if (isOpen && !isMounted) {
      setIsMounted(true);
    }

    setIsOpening(true);
    openingTimeoutRef.current = setTimeout(() => {
      // To make smooth appearance of modal in the first render
      setIsOpening(false);
    });

    return () => {
      if (openingTimeoutRef.current) {
        clearTimeout(openingTimeoutRef.current);
      }
    };
  }, [isOpen, isMounted, lazy]);

  const preventPropagation = (e: React.MouseEvent) => e.stopPropagation();

  const mods: Mods = {
    [classes.opened]: isOpen,
    [classes.isClosing]: isClosing,
    [classes.isOpening]: isOpening,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={cn(classes.Modal, mods, [className])}>
        <div className={classes.overlay} onClick={handleClose}>
          <div className={classes.content} onClick={preventPropagation}>
            <div className={classes.header}>
              <Button variant={ButtonVariant.CLEAR} onClick={handleClose}>
                <CloseIcon className={classes.closeIcon} />
              </Button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
