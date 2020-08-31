import React from 'react';
import { Chart } from "react-google-charts";
import '../chart-style.css';

export const AgeChartUppsala = () => {

  const ageGroups = [
    ["Ålder", "Nr", { role: "style" }],
    ["18-28", 44, "color: #3366cc"],
    ["29-39", 106, "color: #3366cc"],
    ["40-50", 94, "color: #3366cc"],
    ["51-61", 132, "color: #3366cc"],
    ["62 +", 39, "color: #3366cc"],
  ];

  return (
    <div className="chart-wrapper">
      <h3>Åldersfördelning för delprojektets deltagare</h3>
      <Chart chartType="Bar" width="100%" height="100%" data={ageGroups}/> 
    </div>
    );
  
}