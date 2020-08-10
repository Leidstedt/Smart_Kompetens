import React from 'react';
import { Chart } from "react-google-charts";
import '../chart-style.css';


export const AgeChartOstergotland = () => {

  const ageGroups = [
    ["Ålder", "Nr", { role: "style" }],
    ["18-28", 15, "color: #3366cc"],
    ["29-39", 30, "color: #3366cc"],
    ["40-50", 120, "color: #3366cc"],
    ["51-61", 10, "color: #3366cc"],
    ["62 +", 15, "color: #3366cc"],
  ];

    return (
      <div className="chart-wrapper">
        <h1>Åldersfördelning för delprojektets deltagare</h1>
        <Chart chartType="Bar" width="100%" height="100%" data={ageGroups}/> 
      </div>
    );
  
}