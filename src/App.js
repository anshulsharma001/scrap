import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrapHeader from "./components/ScrapHeader";
import WhoWe from "./components/WhoWe";
import ScrapFooter from "./components/ScrapFooter";
import ScrapSlider from "./components/ScrapSlider";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init({
    once: true,
    // disable: "mobile",
  });
  return (
    <>
      <div className="body_bg_color">
        <ScrapHeader />
        <WhoWe />
        <ScrapSlider />
        <ScrapFooter />
      </div>
    </>
  );
}

export default App;
