import { useTranslation } from "react-i18next";
import { PageWrapper } from "widgets/PageWrapper";

const AdminPage = () => {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <h1>{t("admin")}</h1>
    </PageWrapper>
  );
};

export default AdminPage;
