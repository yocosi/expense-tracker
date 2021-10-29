import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';


const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');

  // Listen to the selected year who just got forwarded and store it into a state
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  // Send back a filtered expenses array based on the expenses date and the selected year of the dropdown
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })


  return (
    <Card className="expenses">
      <ExpenseFilter originalYear={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;