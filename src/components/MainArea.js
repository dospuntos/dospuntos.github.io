import { Routes, Route } from "react-router-dom";
import Slideshow from "./header/Slideshow";
import Home from "./content/Home";
import Hero from "./header/Hero";
import Services from "./content/Services";
import Contact from "./content/Contact";
import About from "./content/About";
import Privacy from "./content/Privacy";
import NotFound from "./NotFound";

function MainArea() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Slideshow/>} />
        <Route element={<Hero/>} />
      </Routes>
      <div className="content wrapper">
        <Routes>
          <Route path="/portfolio" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route exact path="/" element={<Home/>} />
          <Route element={NotFound} status={404} />
        </Routes>
      </div>
    </>
  );
}

export default MainArea;
