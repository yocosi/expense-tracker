import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from './components/NewExpense/NewExpense.js';
import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:4000' });

const App = () => {

  const [expenses, setExpenses] = useState([]);

  // GET request to list all the expenses from the database
  api.get('/expenses').then((res) => {
    setExpenses(res.data);
  }).catch((error) => {
    console.log(error);
  });

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]; // Clean way of updating our state when it's based on a older snapshot of that same state
    });
    // POST request to push the newly added expense to the database
    api.post('/expenses', {
      "title": expense.title.toString(),
      "amount": expense.amount.toString(),
      "date": new Date(expense.date)
    }).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
