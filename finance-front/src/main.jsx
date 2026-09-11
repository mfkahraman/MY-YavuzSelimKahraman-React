import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LayoutPage } from "./layouts/layoutPage.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <LayoutPage>
      <App />
    </LayoutPage>
  </>,
);
