import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {

  // Listen to the change event and the selected year got forwarded to the Expenses component
  const dropdownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.originalYear} onChange={dropdownChangeHandler}>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter;