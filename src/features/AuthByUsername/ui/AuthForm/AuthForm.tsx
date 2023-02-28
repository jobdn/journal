import React from "react";
import { useTranslation } from "react-i18next";

import { cn } from "shared/lib";
import { Button, ButtonThemes } from "shared/ui/Button";
import { Input } from "shared/ui/Input";

import classes from "./AuthForm.module.scss";

interface AuthFormProps {
  className?: string;
}

export const AuthForm: React.FC<AuthFormProps> = ({ className }) => {
  const { t } = useTranslation();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  return (
    <form className={cn(classes.AuthForm, {}, [className])}>
      <Input
        value={username}
        onChange={handleUsernameChange}
        id="login"
        placeholder={t("username")}
        className={classes.input}
        autoFocused
        variant="fullWidth"
      />

      <Input
        value={password}
        onChange={handlePasswordChange}
        id="password"
        placeholder={t("password")}
        className={classes.input}
        type="password"
        variant="fullWidth"
      />

      <Button theme={ButtonThemes.FILLED_INVERTED} className={classes.authBtn}>
        {t("signIn")}
      </Button>
    </form>
  );
};
