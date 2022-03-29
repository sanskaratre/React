import ExpenseDetails from '../Expense/ExpenseDetails';
import ExpenseDate from '../Expense/ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';
import './expenses.css';

const ExpenseItem = (props) =>{


    return (
        <Card className='expense-item'>
          <ExpenseDate date = {props.date}/>
          <ExpenseDetails
           title = {props.title}
           LocationOfExpenditure = {props.LocationOfExpenditure}
           amount = {props.amount} />
        
        </Card>

    ) 
}
export default ExpenseItem;