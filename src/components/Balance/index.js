import React from "react";
import "./style.css";
import { useSelector } from "react-redux";

export default function Balance() {
  const ttl = useSelector((state) => state.items.total);

  return (
    <div id="balance">
      <span>$</span> {(100000000000 - ttl).toLocaleString()}
    </div>
  );
}
