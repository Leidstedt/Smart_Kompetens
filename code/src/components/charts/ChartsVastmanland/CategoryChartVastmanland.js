import React from 'react';
import { Chart } from "react-google-charts";
import '../chart-style.css';



export const CategoryChartVastmanland = () => {

  const training = [
      ["", "Timmar", { role: "style" }],
      ["1", 6427, "color: #3366cc"],
      ["2", 9830, "color: #3366cc"],
      ["3", 1647, "color: #3366cc"],
      ["4", 2943, "color: #3366cc"],
      ["5", 1155, "color: #3366cc"],
      ["6", 2257, "color: #3366cc"],
      ["7", 2391, "color: #3366cc"],
      ["8", 1069, "color: #3366cc"],
      ["9", 943, "color: #3366cc"],
    ];
  
    return (
      <div className="chart-wrapper">
        <h3>Antal utbildningstimmar uppdelat i olika utbildningskategorier</h3>
        <Chart chartType="Bar" width="100%" height="100%" data={training}/>
      </div>
      );  
  
}
