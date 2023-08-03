import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { deleteHabit } from "../actions";

function HabitList() {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits.allHabits);

  const handleDeleteHabit = (habitId) => {
    dispatch(deleteHabit(habitId));
  };

  return (
    <Container>
      <h2 className="my-4">Current Habits</h2>
      <div className="row">
        {habits.map((habit) => (
          <div key={habit.id} className="col-md-4">
            <Card className="my-3">
              <Card.Body>
                <Card.Title>{habit.title}</Card.Title>
                <Card.Text>{habit.description}</Card.Text>
                <Card.Text>
                  Todays Status:{" "}
                  {habit.status[
                    new Date().toLocaleDateString("en-US", { weekday: "long" })
                  ] || "None"}
                </Card.Text>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteHabit(habit.id)}
                >
                  Delete Habit
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default HabitList;
