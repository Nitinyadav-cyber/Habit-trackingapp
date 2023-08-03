import { ADD_HABIT, DELETE_HABIT, UPDATE_HABIT_STATUS } from "../actions";
import { dummyHabits } from "../data";

const initialState = {
  allHabits: dummyHabits,
};

const habitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HABIT:
      return {
        ...state,
        allHabits: [...state.allHabits, action.habit],
      };
    case UPDATE_HABIT_STATUS:
      return {
        ...state,
        allHabits: state.allHabits.map((habit) =>
          habit.id === action.habitId
            ? {
                ...habit,
                status: {
                  ...habit.status,
                  [action.date]: action.status,
                },
              }
            : habit
        ),
      };
    case DELETE_HABIT:
      return {
        ...state,
        allHabits: state.allHabits.filter(
          (habit) => habit.id !== action.habitId
        ),
      };
    default:
      return state;
  }
};

export default habitsReducer;
