import { t } from "i18next";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="content-wrap privacy">
      <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
        <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>404</h1>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
          {t("ERROR_404_HEADING")}
        </h2>
        <p style={{ fontSize: "1.1rem", color: "#666", marginBottom: "2rem" }}>
          {t("ERROR_404_SUBHEADING")}
        </p>
        <Link to="/" className="pure-button">
          {t("home")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
