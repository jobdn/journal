import React from "react";

import { DynamicLoadingReducer, useAppDispatch } from "shared/lib";
import { AsyncReducers } from "shared/lib/components/DynamicLoadingReducer/DynamicLoadingReducer";
import {
  profileReducer,
  fetchProfileData,
  EditableProfileCard,
} from "features/EditableProfileCard";

const lazyReducers: AsyncReducers = { profile: profileReducer };

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  return (
    <DynamicLoadingReducer reducers={lazyReducers}>
      <EditableProfileCard />
    </DynamicLoadingReducer>
  );
};

export default ProfilePage;
