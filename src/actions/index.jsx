export const ADD_HABIT = "ADD_HABIT";
export const UPDATE_HABIT_STATUS = "UPDATE_HABIT_STATUS";
export const DELETE_HABIT = "DELETE_HABIT";

export const addHabit = (habit) => ({
  type: ADD_HABIT,
  habit: {
    ...habit,
    status: {},
  },
});

export const updateHabitStatus = (habitId, date, status) => ({
  type: UPDATE_HABIT_STATUS,
  habitId,
  date,
  status,
});

export const deleteHabit = (habitId) => ({
  type: DELETE_HABIT,
  habitId,
});
