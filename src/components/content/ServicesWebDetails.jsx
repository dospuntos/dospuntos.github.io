import "./servicesWebDetails.scss";
import { t } from "i18next";

export default function ServicesWebDetails() {
  window.scrollTo(0, 0);
  return (
    <div className="plans">
      <div className="plan-box">
        <div className="plan-options">
          <p className="plan-name">{t("WEB_PACKAGE_STARTER")}</p>
          <div className="plan-description">
            {t("WEB_PACKAGE_STARTER_DESCRIPTION")}
          </div>
          <div className="plan-price">
            {t("WEB_PACKAGE_FROM")}{" "}
            <strong>{t("WEB_PACKAGE_STARTER_PRICE")}</strong>
          </div>
        </div>
      </div>

      <div className="plan-box best-seller">
        <div className="best-tag">{t("WEB_PACKAGE_TAG_BEST")}</div>
        <div className="plan-options">
          <p className="plan-name">{t("WEB_PACKAGE_PRO")}</p>
          <div className="plan-description">
            {t("WEB_PACKAGE_PRO_DESCRIPTION")}
          </div>
          <div className="plan-price">
            {t("WEB_PACKAGE_FROM")}{" "}
            <strong>{t("WEB_PACKAGE_PRO_PRICE")}</strong>
          </div>
        </div>
      </div>

      <div className="plan-box">
        <div className="plan-options">
          <p className="plan-name">{t("WEB_PACKAGE_PREMIUM")}</p>
          <div className="plan-description">
            {t("WEB_PACKAGE_PREMIUM_DESCRIPTION")}
          </div>
          <div className="plan-price">
            {t("WEB_PACKAGE_FROM")}{" "}
            <strong>{t("WEB_PACKAGE_PREMIUM_PRICE")}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
