import ClickToAction from "../content/ClickToAction";
import { GiSpiderWeb, GiPencilBrush } from "react-icons/gi";
import { DiCodeBadge } from "react-icons/di";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export default function Services() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("TAG_TITLE_OUR_SERVICES")} - Dos Puntos Design</title>
        <meta name="description" content={t("TAG_DESCRIPTION_OUR_SERVICES")} />
      </Helmet>
      <div className="services content-wrap">
        <h1>{t("servicesTitle")}</h1>
        <div className="pure-g">
          <div className="pure-u-1 pure-u-md-1-3 text-center">
            <GiSpiderWeb size="64" />
            <h3>{t("servicesWebTitle")}</h3>
            <p>{t("servicesWebContent")}</p>
          </div>
          <div className="pure-u-1 pure-u-md-1-3 text-center">
            <GiPencilBrush size="64" />
            <h3>{t("servicesGraphicTitle")}</h3>
            <p>{t("servicesGraphicContent")}</p>
          </div>
          <div className="pure-u-1 pure-u-md-1-3 text-center">
            <DiCodeBadge size="64" />
            <h3>{t("servicesCustomTitle")}</h3>
            <p>{t("servicesCustomContent")}</p>
          </div>
        </div>
      </div>
      <ClickToAction />
    </>
  );
}
