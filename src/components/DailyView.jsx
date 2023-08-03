import { useDispatch, useSelector } from "react-redux";
import { updateHabitStatus } from "../actions";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function DailyView() {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits.allHabits);
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

  const handleUpdateStatus = (habitId, date, status) => {
    dispatch(updateHabitStatus(habitId, date, status));
  };

  return (
    <Container>
      <h2 className="my-4">Daily View</h2>
      <h3>Today:{today} </h3>
      {habits.map((habit) => (
        <div key={habit.id} className="my-3">
          <h4>{habit.title}</h4>
          <p>Status: {habit.status[today] || "None"}</p>
          <Button
            variant="success"
            onClick={() => handleUpdateStatus(habit.id, today, "Done")}
          >
            Done
          </Button>
          <Button
            variant="danger"
            onClick={() => handleUpdateStatus(habit.id, today, "Not Done")}
          >
            Not Done
          </Button>
          <Button
            variant="warning"
            onClick={() => handleUpdateStatus(habit.id, today, "None")}
          >
            None
          </Button>
        </div>
      ))}
      {}
    </Container>
  );
}

export default DailyView;
