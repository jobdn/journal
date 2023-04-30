import React from "react";
import { cn } from "shared/lib";
import { Mods } from "shared/lib/classNames/classNames";

import classes from "./Input.module.scss";
import EyeIcon from "shared/assets/svg/eye.svg";
import { Button, ButtonVariant } from "../Button";
import { InputProps } from "./types";

export const Input: React.FC<InputProps> = React.memo(function Input(props) {
  const {
    className,
    id = "",
    placeholder,
    type = "text",
    value,
    onChange,
    autoFocused,
    variant = "default",
    readonly,
    label,
    ...restProps
  } = props;
  const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const toggleFieldToText = () => {
    inputRef.current.type = "text";
  };

  const toggleFieldToPassword = () => {
    inputRef.current.type = "password";
  };

  const toggleFieldType = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const documentWidth = document.documentElement.clientWidth;
    const documentWidthIsLessMd = documentWidth < 1024;

    if (documentWidthIsLessMd) {
      // Show password when click only on tablet or less
      if (inputRef.current.type === "password") {
        toggleFieldToText();
      } else {
        toggleFieldToPassword();
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const inputIsPassword = type === "password";

  React.useEffect(() => {
    if (autoFocused) {
      inputRef.current.focus();
    }
  }, [autoFocused]);

  const mods: Mods = {
    [classes.readonly]: readonly,
  };

  return (
    <div className={cn("", {}, [className])}>
      {label && (
        <label className={classes.inputLabel} htmlFor={id}>
          {label}
        </label>
      )}

      <div className={cn(classes.InputContainer, mods, [className])}>
        {inputIsPassword && (
          <Button
            variant={ButtonVariant.CLEAR}
            className={classes.showPasswordBtn}
            onClick={toggleFieldType}
            onMouseDown={toggleFieldToText}
            onMouseLeave={toggleFieldToPassword}
            onMouseUp={toggleFieldToPassword}
          >
            <EyeIcon className="icon" />
          </Button>
        )}
        <input
          id={id}
          type={type}
          className={cn(
            classes.input,
            { [classes.password]: inputIsPassword },
            [classes[variant]]
          )}
          placeholder={placeholder}
          ref={inputRef}
          onChange={handleChange}
          value={value}
          {...restProps}
        />
      </div>
    </div>
  );
});
