import React from "react";
import { ProfileCard, profileReducer } from "entities/Profile";
import { fetchProfileData } from "entities/Profile";
import { useTranslation } from "react-i18next";
import { DynamicLoadingReducer, useAppDispatch } from "shared/lib";
import { AsyncReducers } from "shared/lib/components/DynamicLoadingReducer/DynamicLoadingReducer";

const lazyReducers: AsyncReducers = { profile: profileReducer };

const ProfilePage = () => {
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicLoadingReducer reducers={lazyReducers}>
      <ProfileCard />
    </DynamicLoadingReducer>
  );
};

export default ProfilePage;
