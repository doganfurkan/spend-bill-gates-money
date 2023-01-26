import {useEffect, useState} from "react";
import { QRCode } from "antd";

export default function Footer() {
  const [qr,setQr] = useState(64);
  const [clicked,setClicked] = useState(false);

  useEffect(() => {
    setQr(clicked ? 512 : 64);
  },[clicked])
  return (
    <div id="footer">
      <span>
        Made by{" "}
        <a
          href="http://github.com/doganfurkan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Furkan Doğan
        </a>
      </span>
      <span id="qr" className={clicked ? "fix" : ""} data-text={!clicked ? "Click to see bigger" : "Click to make smaller"} onClick={() => {setClicked(!clicked);}} title="Title">
        <QRCode
          size={qr}
          value="https://github.com/doganfurkan/"
        />
      </span>
    </div>
  );
}
