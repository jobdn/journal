import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation("about");
  return (
    <div>
      <h1>{t("title")}</h1>
      <h2>{t("subtitle")}</h2>
      <p>{t("text")}</p>
    </div>
  );
};

export default AboutPage;
