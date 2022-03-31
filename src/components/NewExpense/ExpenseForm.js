
import './ExpenseForm.css';
const ExpenseForm = () => {
    const onChangeLog = (event) => {
        console.log(event.target.value);

    }
    


    return (
        <form >
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                <label>Expense Title </label>
                <input type='text' onChange={onChangeLog} />
                </div>
                <div className='new-expense__control'>
                <label>Expense Amount </label>
                <input type='number' min='0.01' step='0.01' onChange={onChangeLog} />
                </div>
                <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' onChange={onChangeLog} />
                </div>
            </div>
            <div className='new-expense__control'>
                <button type='submit'>Add Expense</button>
            </div>
            
        </form>
     
    )
}

export default ExpenseForm;