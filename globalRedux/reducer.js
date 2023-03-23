import { createAction, createReducer } from "@reduxjs/toolkit";

const increment = createAction("increment");
const decrement = createAction("decrement");
const add25 = createAction("add25");

const initialState = { count: 0 };

export const countReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.count += 1;
    })
    .addCase(decrement, (state) => {
      state.count -= 1;
    })
    .addCase(add25, (state, action) => {
      state.count += action.payload;
    });
});
