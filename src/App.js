import ExpenceItem from "./components/ExpenceItem";
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenceItem>
        <p>Food Rs 10</p>
        <p>Petrol Rs 100</p>
        <p>Movies Rs 200</p>
      </ExpenceItem>
    </div>
  );
}

export default App;
