import React from 'react';
import { Chart } from "react-google-charts";
import '../chart-style.css';


export const AgeChartOstergotland = () => {

  const ageGroups = [
    ["Ålder", "Nr", { role: "style" }],
    ["18-28", 153, "color: #3366cc"],
    ["29-39", 223, "color: #3366cc"],
    ["40-50", 285, "color: #3366cc"],
    ["51-61", 354, "color: #3366cc"],
    ["62 +", 69, "color: #3366cc"],
  ];

  return (
    <div className="chart-wrapper">
      <h3>Åldersfördelning för delprojektets deltagare</h3>
      <Chart chartType="Bar" width="100%" height="100%" data={ageGroups}/> 
    </div>
    );
  
}