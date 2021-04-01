import { Switch, Route } from "react-router-dom";
import Slideshow from "./header/Slideshow";
import Home from "./content/Home";
import Hero from "./header/Hero";
import Services from "./content/Services";
import Contact from "./content/Contact";
import About from "./content/About";
import Privacy from "./content/Privacy";

function MainArea() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Slideshow} />
        <Route component={Hero} />
      </Switch>
      <div className="content wrapper">
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/portfolio" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy" component={Privacy} />
          <Route component={Home} />
        </Switch>
      </div>
    </>
  );
}

export default MainArea;
