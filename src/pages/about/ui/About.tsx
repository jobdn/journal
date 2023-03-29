import { useTranslation } from "react-i18next";
import { PageWrapper } from "shared/ui/PageWrapper";

const AboutPage = () => {
  const { t } = useTranslation("about");
  return (
    <PageWrapper>
      <h1>{t("title")}</h1>
      <h2>{t("subtitle")}</h2>
      <p>{t("text")}</p>
    </PageWrapper>
  );
};

export default AboutPage;
