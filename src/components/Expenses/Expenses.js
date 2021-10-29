import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';


const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');

  // Listen to the selected year who just got forwarded and store it into a state
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  // Send back a filtered expenses array based on the expenses year and the selected year of the dropdown
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className="expenses">
      <ExpenseFilter originalYear={filteredYear} onChangeFilter={filterChangeHandler} />
      {filteredExpenses.map((expense) => {
        return (<ExpenseItem
          key={expense.id} // Avoid running into bugs while adding items dynamically
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />)
      })}
    </Card>
  );
}

export default Expenses;