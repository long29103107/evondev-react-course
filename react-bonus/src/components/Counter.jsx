import React from 'react'
import { counterStore } from '../store/counter-store'

const Counter = () => {

  const { count, increment, decrement } = counterStore((state) => state);
  
  return <div className="p-5 border border-slate-200 rounded-xl inline-flex items-center gap-x-5">
      <button onClick={increment}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    <span className="text-2xl font-bold">{count}</span>
    <button onClick={decrement}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
      </svg>
    </button>
  </div>;
};

export default Counter;