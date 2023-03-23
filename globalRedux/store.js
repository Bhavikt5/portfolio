import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "./reducer";

const store = configureStore({
  reducer: {
    countName: countReducer,
  },
});

export default store;
