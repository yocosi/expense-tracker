import React from 'react';
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from './components/NewExpense/NewExpense.js';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Assurance voiture',
      amount: 89,
      date: new Date(2021, 9, 24)
    },
    {
      id: 'e2',
      title: 'Abonnement bus',
      amount: 15,
      date: new Date(2021, 10, 15)
    },
    {
      id: 'e3',
      title: 'Nourriture',
      amount: 178,
      date: new Date(2021, 9, 12)
    }
  ]

  const addExpenseHandler = (expense) => {
    console.log('In app.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
