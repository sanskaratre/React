import ExpenseDetails from '../Expense/ExpenseDetails';
import ExpenseDate from '../Expense/ExpenseDate';
import Card from '../UI/Card';
import clickHandler from '../Expense/ExpenseDelete';

import './ExpenseItem.css';
import './expenses.css';

const ExpenseItem = (props) =>{

    return (
        
        <Card className='expense-item' id = {props.id}>
          <ExpenseDate date = {props.date}/>
          <ExpenseDetails
           title = {props.title}
           LocationOfExpenditure = {props.LocationOfExpenditure}
           amount = {props.amount} />
           <button onClick={ () => {clickHandler(props.id)}}>Delete Expense</button>
        
        </Card>
       

    ) 
}
export default ExpenseItem;