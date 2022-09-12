import React from 'react';
import ExpenseItems from "./ExpenseItems";
import './Expenses.css';
import Card from "../UI/Card";
const Expenses = () => {
    const expense =[
        {
          id:"e1",
        date:new Date(),
        amount:434,
        title:'Car Insurance'
        },
        {
          id:"e2",
        date:new Date(2022,8,18),
        amount:200,
        title:'Tiffin'
        },
        {
          id:"e3",
        date:new Date(),
        amount:20,
        title:'Bus Ticket'
        },
        {
          id:"e4",
        date:new Date(2022,7,20),
        amount:300,
        title:'New Dest'
        }
      ];
    
return(
    <Card className="expenses">
   <ExpenseItems title={expense[0].title} date={expense[0].date} amount={expense[0].amount} id={expense[0].id}></ExpenseItems>
    <ExpenseItems title={expense[1].title} date={expense[1].date} amount={expense[1].amount} id={expense[0].id}> </ExpenseItems>
    <ExpenseItems title={expense[2].title} date={expense[2].date} amount={expense[2].amount} id={expense[0].id}></ExpenseItems>
    <ExpenseItems title={expense[3].title} date={expense[3].date} amount={expense[3].amount} id={expense[0].id}></ExpenseItems>
    </Card>
 
)
};
export default Expenses;