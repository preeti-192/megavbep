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

function App() {
  return (
    <div className="bgSite overflow-hidden">
      <BadRoomSec />
      <Cabinates />
      <WashBasin />
      <TextureDesign />
      <Blim />
      <MapStructure />
    </div>
  );
}

export default App;
