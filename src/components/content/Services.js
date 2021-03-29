import ClickToAction from "../content/ClickToAction";
import { GiPencilBrush } from "react-icons/gi";
import { IoIosDesktop } from "react-icons/io";
import { DiCodeBadge } from "react-icons/di";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Accordion from "components/accordion/Accordion";

const questionsAnswers = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
  },
  {
    question: "Can I cancel my subscription?",
    answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
  },
  {
    question: "Do you provide additional support?",
    answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
  },
];

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
            <IoIosDesktop size="64" />
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
      <div className="faq content-wrap">
        <Accordion questionsAnswers={questionsAnswers} />
      </div>
      <ClickToAction />
    </>
  );
}
