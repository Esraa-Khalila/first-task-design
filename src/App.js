import { useState } from "react";
import "./App.css";
import Control from "./Components/Control";

function App() {
  const images = [
    "./images/models/Avatar1.png",
    "./images/models/Avatar2.png",
    "./images/models/Avatar3.png",
    "./images/models/Avatar4.png",
    "./images/models/Avatar5.png",
    "./images/models/Avatar6.png",
    "./images/models/Avatar7.png",
    "./images/models/Avatar8.png",
  ];
  const [imageIndex, setImageIndex] = useState(0);
  const handleClick = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <div className="App">
      <div className="sub-app">
        <div className="main-image">
          <img
            className="img-1"
            src={images[imageIndex]}
            onClick={handleClick}
          />
          <img class="img-2" src="./images/stage-stand1.png" />
          <img class="img-3" src="./images/stage-stand2.png" />
        </div>
      </div>

      <Control />
    </div>
  );
}

export default App;
