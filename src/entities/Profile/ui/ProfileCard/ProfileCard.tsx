import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { cn } from "shared/lib";
import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input";
import { Text } from "shared/ui/Text";

import classes from "./ProfileCard.module.scss";
import { selectProfileIsLoading } from "../../model/selectors/selectProfileIsLoading/selectProfileIsLoading";
import { selectProfileData } from "../../model/selectors/selectProfileData/selectProfileData";
import { Loader } from "shared/ui/Loader";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation("profile");
  const profileData = useSelector(selectProfileData);
  const isLoading = useSelector(selectProfileIsLoading);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={cn(classes.ProfileCard, {}, [className])}>
      <div className={classes.header}>
        <Text title={t("title")} />
        <Button className={classes.editBtn}>{t("edit")}</Button>
      </div>

      <div className="body">
        <Input
          value={profileData?.lastname || ""}
          className={classes.input}
          placeholder={t("name")}
        ></Input>
        <Input
          value={profileData?.name || ""}
          className={classes.input}
          placeholder={t("lastname")}
        ></Input>
      </div>
    </div>
  );
};
