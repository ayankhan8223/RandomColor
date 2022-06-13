import { color } from "@mui/system";
import matchers from "@testing-library/jest-dom/matchers";
import { useState } from "react";
import "./RandomColor.css";
function RandomColor() {
  const [number, setNumber] = useState(0);
  const [rgb, setrgb] = useState(0);
  const [hex, sethex] = useState([]);

  // hex generating random color
  const randomColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };

  const getColor = () => {
    let colorarr = [];
    for (let i = 1; i <= number; i++) {
      const color = "#" + randomColor();
      colorarr.push(color);
    }
    sethex([...colorarr]);
    console.log(hex);
    if (!number) {
      alert("please enter the number");
    }
  };
  // hex generating random color ends

  return (
    <div className="container">
      <input
        type="number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button onClick={getColor}>get color</button>
      <div className="colorContainer">
        {hex.map((data) => (
          <div
            className="colorBlocks"
            style={{ background: `${data}`, color: `${data}` }}
          >
            {data}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RandomColor;
