
import ExpenseItem from "./components/Expense/ExpenseItem";
import Card from "./components/UI/Card";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      LocationOfExpenditure: 'bhopal',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2',
      LocationOfExpenditure: 'jaipur',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      LocationOfExpenditure: 'indore',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      LocationOfExpenditure: 'delhi',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];


  return (
    <div>
      <h2>Let's get started!</h2>

      <Card className="expenses" id = 'perelement'>
      {
        expenses.map((expens) => {
          return (
            <ExpenseItem
            id = {expens.id}
            title = {expens.title}
            LocationOfExpenditure = {expens.LocationOfExpenditure}
            amount = {expens.amount}
            date = {expens.date} /> 
             
          )
       })
      } 
      </Card>
    </div>
  );
}
export default App;
