import React from 'react'
import { Chart } from "react-google-charts";
import '../chart-style.css'

export const CategoryChartUppsala = () => {
  const training = [
    ["", "Timmar", { role: "style" }],
    ["1", 1208, "color: #3366cc"],
    ["2", 1891, "color: #3366cc"],
    ["3", 0, "color: #3366cc"],
    ["4", 609, "color: #3366cc"],
    ["5", 1879, "color: #3366cc"],
    ["6", 1605, "color: #3366cc"],
    ["7", 1898, "color: #3366cc"],
    ["8", 854, "color: #3366cc"],
    ["9", 176, "color: #3366cc"],
  ];
  
      return (
        <div className="chart-wrapper">
          <h1>Antal utbildningstimmar uppdelat i olika utbildningskategorier</h1>
          <Chart chartType="Bar" width="100%" height="100%" data={training}/>
        </div>
      );  
  
}
