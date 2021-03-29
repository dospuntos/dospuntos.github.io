import ClickToAction from "./ClickToAction";
import PrivacyNo from "./PrivacyNo";
import PrivacyEs from "./PrivacyEs";
import PrivacyEn from "./PrivacyEn";

import { useTranslation } from "react-i18next";

export default function Privacy() {
  const { i18n } = useTranslation();
  let privacyComp;
  switch (i18n.language) {
    case "no":
      privacyComp = <PrivacyNo />;
      break;
    case "es":
      privacyComp = <PrivacyEs />;
      break;
    default:
      privacyComp = <PrivacyEn />;
  }

  return (
    <>
      <div className="content-wrap privacy">{privacyComp}</div>
      <ClickToAction />
    </>
  );
}
