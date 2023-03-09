import React from "react";
import { cn } from "shared/lib";

import classes from "./Input.module.scss";
import EyeIcon from "./assets/eye.svg";
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

  return (
    <div className={cn("", {}, [className])}>
      {placeholder && (
        <label className={classes.inputLabel} htmlFor={id}>
          {placeholder}
        </label>
      )}

      <div
        className={cn(
          classes.InputContainer,
          { [classes.readonly]: readonly },
          [className]
        )}
      >
        {inputIsPassword && (
          <Button
            variant={ButtonVariant.CLEAR}
            className={classes.showPasswordBtn}
            onClick={toggleFieldType}
            onMouseDown={toggleFieldToText}
            onMouseLeave={toggleFieldToPassword}
            onMouseUp={toggleFieldToPassword}
          >
            <EyeIcon />
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
          ref={inputRef}
          onChange={handleChange}
          value={value}
          {...restProps}
        />
      </div>
    </div>
  );
});
