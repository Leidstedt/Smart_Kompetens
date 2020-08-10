import React from 'react';
import { Chart } from "react-google-charts";
import './chart-style.css';


export const GenderChart = () => {
  
  const pieOptions = {
    title: "Gender",
    pieHole: 0,
    slices: [
      { color: "F26419"},
      { color: "#3366cc"},
    ],
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "233238",
        fontSize: 14
      }
    },
    tooltip: {
      showColorCode: true
    },
    chartArea: {
      left: 0,
      right: 0,
      top: 0,
      width: "100%",
      height: "80%"
    },
    fontName: "Roboto"
  };

      return (
        <div>
          <h1>Andel kvinnor respektive män som deltagit i delprojektet</h1>
          <Chart
            chartType="PieChart"
            data={[["Gender", "Weight"], ["Män", 10], ["Kvinnor", 10]]}
            options={pieOptions}
            graph_id="PieChart"
            width={"100%"}
            height={"400px"}
            legend_toggle
          />
        </div>
      );
}