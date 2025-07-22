//import React from "react";
import { GrFacebookOption, GrLinkedinOption, GrGithub } from "react-icons/gr";
import { FaXTwitter as GrX } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import packageJson from "../../package.json";
import { Link } from "react-router-dom";

export default function Footer() {
  let d = new Date();
  let year = d.getFullYear();
  const { t } = useTranslation();

  return (
    <div className="footer pure-g">
      <div className="pure-u-1 pure-u-md-2-3">
        <Link to="/privacy">{t("PRIVACY_LINK")}</Link>
        <br />
        Copyright &copy; {year} Dos Puntos Design. <em>NO 998 051 002 MVA</em>
        <br />- {t("copyright")} <small>v. {packageJson.version}</small>
      </div>
      <div className="pure-u-1 pure-u-md-1-3 text-right">
        <ul className="social-links ">
          <li>
            <a
              href="https://facebook.com/dospuntosdesign"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrFacebookOption />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/dospuntosdesign"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrX />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/3092605"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrLinkedinOption />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/dospuntos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrGithub />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
