import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from "./reducers/habits";

const store = configureStore({
  reducer: {
    habits: habitsReducer,
  },
});

export default store;
