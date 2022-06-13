import React from "react";
import "./Content.css";

function Content() {
  return (
    <div>
      <div className="content">
        {/* <Tiles /> */}

        <div className="content__segment">
          <h2>What does this RGB to Hex converter do?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>

        <div className="content__segment">
          <h2>Convert a Hex value to RGB</h2>
          <p>
            Yes! You can rest assured that every password is unique. We also
            don’t save IP addresses - meaning you can feel totally safe using
            our password tool. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris
          </p>
        </div>

        <div className="content__segment">
          <h2>Why use SEOHORIZON RGB to HEX converter?</h2>
          <p>
            Yup! There are a few different customization fields that you can opt
            to use when creating your new password. For example, if you’re
            generating an easy-to-remember password, you can choose how many
            letters, how many digits, and whether you want the digits first. If
            you choose to go for a new strong and safe password, you can choose
            the length of the password, if you want to use lowercase letters,
            uppercase letters, numbers, or symbols
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
