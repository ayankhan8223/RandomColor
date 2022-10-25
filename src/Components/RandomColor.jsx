import { useState } from "react";
import "./RandomColor.css";
import hexToRgba from "hex-to-rgba";
import hexToHsl from "hex-to-hsl";
import randomColor from "randomcolor";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Input,
  Grid,
  Typography,
  Slider,
  Alert,
  AlertTitle,
  Tooltip,
  Button,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontFamily: "Poppins",
    fontWeight:600
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: "Poppins",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function RandomColor() {
  const [value, setValue] = useState(10);
  const [rgb, setrgb] = useState();
  const [isSelected, setIsSelected] = useState();
  const [hue, setHue] = useState('red');
  const [luminosity, setLuminosity] = useState('bright');
  const [hex, sethex] = useState([]);
  const [hsl, setHsl] = useState([]);
  const [customValues,setCustomValues]=useState([])

  const [copy, setCopy] = useState();
  const handleClick1 = () => {
    setIsSelected("");
  };
  const handleClick2 = () => {
    setIsSelected("custom");
  };

  const getCustomcolor = () => {
    const values = randomColor({
      count: value,
      hue: hue,
      luminosity: luminosity,
    });
    setCustomValues(...[values])
  };
  console.log(customValues);

 
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
            Please Select the Fields to generate random color
          </h3>
          <div className="radioInputs ">
            <div className="inputs">
              <label htmlFor="one">Fully Random</label>{" "}
              <input
                type="radio"
                name="radio"
                id="one"
                onClick={handleClick1}
              />{" "}
            </div>
            <div className="inputs">
              <label htmlFor="two">Custom Setting</label>{" "}
              <input
                type="radio"
                name="radio"
                id="two"
                onClick={handleClick2}
              />
            </div>
          </div>
          {isSelected === "custom" ? (
            <div className="customInputs">
              <div className="hue">
                <label htmlFor="Hue">Hue</label>
                <select
                  name="pets"
                  id="hue"
                  onChange={(e) => setHue(e.target.value)}
                >
                  <option value="red">Red</option>
                  <option value="orange">Orange</option>
                  <option value="yellow">Yellow</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                  <option value="goldfish">Purple</option>
                  <option value="green">Pink</option>
                  <option value="monoschrome">MonoChrome</option>
                </select>
              </div>
              <div className="lumninosity">
                <label htmlFor="Lumionosity">Lumionosity</label>
                <select
                  name="pets"
                  id="Lumionosity"
                  onChange={(e) => setLuminosity(e.target.value)}
                >
                  <option value="bright">Bright</option>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
            </div>
          ) : (
            ""
          )}
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
          <button
            onClick={isSelected === "custom" ? getCustomcolor : getColor}
            className="generateColor"
          >
            Get Colors
          </button>
        </div>
        <div className="colorContainer">
          <div className="allcolors">
            {/* color display of hex */}
            {isSelected === "custom"
              ? customValues.map((hex) => (
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
                              fontWeight: 500,
                            }}
                          />
                        ) : (
                          <ContentCopyIcon
                            sx={{
                              width: "20px",
                              height: "20px",
                              color: "#FFF",
                            }}
                          />
                        )}
                      </div>
                    </div>
                    <div className="hexcolor">
                      <p>{hex}</p>
                    </div>
                  </div>
                ))
              : hex.map((hex) => (
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
                              fontWeight: 500,
                            }}
                          />
                        ) : (
                          <ContentCopyIcon
                            sx={{
                              width: "20px",
                              height: "20px",
                              color: "#FFF",
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
              <div>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 400 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>HEX</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {hex.map((hex) => (
                        <StyledTableRow key={hex}>
                          <StyledTableCell component="th" scope="row">
                            {hex}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <div>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 400 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>RGB</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rgb.map((rgb) => (
                        <StyledTableRow key={rgb}>
                          <StyledTableCell component="th" scope="row">
                            {rgb}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <div>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 400 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>HSL</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {hsl.map((hsl) => (
                        <StyledTableRow key={hsl}>
                          <StyledTableCell component="th" scope="row">
                            {hsl}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
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
