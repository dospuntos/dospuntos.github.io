import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  let location = useLocation();
  let title = "";
  let image = "/img/hero-image";

  switch (location.pathname) {
    case "/about":
      title = t("aboutTitle");
      image = "/img/hero-image-about";
      break;
    case "/services":
      title = t("servicesTitle");
      image = "/img/hero-image-services";
      break;
    case "/contact":
      title = t("contactTitle");
      image = "/img/hero-image-contact";
      break;
    default:
      title = "";
      image = "/img/hero-image";
  }

  return (
    <div className="heroImage wrapper-large">
      <h1>{title}</h1>
      <picture>
        <source srcset={image + ".webp"} type="image/webp" />
        <source srcset={image + ".jpg"} type="image/jpeg" />
        <img src={image + ".jpg"} alt={title} width={1360} height={371} />
      </picture>
    </div>
  );
}
