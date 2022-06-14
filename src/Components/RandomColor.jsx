import { useState } from "react";
import "./RandomColor.css";
import hexToRgba from "hex-to-rgba";
import hexToHsl from "hex-to-hsl";
import {
  Box,
  Input,
  Grid,
  Typography,
  Slider,
  Alert,
  AlertTitle,
  Tooltip,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";

function RandomColor() {
  const [value, setValue] = useState(0);
  const [rgb, setrgb] = useState();
  const [hex, sethex] = useState([]);
  const [hsl, setHsl] = useState([]);

  const [copy, setCopy] = useState();

  // hex generating random color

  const hexColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };

  const getColor = () => {
    let hexArr = [];
    let rgbArr = [];
    const hslArr = [];
    for (let i = 1; i <= value; i++) {
      const hex = "#" + hexColor();
      const rgb = hexToRgba(`${hex}`);
      const hsl = hexToHsl(`${hex}`);
      rgbArr.push(rgb);
      hexArr.push(hex);
      hslArr.push(hsl);
    }
    sethex([...hexArr]);
    setrgb([...rgbArr]);
    setHsl([...hslArr]);
  };
  // hex generating random color ends

  // handeling slider and input value
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };
  // handeling slider and input value ends

  return (
    <>
      <div className="container">
        <div className="inputContainer">
          <h3 style={{ marginBottom: 40 }}>
            Please Select the number of random color you want
          </h3>

          <div className="inputAndSlider">
            <Slider
              value={typeof value === "number" ? value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              valueLabelDisplay="auto"
              sx={{
                color: "#52af77",
                height: 8,
                "& .MuiSlider-track": {
                  border: "none",
                },
                "& .MuiSlider-thumb": {
                  height: 28,
                  width: 28,
                  backgroundColor: "#fff",
                  border: "3px solid currentColor",
                  "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                    boxShadow: "inherit",
                  },
                  "&:before": {
                    display: "none",
                  },
                },
                "& .MuiSlider-valueLabel": {
                  lineHeight: 1.2,
                  fontSize: 12,
                  background: "unset",
                  padding: 0,
                  width: 32,
                  height: 32,
                  borderRadius: "50% 50% 50% 0",
                  backgroundColor: "#52af77",
                  transformOrigin: "bottom left",
                  transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
                  "&:before": { display: "none" },
                  "&.MuiSlider-valueLabelOpen": {
                    transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
                  },
                  "& > *": {
                    transform: "rotate(45deg)",
                  },
                },
              }}
            />

            <Input
              value={value}
              onChange={handleInputChange}
              sx={{ width: 200 }}
              inputProps={{
                min: 0,
                max: 40,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </div>
          <button onClick={getColor} className="generateColor">
            Get Colors
          </button>
        </div>
        <div className="colorContainer">
          <div className="allcolors">
            {/* color display of hex */}

            {hex.map((hex) => (
              <div className="colorBlocks" style={{ background: `${hex}` }}>
                <div
                  className="copy"
                  onClick={() => {
                    navigator.clipboard.writeText(`${hex}`);
                    setCopy(hex);
                  }}
                >
                  <div className="copyicon">
                    {copy === hex ? (
                      <CheckIcon
                        sx={{
                          width: "20px",
                          height: "20px",
                          color: "#7CFC00",
                          fontWeight: 1000,
                        }}
                      />
                    ) : (
                      <ContentCopyIcon
                        sx={{
                          width: "20px",
                          height: "20px",
                          color: "#FFF",
                          fontWeight: 1000,
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="hexcolor">
                  <p>{hex}</p>
                </div>
              </div>
            ))}
            {/* color display of hex ends */}
          </div>
        </div>

        {/* all color RGBA HEX and HSL start*/}

        {rgb ? (
          <div className="RgbHexHSLcontainer">
            <div className="RgbHexHSLcontainerinner">
              <div className="Hex">
                <h3>Random Hex color</h3>
                {hex.map((hex) => (
                  <>
                    <p>{hex}</p>
                  </>
                ))}
              </div>
              <div className="rgb">
                <h3>Random rgb color</h3>
                {rgb.map((rgb) => (
                  <>
                    <p>{rgb}</p>
                  </>
                ))}
              </div>
              <div className="hsl">
                <h3>Random hsl color</h3>
                {hsl.map((hsl) => (
                  <>
                    <p>{`hsl[${hsl}]`}</p>
                  </>
                ))}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {/* all color RGBA HEX and HSL container ends*/}
      </div>
    </>
  );
}

export default RandomColor;
