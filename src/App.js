import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrapNav from "./components/ScrapNav";
import { Route, Routes } from "react-router-dom";
import ScrapHeader from "./components/ScrapHeader";
import WhoWe from "./components/WhoWe";
import ScrapFooter from "./components/ScrapFooter";
import ScrapSlider from "./components/ScrapSlider";
function App() {
  return (
    <>
      <ScrapHeader />
      <WhoWe />
      <ScrapSlider />
      <ScrapFooter />
    </>
  );
}

export default App;
