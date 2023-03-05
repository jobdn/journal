import { profileReducer } from "entities/Profile";
import { useTranslation } from "react-i18next";
import { DynamicLoadingReducer } from "shared/lib";
import { AsyncReducers } from "shared/lib/components/DynamicLoadingReducer/DynamicLoadingReducer";

const lazyReducers: AsyncReducers = { profile: profileReducer };

const ProfilePage = () => {
  const { t } = useTranslation("profile");
  return (
    <DynamicLoadingReducer reducers={lazyReducers}>
      <>
        <h1>{t("title")}</h1>
      </>
    </DynamicLoadingReducer>
  );
};

export default ProfilePage;
