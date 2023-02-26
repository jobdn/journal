import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation("home");
  return (
    <>
      <h1>{t("title")}</h1>
      <Counter />
    </>
  );
};

export default HomePage;
