import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ClickToAction() {
  const { t } = useTranslation();

  return (
    <div className="highlight-section">
      <p>{t("ctaText")}</p>
      <p>
        <Link to="/contact" className="pure-button">
          {t("ctaBtn")}
        </Link>
      </p>
    </div>
  );
}

export default ClickToAction;
