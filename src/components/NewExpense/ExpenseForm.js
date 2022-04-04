import React, {useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredLocation, setEnteredLocation] = useState('');

//    const [userInput, setUserInput] = useState({
//         enteredTitle,
//         enteredAmount,
//          enteredDate
//     });

    const titleChange = (event) => {
        setEnteredTitle(event.target.value);   
    //    setUserInput({
    //         ...userInput,
    //         enteredTitle:event.target.value 
    //        })
    };

    const locationChange = (event) => {
        setEnteredLocation(event.target.value); 
     //   setUserInput({
     //     ...userInput,
     //     enteredLocation:event.target.value 
     //    })   
     };
    const amountChange = (event) => {
       setEnteredAmount(event.target.value); 
    //   setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value 
    //    })   
    };
    const dateChange = (event) => {
        setEnteredDate(event.target.value); 
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value  
        //    })   
    };
   
    const sumbitform = (event) => {
        event.preventDefault();
        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            location:enteredLocation,
            date: new Date(enteredDate)
        };
        
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredLocation('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={sumbitform}>
            <div className='new-expense__controls'>

                <div className='new-expense__control'>
                <label>Expense Title </label>
                <input type='text'
                value={enteredTitle}
                 onChange={titleChange}/>
                </div>

                <div className='new-expense__control'>
                <label>Expense Amount </label>
                <input type='number'
                value={enteredAmount}
                 min='0.01' step='0.01' onChange={amountChange} />
                </div>

                <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31'
                value={enteredDate} 
                onChange={dateChange} />
                </div>

                <div className='new-expense__control'>
                <label>Location</label>
                <input type='text' 
                value={enteredLocation} 
                onChange={locationChange} />
                </div>
            </div>
            <div className='new-expense__control'>
                <button type='button' onClick={props.onCancel}>  Cancel  </button>
                <button type='submit'>Add Expense</button>
            </div>
            
        </form>
     
    )
}

export default ExpenseForm;