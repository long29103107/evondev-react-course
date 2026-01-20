import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center p-5 bg-white shadow w-[200px] mx-auto mt-10">
      <h2 className="mb-5">Counter: {count}</h2>
      <div className="flex justify-center items-center gap-x-5">
        <button className="inline-block p-2 border border-gray-200" onClick={increment}>Increment</button>
        <button className="inline-block p-2 border border-gray-200" onClick={decrement}>Decrement</button>
        <button className="inline-block p-2 border border-gray-200" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
