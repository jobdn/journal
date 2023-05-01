import { useParams } from "react-router-dom";

import { EditableProfileCard } from "features/EditableProfileCard";
import { PageWrapper } from "widgets/PageWrapper";

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return null;

  return (
    <PageWrapper>
      <EditableProfileCard id={id} />
    </PageWrapper>
  );
};

export default ProfilePage;
