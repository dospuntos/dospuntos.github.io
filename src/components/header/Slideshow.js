import Slider from "../slider/Slider";
import "../slider/slider.scss";

export default function Slideshow() {
  return (
    <div className="wrapper">
      <Slider>
        <div>
          <div className="slider-content">
            <h2>Vi designer din hjemmeside</h2>
            <p>Komplett hjemmeside til riktig pris.</p>
          </div>
          <img src="/img/slide_4.jpg" alt="" />
        </div>
        <div>
          <img src="/img/slide_3.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
}
