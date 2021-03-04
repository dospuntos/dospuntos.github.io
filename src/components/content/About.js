import ClickToAction from "components/content/ClickToAction";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <div className="content-wrap about">
        <h1>{t("aboutTitle")}</h1>
        <p>
          <strong>{t("aboutContentIntro")}</strong>
        </p>
        <p>{t("aboutContent")}</p>
        <p>
          <br />
          Johan Wagenheim&nbsp;-&nbsp;CEO
          <br />
          <br /> <img src="/img/signature.png" alt="Johan Wagenheim" />
        </p>
      </div>
      <ClickToAction />
    </>
  );
}
