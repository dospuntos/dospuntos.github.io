import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import MainArea from "./components/MainArea";
import Footer from "./components/Footer";
import "purecss/build/pure-min.css";
import "purecss/build/grids-responsive-min.css";
import "./App.scss";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  /*https://colorlib.com/wp/template/katt/ */
  useEffect(() => {
    if (
      i18n.language.toLowerCase().includes("no") ||
      i18n.language.toLowerCase().includes("nb") ||
      i18n.language.toLowerCase().includes("nn")
    ) {
      i18n.changeLanguage("no");
    } else if (i18n.language.toLowerCase().includes("es")) {
      i18n.changeLanguage("es");
    } else {
      i18n.changeLanguage("en");
    }
  }, [i18n]);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <MainArea />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
