import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Contact = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.countName);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "add25", payload: 25 })}>
        Add25
      </button>
    </div>
  );
};

export default Contact;
