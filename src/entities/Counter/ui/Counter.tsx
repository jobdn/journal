/* eslint-disable i18next/no-literal-string */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button";
import { counterActions } from "../model/counterSlice";
import { selectValue } from "../model/selectors/selectValue/selectValue";

interface CounterProps {
  className?: string;
}

export const Counter: React.FC<CounterProps> = () => {
  const dispatch = useDispatch();

  const value = useSelector(selectValue);

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  console.log("render");

  return (
    <div>
      <h1>
        value: <span data-testId="counter-value">{value}</span>
      </h1>
      {}
      <Button onClick={handleDecrement}>Decrement</Button>
      <Button onClick={handleIncrement}>Increment</Button>
    </div>
  );
};
