import Slider from "../slider/Slider";
import "../slider/slider.css";

export default function Slideshow() {
  return (
    <div className="wrapper">
      <Slider>
        <div>
          <img src="/img/slide_1.jpg" alt="" />
          <div className="slider-content">
            <h3>Vi designer din hjemmeside</h3>
            <p>Komplett hjemmeside til riktig pris.</p>
          </div>
        </div>
        <div>
          <img src="/img/slide_2.jpg" alt="" />
          <div className="slider-content">
            <h3>Logo og grafisk design</h3>
            <p>Profesjonelle og personlige logoer.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
