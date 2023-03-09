import React from "react";
import { useTranslation } from "react-i18next";

import { DynamicLoadingReducer, useAppDispatch } from "shared/lib";
import { AsyncReducers } from "shared/lib/components/DynamicLoadingReducer/DynamicLoadingReducer";
import {
  profileReducer,
  fetchProfileData,
  EditableProfileCard,
} from "features/EditableProfileCard";

const lazyReducers: AsyncReducers = { profile: profileReducer };

const ProfilePage = () => {
  const { t } = useTranslation("profile");
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicLoadingReducer reducers={lazyReducers}>
      <EditableProfileCard />
    </DynamicLoadingReducer>
  );
};

export default ProfilePage;
