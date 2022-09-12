import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDatHandler = (enterExpenseData) => {
        const expenseData = {
            ...enterExpenseData
        };
       props.onAddExpense(expenseData);
    };
    
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDatHandler} />
        </div>
    );
};
export default NewExpense;