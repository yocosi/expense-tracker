import React from "react";
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

  // Check if the list is empty and if it is, return a message to inform user
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return <ul className="expenses-list">
    {props.items.map((expense) => {
      return (<ExpenseItem
        key={expense.id} // Avoid running into bugs while adding items dynamically
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />)
    })}
  </ul>
}

export default ExpensesList;