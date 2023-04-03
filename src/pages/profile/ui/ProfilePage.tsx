import { useParams } from "react-router-dom";

import {
  DynamicLoadingReducer,
  useAppDispatch,
  useInitialEffect,
} from "shared/lib";
import { AsyncReducers } from "shared/lib/components/DynamicLoadingReducer/DynamicLoadingReducer";
import {
  profileReducer,
  fetchProfileData,
  EditableProfileCard,
} from "features/EditableProfileCard";
import { PageWrapper } from "widgets/PageWrapper";

const lazyReducers: AsyncReducers = { profile: profileReducer };

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  useInitialEffect(() => {
    dispatch(fetchProfileData(id));
  });

  return (
    <PageWrapper>
      <DynamicLoadingReducer reducers={lazyReducers}>
        <EditableProfileCard />
      </DynamicLoadingReducer>
    </PageWrapper>
  );
};

export default ProfilePage;
