import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./controlAvatar.css";
import { RadioColor } from "./UI/RadioColor";
import { faceColor, hairColor, eyeColor } from "./db.js";
function Control() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const [showButtons, setShowButtons] = useState(null);
  const changeButton = (buttonId) => {
    if (showButtons === buttonId) {
      setShowButtons(null);
    } else {
      setShowButtons(buttonId);
    }
  };

  return (
    <>
      <div className="control-Avatar">
        <div className="arrow">
          {showButtons === "arrowBtn" ? (
            <a href="#" className="back-title">
              Back to Dashboard
            </a>
          ) : null}
          <Icon
            className="icon"
            icon="ic:sharp-keyboard-arrow-left"
            color="white"
            onMouseMove={() => changeButton("arrowBtn")}
          />
        </div>
        <div className="sub-control">
          {showButtons === "faceBtn" ? (
            <>
              <div className="control-item control-item-one ">
                {faceColor.map((option) => (
                  <RadioColor
                    key={option.value}
                    value={option.value}
                    label={option.label}
                    checked={selectedValue === option.value}
                    onChange={handleRadioChange}
                    uncheckedColor={option.uncheckedColor}
                    checkedColor={option.checkedColor}
                  />
                ))}
              </div>
            </>
          ) : null}
          <img
            src="./images/icons/face.png"
            onClick={() => changeButton("faceBtn")}
          />
          {/* hair style */}
          {showButtons === "hairBtn" ? (
            <div className="container-two-control control-item">
              <div className="control-item-sub  control-hair-radio">
                {hairColor.map((option) => (
                  <RadioColor
                    key={option.value}
                    value={option.value}
                    label={option.label}
                    checked={selectedValue === option.value}
                    onChange={handleRadioChange}
                    uncheckedColor={option.uncheckedColor}
                    checkedColor={option.checkedColor}
                  />
                ))}
              </div>
              <div className="control-item-sub control-hair-img">
                <img className="img" src="./images/hairstyle/haaaiir.png" />
                <img className="img" src="./images/hairstyle/haaaiir1.png" />
                <img src="./images/hairstyle/haaaiir2.png" />
                <img src="./images/hairstyle/haaaiir3.png" />
                <img src="./images/hairstyle/haaaiir4.png" />
                <img src="./images/hairstyle/haaaiir5.png" />
                <img src="./images/hairstyle/haaaiir6.png" />
              </div>
            </div>
          ) : null}
          <img
            src="./images/icons/hair.png"
            onClick={() => changeButton("hairBtn")}
          />
          {/* hair style */}
          {/* eye style */}
          {showButtons === "eyeBtn" ? (
            <div className="control-item control-item-one ">
              <img src="./images/eyestyle/eyes.png" />
              <img src="./images/eyestyle/eyes1.png" />
            </div>
          ) : null}
          <img
            src="./images/icons/eye.png"
            onClick={() => changeButton("eyeBtn")}
          />
          {/* eye style */}
          {/* brow style 2 */}
          {showButtons === "browBtn" ? (
            <div className="container-two-control control-item">
              <div className="control-item-sub  control-hair-radio">
                {hairColor.map((option) => (
                  <RadioColor
                    key={option.value}
                    value={option.value}
                    label={option.label}
                    checked={selectedValue === option.value}
                    onChange={handleRadioChange}
                    uncheckedColor={option.uncheckedColor}
                    checkedColor={option.checkedColor}
                  />
                ))}
              </div>
              <div className="control-item-sub control-brow-img">
                <img src="./images/eyestyle/brow1.png" />
                <img src="./images/eyestyle/brow2.png" />
                <img src="./images/eyestyle/brow3.png" />
                <img src="./images/eyestyle/brow4.png" />
              </div>
            </div>
          ) : null}
          <div className="eye ">
            <img
              src="./images/icons/brow.png"
              className="image-5"
              onClick={() => changeButton("browBtn")}
            />
            <img src="./images/icons/Vector 45.png" />
          </div>
          {/* brow style */}
          {/* shoes style */}
          {showButtons === "shoesBtn" ? (
            <div className="control-item control-item-one ">
              <img src="./images/shoes/shoes.png" />
              <img src="./images/shoes/shoes1.png" />
              <img src="./images/shoes/shoes3.png" />
            </div>
          ) : null}
          <img
            src="./images/icons/shoes.png"
            onClick={() => changeButton("shoesBtn")}
          />
          {/* shoes style */}
          {showButtons == "tshirtBtn" ? (
            <div className="control-item control-outfit-img">
              <img src="./images/outfit/outfits.png" />
              <img src="./images/outfit/outfits1.png" />
              <img src="./images/outfit/outfits2.png" />
              <img src="./images/outfit/outfits3.png" />
              <img src="./images/outfit/outfits4.png" />
            </div>
          ) : null}
          <img
            src="./images/icons/tshirt.png"
            onClick={() => changeButton("tshirtBtn")}
          />
          <img
            src="./images/icons/accessories.png"
            onClick={() => changeButton("accessoriesBtn")}
          />
          {showButtons === "tshirtBtn" ? (
            <div className="control-item control-item-eight radio_color ">
              <label
                for="yellow"
                class="radio_btn color_btn color_yellow"
              ></label>
              <input type="radio" name="color" value="yellow" hidden />
              <label
                for="m-size"
                class="radio_btn color_btn color_black"
              ></label>
              <input type="radio" name="color" value="yellow" hidden />
              <label for="white" class="radio_btn color_btn"></label>
              <input type="radio" name="color" value="white" hidden />
              <label for="red" class="radio_btn color_btn color_red"></label>
            </div>
          ) : null}
        </div>
        <div className="save">
          <img src="./images/icons/save.png" />
        </div>
      </div>
    </>
  );
}
export default Control;
