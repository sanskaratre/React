import React, { useState } from "react";
import ExpenseItem from "./components/Expense/ExpenseItem";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expense/ExpenseFilter";

const dummyExpenses = [
  {
    id: 'e1',
    location: 'bhopal',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2',
    location: 'jaipur',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    location: 'indore',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    location: 'delhi',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
 
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) =>{
      return [expense, ...prevExpenses];
    });         
  };

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <h2>Let's get started!</h2>
     
      <NewExpense onAddExpense = {addExpenseHandler}/>
      
      <Card className="expenses" id = 'perelement'>
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} /> 
      {
        filteredExpenses.map((expense) =>(
          
          <ExpenseItem 
            key = {expense.id}
            title = {expense.title}
            location = {expense.location}
            amount = {expense.amount}
            date = {expense.date} /> 
        )) 
       }
      </Card>
    </div>
  );
}
export default App;
