import React, { useState } from "react";
import classes from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className={classes.button}>
      <h1>{count}</h1>
      <button onClick={increment}>incr</button>
    </div>
  );
};

export default Counter;
