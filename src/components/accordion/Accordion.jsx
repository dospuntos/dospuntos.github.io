import { useState } from "react";
import AccordionItem from "./AccordionItem";
import { useTranslation } from "react-i18next";
import "./scss/main.scss";

const Accordion = ({ questionsAnswers }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();

  const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : "";
    const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <AccordionItem
        key={index}
        showDescription={showDescription}
        fontWeightBold={fontWeightBold}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });

  return (
    <div className="faq">
      <h1 className="faq__title">{t("FAQ_HEADING")}</h1>
      <dl className="faq__list">{renderedQuestionsAnswers}</dl>
    </div>
  );
};

export default Accordion;