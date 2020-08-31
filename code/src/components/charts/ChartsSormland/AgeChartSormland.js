import React from 'react';
import { Chart } from "react-google-charts";
import '../chart-style.css';



export const AgeChartSormland = () => {

  const ageGroups = [
    ["Ålder", "Nr", { role: "style" }],
    ["18-28", 35, "color: #3366cc"],
    ["29-39", 46, "color: #3366cc"],
    ["40-50", 56, "color: #3366cc"],
    ["51-61", 64, "color: #3366cc"],
    ["62 +", 15, "color: #3366cc"],
  ];

  return (
    <div className="chart-wrapper">
      <h3>Åldersfördelning för delprojektets deltagare</h3>
      <Chart chartType="Bar" width="100%" height="100%" data={ageGroups}/> 
    </div>
    );
  
}