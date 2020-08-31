import React from 'react';
import { Chart } from "react-google-charts";
import './chart-style.css';



export const AgeChart = () => {

  const ageGroups = [
    ["Ålder", "Nr", { role: "style" }],
    ["18-28", 639, "color: #3366cc"],
    ["29-39", 1260, "color: #3366cc"],
    ["40-50", 1589, "color: #3366cc"],
    ["51-61", 1847, "color: #3366cc"],
    ["62 +", 313, "color: #3366cc"],
  ];

    return (
      <div className="chart-wrapper">
        <h3>Åldersfördelning för projektets deltagare</h3>
        <Chart chartType="Bar" width="100%" height="100%" data={ageGroups}/> 
      </div>
    );
  
}