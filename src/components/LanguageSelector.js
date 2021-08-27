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
        width={30}
        height={20}
        className={i18n.language === "no" ? "active" : ""}
        onClick={() => changeLanguage("no")}
      />
      <img
        src="img/en.gif"
        alt="English"
        width={30}
        height={20}
        className={i18n.language === "en" ? "active" : ""}
        onClick={() => changeLanguage("en")}
      />
      <img
        src="img/es.gif"
        alt="Español"
        width={30}
        height={20}
        className={i18n.language === "es" ? "active" : ""}
        onClick={() => changeLanguage("es")}
      />
    </div>
  );
}
