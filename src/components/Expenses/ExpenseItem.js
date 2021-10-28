import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // Using array destructuring on the useState hook
  // useState() return a 2 values array:
  // First value: is the current State value (props.title here)
  // Second value: is a function which we can later call (here to set a new title)
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!"); // By calling this function we are telling react to re-evaluate the component to update the state of the application
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}€</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;