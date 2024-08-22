import React from 'react';

interface ChildProps {
  increment: () => void;
  decrement: () => void;
}

const ChildComponent: React.FC<ChildProps> = ({ increment, decrement }) => {
  console.log('Child component re-rendered');

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default React.memo(ChildComponent);
