import React from "react";
import "./Fullfillment.css";
export default function Fullfillment(props) {
  let barFillHeight = "0%";
  if (props.fullfillment > 0) {
    barFillHeight = Math.round(props.fullfillment) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ width: barFillHeight }}></div>
      </div>
    </div>
  );
}
