import Form from "./Form";
import { useTranslation } from "react-i18next";
import "./contact.scss";

function Contact() {
  const { t } = useTranslation();
  return (
    <div className="content-wrap">
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-3-5">
          <Form />
        </div>
        <div className="pure-u-1 pure-u-md-2-5">
          <ul className="contact-information">
            <li>{t("CONTACT_ADDRESS")}</li>
            <li>{t("CONTACT_PHONE")}</li>
            <li>{t("CONTACT_EMAIL")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
