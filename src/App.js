import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from './components/NewExpense/NewExpense.js';
// import axios from 'axios';

// const DUMMY_EXPENSES = [
//   {
//     id: 'e1',
//     title: 'Assurance voiture',
//     amount: 89,
//     date: new Date(2021, 9, 24)
//   },
//   {
//     id: 'e2',
//     title: 'Abonnement bus',
//     amount: 15,
//     date: new Date(2021, 10, 15)
//   },
//   {
//     id: 'e3',
//     title: 'Nourriture',
//     amount: 178,
//     date: new Date(2021, 9, 12)
//   }
// ]

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]; // Clean way of updating our state when it's based on a older snapshot of that same state
    });
  }

  // const api = axios.create({ baseURL: 'localhost:4000' });
  // api.post('/expenses', {
  //   title: expenses.title,
  //   amount: expenses.amount,
  //   date: expenses.date
  // }).then((res) => {
  //   console.log(res);
  // }).catch((error) => {
  //   console.log(error);
  // })

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
