import React from 'react';
import { Chart } from "react-google-charts";
import '../chart-style.css';



export const CategoryChartOstergotland = () => {

  const training = [
    ["", "Timmar", { role: "style" }],
    ["1", 3554, "color: #3366cc"],
    ["2", 6506, "color: #3366cc"],
    ["3", 1128, "color: #3366cc"],
    ["4", 258, "color: #3366cc"],
    ["5", 3741, "color: #3366cc"],
    ["6", 1947, "color: #3366cc"],
    ["7", 4819, "color: #3366cc"],
    ["8", 2294, "color: #3366cc"],
    ["9", 826, "color: #3366cc"],
  ];

    return (
      <div className="chart-wrapper">
        <h1>Antal utbildningstimmar uppdelat i olika utbildningskategorier</h1>
        <Chart chartType="Bar" width="100%" height="100%" data={training}/>
      </div>
    );
  
}
