import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { cn, useAppDispatch } from "shared/lib";
import { Button, ButtonVariant } from "shared/ui/Button";
import { Text } from "shared/ui/Text";
import { ProfileCard } from "entities/Profile";

import { selectProfileIsLoading } from "../../model/selectors/selectProfileIsLoading/selectProfileIsLoading";
import { selectProfileError } from "../../model/selectors/selectProfileError/selectProfileError";
import { selectReadonly } from "../../model/selectors/selectReadonly/selectReadonly";
import { profileActions } from "../../model/slice/profileSlice";
import { saveProfile } from "../../model/service/saveProfile/saveProfile";
import { selectProfileForm } from "../../model/selectors/selectProfileForm/selectProfileForm";

import classes from "./EditableProfileCard.module.scss";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

interface EditableProfileCardProps {
  className?: string;
}

export const EditableProfileCard: React.FC<EditableProfileCardProps> = ({
  className,
}) => {
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();
  const form = useSelector(selectProfileForm);
  const isLoading = useSelector(selectProfileIsLoading);
  const error = useSelector(selectProfileError);
  const readonly = useSelector(selectReadonly);

  // todo: сделать редьюсер, который сразу изменяет весь объект
  const handleEditClick = React.useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const handleCancelEditClick = React.useCallback(() => {
    dispatch(profileActions.setReadonly(true));
    dispatch(profileActions.cleanFormData());
  }, [dispatch]);

  const handleSave = React.useCallback(() => {
    dispatch(saveProfile());
    dispatch(profileActions.setReadonly(true));
  }, [dispatch]);

  const handleNameChange = React.useCallback(
    (value: string) => {
      dispatch(profileActions.updateForm({ name: value }));
    },
    [dispatch]
  );

  const handleLastnameChange = React.useCallback(
    (value: string) => {
      dispatch(profileActions.updateForm({ lastname: value }));
    },
    [dispatch]
  );

  const handleAgeChange = React.useCallback(
    (value: string) => {
      const validatedAge = (value.match(/\d+/g) || []).join("");
      dispatch(profileActions.updateForm({ age: +validatedAge }));
    },
    [dispatch]
  );

  const handleCityChange = React.useCallback(
    (value: string) => {
      dispatch(profileActions.updateForm({ city: value }));
    },
    [dispatch]
  );

  const handleAvatarChange = React.useCallback(
    (value: string) => {
      dispatch(profileActions.updateForm({ avatar: value }));
    },
    [dispatch]
  );

  const handleUsernameChange = React.useCallback(
    (value: string) => {
      dispatch(profileActions.updateForm({ username: value }));
    },
    [dispatch]
  );

  const handleCountryChange = React.useCallback(
    (value: Country) => {
      dispatch(profileActions.updateForm({ country: value }));
    },
    [dispatch]
  );
  const handleCurrencyChange = React.useCallback(
    (value: Currency) => {
      dispatch(profileActions.updateForm({ currency: value }));
    },
    [dispatch]
  );

  return (
    <div className={cn(classes.EditableProfileCard, {}, [className])}>
      <div className={classes.header}>
        <Text title={t("title")} />
        {readonly ? (
          <Button
            variant={ButtonVariant.FILLED_INVERTED}
            onClick={handleEditClick}
            className={classes.editBtn}
          >
            {t("edit")}
          </Button>
        ) : (
          <>
            <Button
              variant={ButtonVariant.FILLED_DANGER}
              onClick={handleCancelEditClick}
              className={classes.cleanBtn}
            >
              {t("clean")}
            </Button>
            <Button
              variant={ButtonVariant.FILLED_SUCCESS}
              onClick={handleSave}
              className={classes.saveBtn}
            >
              {t("save")}
            </Button>
          </>
        )}
      </div>
      <ProfileCard
        data={form}
        isLoading={isLoading}
        error={error}
        readonly={readonly}
        onNameChange={handleNameChange}
        onLastnameChange={handleLastnameChange}
        onAgeChange={handleAgeChange}
        onCityChange={handleCityChange}
        onAvatarChange={handleAvatarChange}
        onUsernameChange={handleUsernameChange}
        onCountryChange={handleCountryChange}
        onCurrencyChange={handleCurrencyChange}
      />
    </div>
  );
};
