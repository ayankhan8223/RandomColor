import React from "react";
import "./Heading.css";

function Heading(props) {
  return (
    <div>
      <div>
        <div className="content__heading">
          <h1>{props.heading}</h1>
          <hr className="new1" />
          <p>{props.para}</p>
        </div>
      </div>
    </div>
  );
}

export default Heading;
