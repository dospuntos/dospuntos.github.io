import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./header/menu.scss";
import LanguageSelector from "./LanguageSelector";

function Header({ lang }) {
  const [showMenu, setShowMenu] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="header wrapper mt-150">
      <LanguageSelector />
      <div
        className={showMenu ? "button_container active" : "button_container"}
        id="toggle"
        onClick={() => setShowMenu(!showMenu)}
      >
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </div>
      <div className={showMenu ? "overlay open" : "overlay"} id="overlay">
        <nav className="overlay-menu">
          <ul>
            <li>
              <Link to="/" onClick={() => setShowMenu(false)}>
                {t("home")}
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setShowMenu(false)}>
                {t("services")}
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setShowMenu(false)}>
                {t("about")}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setShowMenu(false)}>
                {t("contact")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="main-logo">
        <Link to="/">
          <img
            src="./img/logo.png"
            alt="Dos Puntos Design"
            width={126}
            height={138}
          />
        </Link>
      </div>
      <div className="secondary-logo">
        <Link to="/">
          <img src="./img/logo-horizontal.png" alt="Dos Puntos Design" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
