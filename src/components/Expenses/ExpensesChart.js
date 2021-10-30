import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Fev', value: 0 },
    { label: 'Mars', value: 0 },
    { label: 'Avr', value: 0 },
    { label: 'Mai', value: 0 },
    { label: 'Juin', value: 0 },
    { label: 'Juil', value: 0 },
    { label: 'Aout', value: 0 },
    { label: 'Sept', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return (
    <Chart dataPoints={chartDataPoints} />
  )
}

export default ExpensesChart;