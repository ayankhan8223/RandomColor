import React from "react";
import "./header.css";
import Logo from "../assets/logo-thin.png";

function Header() {
  return (
    <div className="header">
      <img className="image" alt="logo" src={Logo}></img>
      <ul className="list">
        <a className="link" href="https://www.seohorizon.com/">
          <li className="list-item">DEALS</li>
        </a>
        <a className="link" href="https://www.seohorizon.com/">
          <li className="list-item">STORE</li>
        </a>
        <a className="link" href="https://www.seohorizon.com/">
          <li className="list-item">TOOLBOX</li>
        </a>
        <a className="link" href="https://www.seohorizon.com/">
          <li className="list-item">HACKS</li>
        </a>
        <a className="link" href="https://www.seohorizon.com/">
          <li className="list-item">VERSUS</li>
        </a>
        <a className="link" href="https://www.seohorizon.com/">
          <li className="list-item">REVIEWS</li>
        </a>
        <a className="link" href="https://www.seohorizon.com/">
          <li className="list-item">SERVICES</li>
        </a>
        <a className="link" href="https://www.seohorizon.com/">
          <li className="list-item">CONTACT</li>
        </a>
      </ul>
    </div>
  );
}

export default Header;
