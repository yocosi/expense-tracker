import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((dataPoint) => { return dataPoint.value }); // Return an array with all the dataPointsValues inside (12 values here)
  const totalMaximum = Math.max(...dataPointsValues); // Check the max value of the array we just created

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />
      })}
    </div>
  )
}

export default Chart;