import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MegavbSlider from "./components/MegavbSlider";
import MegaFooter from "./components/MegaFooter";
import OctaSlider from "./components/OctaSlider";
import Hawn from "./components/Hawn";
import KakMbi from "./components/KakMbi";

function App() {
  return (
    <div className="App overflow-hidden">
      <MegavbSlider />
      <KakMbi />
      <Hawn />
      <OctaSlider />
      <MegaFooter />
    </div>
  );
}

export default App;
