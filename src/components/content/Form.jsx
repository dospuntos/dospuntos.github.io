import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function MyForm() {
  const [status, setStatus] = useState("");
  const { t } = useTranslation();

  function submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  }

  return (
    <form
      onSubmit={submitForm}
      action="https://formspree.io/xleppaak"
      method="POST"
      id="form"
      className="topBefore"
    >
      {status !== "SUCCESS" ? (
        <div>
          <input
            id="name"
            name="name"
            required
            type="text"
            placeholder={t("FORM_INPUT_NAME")}
          />
          <input
            id="email"
            name="email"
            required
            type="text"
            placeholder={t("FORM_INPUT_EMAIL")}
          />
          <textarea
            id="message"
            name="message"
            type="text"
            placeholder={t("FORM_INPUT_MESSAGE")}
          ></textarea>
          <input id="submit" type="submit" value={t("FORM_INPUT_SEND")} />
        </div>
      ) : (
        <p>
          <strong>{t("FORM_INPUT_THANK_YOU")}</strong>
        </p>
      )}
      {status === "ERROR" && (
        <p>Ooops! There was an error. Please refresh the page and try again.</p>
      )}
    </form>
  );
}
