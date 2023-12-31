/* eslint-disable react/prop-types */
import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "setValueToAdd":
      return { ...state, valueToAdd: action.payload };
    case "addValueToCount":
      return { ...state, count: state.count + state.valueToAdd, valueToAdd: 0 };
    default:
      throw new Error('Invalid action type');
  }
  
};

export default function CounterPage({ initialCount }) { 
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;

    dispatch({ type: "setValueToAdd", payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "addValueToCount" });
  };

  
  return (
    <Panel className='m-3'>
      <h1 className="font-bold text-4xl">Counter</h1>
      <div className="flex">
        <Button primary rounded onClick={increment}>+</Button>
        <div className="text-4xl font-bold">{state.count}</div>
        <Button primary rounded onClick={decrement}>-</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input 
        className="border border-gray-400 rounded p-1 m-1"
        value={state.valueToAdd || ''}
        onChange={handleChange}
        type="number" 
        />
      </form>
    </Panel>
  );

}