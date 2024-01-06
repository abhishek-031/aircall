import React from "react";
import phone from "../icons/phone.svg";
import videoCall from "../icons/video-call.svg";
import phoneWhite from "../icons/phone-white.svg";

export default function Footer() {
  return (
    <footer>
      <img src={phone} />
      <img src={videoCall} />
      <div>
        <img src={phoneWhite} />
      </div>
      <img src={videoCall} />
      <img src={phone} />
    </footer>
  );
}
