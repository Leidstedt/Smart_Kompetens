import React from 'react'
import { Chart } from "react-google-charts";
import '../chart-style.css'



export const CategoryChartSormland = () => {

    const training = [
      ["", "Timmar", { role: "style" }],
      ["1", 1509, "color: #3366cc"],
      ["2", 1678, "color: #3366cc"],
      ["3", 1029, "color: #3366cc"],
      ["4", 69, "color: #3366cc"],
      ["5", 63, "color: #3366cc"],
      ["6", 1724, "color: #3366cc"],
      ["7", 923, "color: #3366cc"],
      ["8", 672, "color: #3366cc"],
      ["9", 1353, "color: #3366cc"],
    ];
  
    return (
      <div className="chart-wrapper">
        <h3>Antal utbildningstimmar uppdelat i olika utbildningskategorier</h3>
        <Chart chartType="Bar" width="100%" height="100%" data={training}/>
      </div>
      );  
  
}
