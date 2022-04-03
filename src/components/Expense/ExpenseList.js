import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
    if(props.expenses.length === 0){
        return <h2 className='expenses-list__fallback'>No Item Found</h2>
    }
    if(props.expenses.length === 1){
        return <h2 className='expenses-list__fallback'>Only single Expense here.</h2>
    }
    
    return (
        <ul className='expenses-list'>
            {(props.expenses.map((expense) =>(
              <ExpenseItem 
                key = {expense.id}
                title = {expense.title}
                location = {expense.location}
                amount = {expense.amount}
                date = {expense.date} /> 
            ) )  
          )
          }
        </ul>
    )
}

export default ExpenseList;