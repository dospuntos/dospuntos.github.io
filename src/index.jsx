import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import LoadingSpinner from "./components/portfolio/LoadingSpinner";
import "./i18n";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Suspense fallback={<LoadingSpinner />}>
      <App />
    </Suspense>
  </StrictMode>
);
