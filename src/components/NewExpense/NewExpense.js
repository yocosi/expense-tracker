import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

  const [active, setCurrentValue] = useState(false);

  // Listen to the data entered in the ExpenseForm, create an object with all the items values plus an random id and forward it to a parent child (App.js here)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    changeFormState();
  }

  const changeFormState = () => {
    setCurrentValue(active ? false : true)
  }

  return (
    <div className="new-expense">
      {active ?
        <ExpenseForm onChangeFormState={changeFormState} onSaveExpenseData={saveExpenseDataHandler} /> : <button onClick={changeFormState}>Add New Expense</button>}
    </div>
  )
}

export default NewExpense;