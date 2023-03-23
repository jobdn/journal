import React from "react";
import { useTranslation } from "react-i18next";

import { cn } from "shared/lib";
import { Input } from "shared/ui/Input";
import { Text } from "shared/ui/Text";

import classes from "./ProfileCard.module.scss";

import { Profile } from "../../types/Profile";
import { CircleLoader } from "shared/ui/CircleLoader";
import { Avatar } from "shared/ui/Avatar";
import { Country, CountrySelect } from "entities/Country";
import { Currency, CurrencySelect } from "entities/Currency";

interface ProfileCardProps {
  className?: string;
  isLoading?: boolean;
  error?: string;
  data?: Profile;
  readonly?: boolean;
  onNameChange?: (value: string) => void;
  onLastnameChange?: (value: string) => void;
  onAgeChange?: (value: string) => void;
  onCityChange?: (value: string) => void;
  onAvatarChange?: (value: string) => void;
  onUsernameChange?: (value: string) => void;
  onCountryChange?: (value: Country) => void;
  onCurrencyChange?: (value: Currency) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  const {
    className,
    isLoading,
    error,
    data,
    readonly,
    onAgeChange,
    onCityChange,
    onLastnameChange,
    onNameChange,
    onAvatarChange,
    onUsernameChange,
    onCountryChange,
    onCurrencyChange,
  } = props;
  const { t } = useTranslation("profile");

  if (isLoading) {
    return (
      <div className={cn(classes.ProfileCard, {}, [className])}>
        <CircleLoader align="center" text={t("profile_loading_text")} />
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn(classes.ProfileCard, {}, [className])}>
        <Text title={t(error)} variant="error" align="center" />
      </div>
    );
  }

  return (
    <div
      className={cn(classes.ProfileCard, { [classes["readonly"]]: readonly }, [
        className,
      ])}
    >
      <div className={classes.avatarWrapper}>
        <Avatar
          src={data?.avatar || ""}
          alt="User avatar"
          size={100}
          variant="circle"
        />
      </div>
      <Input
        value={data?.name || ""}
        className={classes.input}
        label={t("name")}
        variant="fullWidth"
        disabled={readonly}
        onChange={onNameChange}
        readonly={readonly}
      />
      <Input
        value={data?.lastname || ""}
        className={classes.input}
        label={t("lastname")}
        variant="fullWidth"
        disabled={readonly}
        onChange={onLastnameChange}
        readonly={readonly}
      />
      <Input
        value={data?.age || 0}
        className={classes.input}
        type="number"
        label={t("age")}
        variant="fullWidth"
        disabled={readonly}
        onChange={onAgeChange}
        readonly={readonly}
      />
      <Input
        value={data?.city || ""}
        className={classes.input}
        label={t("city")}
        variant="fullWidth"
        disabled={readonly}
        onChange={onCityChange}
        readonly={readonly}
      />
      <Input
        value={data?.avatar || ""}
        className={classes.input}
        label={t("avatar")}
        variant="fullWidth"
        disabled={readonly}
        onChange={onAvatarChange}
        readonly={readonly}
      />
      <Input
        value={data?.username || ""}
        className={classes.input}
        label={t("username")}
        variant="fullWidth"
        disabled={readonly}
        onChange={onUsernameChange}
        readonly={readonly}
      />

      <CountrySelect
        className={classes.select}
        value={data?.country}
        onChange={onCountryChange}
        readonly={readonly}
      />
      <CurrencySelect
        className={classes.select}
        value={data?.currency}
        onChange={onCurrencyChange}
        readonly={readonly}
      />
    </div>
  );
};
