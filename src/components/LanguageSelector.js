import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="LanguageSelector language-switcher">
      <img
        src="img/no.gif"
        alt="Norsk"
        className={i18n.language === "no" ? "active" : ""}
        onClick={() => changeLanguage("no")}
      />
      <img
        src="img/en.gif"
        alt="English"
        className={i18n.language === "en" ? "active" : ""}
        onClick={() => changeLanguage("en")}
      />
      <img
        src="img/es.gif"
        alt="Español"
        className={i18n.language === "es" ? "active" : ""}
        onClick={() => changeLanguage("es")}
      />
    </div>
  );
}
