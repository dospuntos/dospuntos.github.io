import Slider from "../slider/Slider";
import "../slider/slider.scss";
import { t } from "i18next";

export default function Slideshow() {
  return (
    <div className="wrapper">
      <Slider>
        <div>
          <div className="slider-content">
            <h2>{t("SLIDESHOW_1_HEADING")}</h2>
            <p>{t("SLIDESHOW_1_SUBHEADING")}</p>
          </div>
          <picture>
            <source srcset="/img/slide_4.webp" type="image/webp" />
            <source srcset="/img/slide_4.jpg" type="image/jpeg" />
            <img src="/img/slide_4.jpg" alt="" width={1080} height={476} />
          </picture>
        </div>
        <div>
          <picture>
            <source srcset="/img/slide_3.webp" type="image/webp" />
            <source srcset="/img/slide_3.jpg" type="image/jpeg" />
            <img src="/img/slide_3.jpg" alt="" width={1080} height={476} />
          </picture>
        </div>
      </Slider>
    </div>
  );
}
