/* eslint-disable react/prop-types */
import Button from "../components/Button";
import useCounter from "../hooks/use-counter";

export default function CounterPage({ initialCount }) { 
  const { count, increment, decrement } = useCounter(initialCount);
  
  return (
    <div >
      <h1 className="font-bold text-4xl">Counter</h1>
      <div className="flex">
        <Button primary rounded onClick={increment}>+</Button>
        <div className="text-4xl font-bold">{count}</div>
        <Button primary rounded onClick={decrement}>-</Button>
      </div>
    </div>
  );

}