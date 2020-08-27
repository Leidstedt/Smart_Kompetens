import React from 'react';
import { Chart } from "react-google-charts";
import '../chart-style.css';

export const CategoryChartOrebro = () => {

const training = [
  ["", "Timmar", { role: "style" }],
  ["1", 5794, "color: #3366cc"],
  ["2", 1485, "color: #3366cc"],
  ["3", 1676, "color: #3366cc"],
  ["4", 4626, "color: #3366cc"],
  ["5", 7677, "color: #3366cc"],
  ["6", 2355, "color: #3366cc"],
  ["7", 350, "color: #3366cc"],
  ["8", 2712, "color: #3366cc"],
  ["9", 1539, "color: #3366cc"],
];

    return (
      <div className="chart-wrapper">
        <h1>Antal utbildningstimmar uppdelat i olika utbildningskategorier</h1>
        <Chart chartType="Bar" width="100%" height="100%" data={training}/>
      </div>
    );  
}
