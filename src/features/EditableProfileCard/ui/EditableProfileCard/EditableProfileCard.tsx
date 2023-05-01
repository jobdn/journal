import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  cn,
  useAppDispatch,
  DynamicLoadingReducer,
  useInitialEffect,
  AsyncReducers,
} from "shared/lib";
import { Button, ButtonVariant } from "shared/ui/Button";
import { Text } from "shared/ui/Text";
import { ProfileCard } from "entities/Profile";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { selectProfileData } from "../../model/selectors/selectProfileData/selectProfileData";
import { selectUserData } from "entities/User";
import { HStack, VStack } from "shared/ui/Stack";

import { selectProfileIsLoading } from "../../model/selectors/selectProfileIsLoading/selectProfileIsLoading";
import { selectProfileError } from "../../model/selectors/selectProfileError/selectProfileError";
import { selectReadonly } from "../../model/selectors/selectReadonly/selectReadonly";
import { profileActions, profileReducer } from "../../model/slice/profileSlice";
import { saveProfile } from "../../model/services/saveProfile/saveProfile";
import { selectProfileForm } from "../../model/selectors/selectProfileForm/selectProfileForm";
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";

import classes from "./EditableProfileCard.module.scss";

interface EditableProfileCardProps {
  className?: string;
  id: string;
}

const lazyReducers: AsyncReducers = { profile: profileReducer };

export const EditableProfileCard: React.FC<EditableProfileCardProps> = (
  props
) => {
  const { className, id } = props;
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();
  const form = useSelector(selectProfileForm);
  const isLoading = useSelector(selectProfileIsLoading);
  const error = useSelector(selectProfileError);
  const readonly = useSelector(selectReadonly);
  const profileData = useSelector(selectProfileData);
  const currentUserData = useSelector(selectUserData);

  useInitialEffect(() => {
    dispatch(fetchProfileData(id));
  });

  const userCanEditProfile = React.useMemo(
    () => profileData?.id === currentUserData?.id,
    [currentUserData?.id, profileData?.id]
  );

  const handleEditClick = React.useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const handleCancelEditClick = React.useCallback(() => {
    dispatch(profileActions.setReadonly(true));
    dispatch(profileActions.cleanFormData());
  }, [dispatch]);

  const handleSave = React.useCallback(() => {
    dispatch(saveProfile(form?.id));
    dispatch(profileActions.setReadonly(true));
  }, [dispatch, form]);

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
    <DynamicLoadingReducer reducers={lazyReducers}>
      <VStack gap="16" full className={cn("", {}, [className])}>
        <HStack justify="between" className={classes.header} full>
          <Text title={t("title")} />
          {readonly ? (
            userCanEditProfile && (
              <Button
                variant={ButtonVariant.FILLED_INVERTED}
                onClick={handleEditClick}
                className={classes.editBtn}
              >
                {t("edit", { ns: "translation" })}
              </Button>
            )
          ) : (
            <HStack gap="16">
              <Button
                variant={ButtonVariant.FILLED_DANGER}
                onClick={handleCancelEditClick}
              >
                {t("clean")}
              </Button>
              <Button
                variant={ButtonVariant.FILLED_SUCCESS}
                onClick={handleSave}
              >
                {t("save")}
              </Button>
            </HStack>
          )}
        </HStack>
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
      </VStack>
    </DynamicLoadingReducer>
  );
};
