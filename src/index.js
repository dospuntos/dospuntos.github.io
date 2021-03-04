import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LoadingSpinner from "./components/portfolio/LoadingSpinner";
import "./i18n";

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<LoadingSpinner />}>
      <App />
    </Suspense>
  </StrictMode>,
  document.getElementById("root")
);
