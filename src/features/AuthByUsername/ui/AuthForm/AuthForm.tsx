import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib";

import { cn, DynamicLoadingReducer } from "shared/lib";
import { AsyncReducers } from "shared/lib/components/DynamicLoadingReducer/DynamicLoadingReducer";
import { Button, ButtonThemes } from "shared/ui/Button";
import { Input } from "shared/ui/Input";
import { Text } from "shared/ui/Text";

import { authActions, authReducer } from "../../model/slice/authSlice";
import { selectError } from "../../model/selectors/selectError/selectError";
import { selectIsLoading } from "../../model/selectors/selectIsLoading/selectIsLoading";
import { selectPassword } from "../../model/selectors/selectPassword/selectPassword";
import { selectUsername } from "../../model/selectors/selectUsername/selectUsername";
import { authByUsername } from "../../model/thunks/authByUsername/authByUsername";

import classes from "./AuthForm.module.scss";

export interface AuthFormProps {
  className?: string;
  closeModal: () => void;
}

const asyncAuthReducer: AsyncReducers = { auth: authReducer };

const AuthForm: React.FC<AuthFormProps> = React.memo((props) => {
  const { className, closeModal } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(selectUsername);
  const password = useSelector(selectPassword);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleUsernameChange = React.useCallback(
    (value: string) => {
      dispatch(authActions.setUsername({ username: value }));
    },
    [dispatch]
  );

  const handlePasswordChange = React.useCallback(
    (value: string) => {
      dispatch(authActions.setPassword({ password: value }));
    },
    [dispatch]
  );

  const handleLogin = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch(authByUsername({ password, username }))
      .unwrap()
      .then(() => {
        closeModal();
      });
  };

  return (
    <DynamicLoadingReducer reducers={asyncAuthReducer}>
      <form className={cn(classes.AuthForm, {}, [className])}>
        <Text title={t("login_form_title")} className={classes.title} />
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

        {error && <Text text={error} variant="error" />}

        <Button
          theme={ButtonThemes.FILLED_INVERTED}
          className={classes.authBtn}
          onClick={handleLogin}
          disabled={isLoading}
        >
          {t("sign_in")}
        </Button>
      </form>
    </DynamicLoadingReducer>
  );
});

export default AuthForm;
