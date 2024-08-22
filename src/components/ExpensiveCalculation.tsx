import { useState, useMemo, useCallback } from 'react';

const ExpensiveCalculation = () => {
  const [count, setCount] = useState(0);

  // A simple example of an expensive computation
  const computeFactorial = useCallback((n: number): number => {
    console.log('Computing factorial...');
    return n <= 0 ? 1 : n * computeFactorial(n - 1);
  }, []); 

  const factorial = useMemo(() => computeFactorial(count), [ count, computeFactorial ]);

  return (
    <div>
      <h2>Factorial of {count} is {factorial}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default ExpensiveCalculation;
