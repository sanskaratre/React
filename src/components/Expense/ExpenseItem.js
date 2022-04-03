import React from 'react';
import ExpenseDetails from '../Expense/ExpenseDetails';
import ExpenseDate from '../Expense/ExpenseDate';
import Card from '../UI/Card';
import clickHandler from '../Expense/ExpenseDelete';

import './ExpenseItem.css';
import './expenses.css';

const ExpenseItem = (props) =>{                    

    // const [title, setTitle] = useState(props.title);

    // const clickHandlerChange = () => {

    //     setTitle("updated!");
        
    // }

    // const [amount, setAmount] = useState(props.amount);

    // const clickHandleramount = () => {

    //     setAmount("100");
        
    // }

    // <button onClick={ clickHandlerChange}>Change Expense</button> 
    // <button onClick={ clickHandleramount}>Change Amount</button>

    return (
        
        <Card className='expense-item' id = {props.id}>
          <ExpenseDate date = {props.date}/>
          <ExpenseDetails
           title = {props.title}
           location = {props.location}
           amount = {props.amount} />
           <button onClick={ () => {clickHandler(props.id)}}>Delete Expense</button>
           
        
        </Card>
       

    ) 
}
export default ExpenseItem;