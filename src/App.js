import React, { useState } from 'react';
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';
const tempExpenseArray = [];

const App = () => {
  const [userExpenseData, getUserExpenseData] = useState([])
  const AddExpenseHandler = (getExpenseData) => {
    const expenseData = {
      ...getExpenseData
    };

    tempExpenseArray.push(expenseData);
    getUserExpenseData(tempExpenseArray);

  };

  return (
    <div>
      <NewExpense onAddExpense={AddExpenseHandler} />
      <Expenses />

    </div>
  );
}

export default App;
