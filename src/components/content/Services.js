import ClickToAction from "../content/ClickToAction";
import { GiPencilBrush } from "react-icons/gi";
import { IoIosDesktop } from "react-icons/io";
import { DiCodeBadge } from "react-icons/di";
import { useTranslation } from "react-i18next";
import Faq from "react-faq-component";
import { Helmet } from "react-helmet";

const FAQ_COUNT = 5;

export default function Services() {
  const { t } = useTranslation();

  let questionsAnswers = [];
  for (let i = 1; i < FAQ_COUNT + 1; i++) {
    questionsAnswers.push({
      title: t(`Q${i}`),
      content: t(`A${i}`),
    });
  }

  const data = {
    title: t("FAQ_HEADING"),
    rows: questionsAnswers,
  };

  return (
    <>
      <Helmet>
        <title>{t("TAG_TITLE_OUR_SERVICES")} - Dos Puntos Design</title>
        <meta name="description" content={t("TAG_DESCRIPTION_OUR_SERVICES")} />
      </Helmet>
      <div className="services content-wrap">
        <h1>{t("servicesTitle")}</h1>
        <div className="pure-g">
          <div className="pure-u-1 pure-u-md-1-3 text-center fixed-button-container">
            <IoIosDesktop size="64" />
            <h3>{t("servicesWebTitle")}</h3>
            <p>{t("servicesWebContent")}</p>
            <a className="pure-button fixed-button" href="/contact">
              Mer informasjon...
            </a>
          </div>
          <div className="pure-u-1 pure-u-md-1-3 text-center fixed-button-container">
            <GiPencilBrush size="64" />
            <h3>{t("servicesGraphicTitle")}</h3>
            <p>{t("servicesGraphicContent")}</p>
            <a className="pure-button fixed-button" href="/contact">
              Detaljer...
            </a>
          </div>
          <div className="pure-u-1 pure-u-md-1-3 text-center fixed-button-container">
            <DiCodeBadge size="64" />
            <h3>{t("servicesCustomTitle")}</h3>
            <p>{t("servicesCustomContent")}</p>
            <a className="pure-button fixed-button" href="/contact">
              Kontakt oss
            </a>
          </div>
        </div>
      </div>
      <div className="faq content-wrap">
        <Faq data={data} />
      </div>
      <ClickToAction />
    </>
  );
}
