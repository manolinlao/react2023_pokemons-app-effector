import { useStore } from 'effector-react';
import { $counterStore, decrement, increment, resetCounter } from './store/counterStore';

export const CounterApp = () => {
  const value = useStore($counterStore);
  return (
    <>
      <h4>CounterApp</h4>
      value: {value}
      <br />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={resetCounter}>reset</button>
    </>
  );
};
