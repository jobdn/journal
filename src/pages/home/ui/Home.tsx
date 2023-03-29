import { useTranslation } from "react-i18next";

import { PageWrapper } from "shared/ui/PageWrapper";

const HomePage = () => {
  const { t } = useTranslation("home");
  return (
    <PageWrapper>
      <h1>{t("title")}</h1>
    </PageWrapper>
  );
};

export default HomePage;
