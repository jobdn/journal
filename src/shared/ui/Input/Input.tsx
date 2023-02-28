import React, { InputHTMLAttributes } from "react";
import { cn } from "shared/lib";

import classes from "./Input.module.scss";
import EyeIcon from "./assets/eye.svg";
import { Button, ButtonThemes } from "../Button";

export type InputVariants = "fullWidth";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  className?: string;
  value: string;
  onChange?: (value: string) => void;
  autoFocused?: boolean;
  variant?: InputVariants;
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    className,
    id = "",
    placeholder,
    type = "text",
    value,
    onChange,
    autoFocused,
    variant,
    ...restProps
  } = props;
  const inputRef = React.useRef<HTMLInputElement>(null);

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
    <div className={cn(classes.Input, {}, [className])}>
      {placeholder && (
        <label className={classes.inputLabel} htmlFor={id}>
          {placeholder}
        </label>
      )}

      <div className={cn(classes.InputContainer, {}, [className])}>
        {inputIsPassword && (
          <Button
            theme={ButtonThemes.CLEAR}
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
          className={cn(classes.input, {}, [classes[variant]])}
          ref={inputRef}
          onChange={handleChange}
          value={value}
          {...restProps}
        />
      </div>
    </div>
  );
};
