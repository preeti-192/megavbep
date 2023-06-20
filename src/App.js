import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BadRoomSec from "./components/BadRoomSec";
import Cabinates from "./components/Cabinates";
import WashBasin from "./components/WashBasin";
import TextureDesign from "./components/TextureDesign";
import Blim from "./components/Blim";
import MapStructure from "./components/MapStructure";
import MegavbSlider from "./components/MegavbSlider";
import MegaFooter from "./components/MegaFooter";
import OctaSlider from "./components/OctaSlider";
import Hawn from "./components/Hawn";
import KakMbi from "./components/KakMbi";
function App() {
  return (
    <div className="bgSite overflow-hidden">
      <MegavbSlider />
      <BadRoomSec />
      <Cabinates />
      <WashBasin />
      <TextureDesign />
      <Blim />
      <MapStructure />
      <KakMbi />
      <Hawn />
      <OctaSlider />
      <MegaFooter />
    </div>
  );
}

export default App;
