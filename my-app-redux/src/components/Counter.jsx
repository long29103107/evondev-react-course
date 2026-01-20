import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByValue } from '@/redux-toolkit/counterSlice';

const INCREMENT_BY_VALUE = 10;

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByValue = () => {
    dispatch(incrementByValue(INCREMENT_BY_VALUE));
  };

  return (
    <div className="flex flex-col items-center p-5 bg-white shadow w-[500px] mx-auto mt-10">
      <h2 className="mb-5">Counter: {count}</h2>
      <div className="flex justify-center items-center gap-x-5">
        <button
          className="cursor-pointer inline-block p-2 border border-gray-200"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="cursor-pointer inline-block p-2 border border-gray-200"
          onClick={handleIncrementByValue}
        >
          Increment by {INCREMENT_BY_VALUE}
        </button>
        <button
          className="cursor-pointer inline-block p-2 border border-gray-200"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
