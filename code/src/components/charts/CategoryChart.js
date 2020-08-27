import React from 'react';
import { Chart } from "react-google-charts";
import './chart-style.css';



export const CategoryChart = () => {
  
  const training = [
    ["", "Timmar", { role: "style" }],
        ["1", 18491, "color: #3366cc"],
        ["2", 33990, "color: #3366cc"],
        ["3", 5481, "color: #3366cc"],
        ["4", 8505, "color: #3366cc"],
        ["5", 14515, "color: #3366cc"],
        ["6", 9888, "color: #3366cc"],
        ["7", 10381, "color: #3366cc"],
        ["8", 7628, "color: #3366cc"],
        ["9", 4836, "color: #3366cc"],
  ];
  
      return (
          <div className="chart-wrapper">
            <h1>Antal utbildningstimmar uppdelat i olika utbildningskategorier</h1>
            <Chart chartType="Bar" width="100%" height="100%" data={training}/>
          </div>
      );  
  
}
