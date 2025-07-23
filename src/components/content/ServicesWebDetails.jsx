import "./servicesWebDetails.scss";
import { t } from "i18next";

export default function ServicesWebDetails() {
  window.scrollTo(0, 0);
  return (
    <div class="plans">
      <div class="plan-box">
        <div class="plan-options">
          <p class="plan-name">{t("WEB_PACKAGE_STARTER")}</p>
          <div class="plan-description">
            {t("WEB_PACKAGE_STARTER_DESCRIPTION")}
          </div>
          <div class="plan-price">
            {t("WEB_PACKAGE_FROM")}{" "}
            <strong>{t("WEB_PACKAGE_STARTER_PRICE")}</strong>
          </div>
        </div>
      </div>

      <div class="plan-box best-seller">
        <div class="best-tag">{t("WEB_PACKAGE_TAG_BEST")}</div>
        <div class="plan-options">
          <p class="plan-name">{t("WEB_PACKAGE_PRO")}</p>
          <div class="plan-description">{t("WEB_PACKAGE_PRO_DESCRIPTION")}</div>
          <div class="plan-price">
            {t("WEB_PACKAGE_FROM")}{" "}
            <strong>{t("WEB_PACKAGE_PRO_PRICE")}</strong>
          </div>
        </div>
      </div>

      <div class="plan-box">
        <div class="plan-options">
          <p class="plan-name">{t("WEB_PACKAGE_PREMIUM")}</p>
          <div class="plan-description">
            {t("WEB_PACKAGE_PREMIUM_DESCRIPTION")}
          </div>
          <div class="plan-price">
            {t("WEB_PACKAGE_FROM")}{" "}
            <strong>{t("WEB_PACKAGE_PREMIUM_PRICE")}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
