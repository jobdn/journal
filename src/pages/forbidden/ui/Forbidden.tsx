import { useTranslation } from "react-i18next";
import { PageWrapper } from "widgets/PageWrapper";

const ForbiddenPage = () => {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <h1>{t("forbidden")}</h1>
    </PageWrapper>
  );
};

export default ForbiddenPage;
