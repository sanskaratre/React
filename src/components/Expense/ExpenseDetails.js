const ExpenseDetails = (props) => {
  
    const title = props.title;
    const amount = props.amount;
    const location = props.location;

    return (
        <div className='expense-item__description'>
          <br></br>
          <h3>{location}</h3>
          <h2> {title} </h2>
          <div className='expense-item__price'>${amount}</div>
        </div>
    )
}

export default ExpenseDetails;