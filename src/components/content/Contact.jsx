import Form from "./Form";
import { useTranslation } from "react-i18next";
import "./contact.scss";

function Contact() {
  const { t } = useTranslation();
  return (
    <div className="content-wrap">
      <div className="contact-intro">
        <h3>{t("CONTACT_INTRO")}</h3>
      </div>
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-3-5">
          <Form />
        </div>
        <div className="pure-u-1 pure-u-md-2-5">
          <h3 className="text-center">{t("CONTACT_INFORMATION_HEADER")}</h3>
          <p className="text-center">{t("CONTACT_INFORMATION_TEXT")}</p>
          <img src="/img/contact-us.jpg" alt="Contact Information" />
          <ul className="contact-information text-center">
            <li style={{ whiteSpace: "pre" }}>{t("CONTACT_ADDRESS")}</li>
            <li>
              <a className="pure-button" href="tel:+59165605287">
                {t("CONTACT_PHONE")}
              </a>
            </li>
            <li>
              <a
                className="pure-button"
                href="m&#97;ilto&#58;inf&#111;&#64;d%6&#70;s%70&#117;%&#54;Et&#37;6F&#115;&#46;&#110;&#111;"
              >
                {t("CONTACT_EMAIL")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
