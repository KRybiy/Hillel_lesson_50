import ExpensiveCalculation from './components/ExpensiveCalculation';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div>
      <h1>Memoization Demo</h1>
      <ExpensiveCalculation />
      <ParentComponent />
    </div>
  );
}

export default App;