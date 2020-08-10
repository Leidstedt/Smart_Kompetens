import React from 'react';
import { Chart } from "react-google-charts";
import '../chart-style.css';



export const CategoryChartOstergotland = () => {

const training = [
  ["Utbildning", "Timmar", { role: "style" }],
      ["ERP och IT ", 10, "color: #3366cc"],
      ["Horisontella principer ", 10, "color: #3366cc"],
      ["Ledarskap ", 10, "color: #3366cc"],
      ["Business intelligence", 10, "color: #3366cc"],
      ["Yrkesutbildning ", 10, "color: #3366cc"]
];

    return (
      <div className="chart-wrapper">
        <h1>Antal utbildningstimmar uppdelat i olika utbildningskategorier</h1>
        <Chart chartType="Bar" width="100%" height="100%" data={training}/>
      </div>
    );
  
}
