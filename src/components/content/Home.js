import Portfolio from "../portfolio/Portfolio";
import ClickToAction from "../content/ClickToAction";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home({ lang }) {
  const { t } = useTranslation();
  return (
    <div className="home">
      <div className="highlight-section">
        <p>{t("intro")}</p>
        <Link to="/contact" className="pure-button">
          {t("contactBtn")}
        </Link>
      </div>
      <Portfolio />
      <ClickToAction />
    </div>
  );
}
