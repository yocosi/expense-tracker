import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';


const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("From Expenses.js");
    console.log(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpenseFilter originalYear={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.items.map((v, i, a) => {
        return (<ExpenseItem
          title={props.items[i].title}
          amount={props.items[i].amount}
          date={props.items[i].date}
        />)
      })}
    </Card>
  );
}

export default Expenses;