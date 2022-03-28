import './ExpenseItem.css';

function ExpenseItem (){

    const expenseDate = new Date(2022, 3, 28);
    const expenceTitle = 'Car Insurance';
    const expenseAmount = 52;
    const LocationOfExpenditure = 'At_DB_mall';


    return (
        <div className='expense-item'>
        <div> {expenseDate.toUTCString()} </div>
        <div className='expense-item__description'>
        
            <h3>{LocationOfExpenditure}</h3>
            <h2> {expenceTitle} </h2>
           <div className='expense-item__price'>${expenseAmount}</div>
        </div>
    </div>

    ) 
    
   
}
export default ExpenseItem;