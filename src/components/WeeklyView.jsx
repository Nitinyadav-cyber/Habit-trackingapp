import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { updateHabitStatus } from "../actions";

function WeeklyView() {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits.allHabits);
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const handleUpdateStatus = (habitId, date, status) => {
    dispatch(updateHabitStatus(habitId, date, status));
  };

  const getPreviousDates = () => {
    const previousDates = [];
    for (let i = 0; i < 7; i++) {
      const previousDate = new Date();
      previousDate.setDate(previousDate.getDate() - (6 - i));
      previousDates.push(
        previousDate.toLocaleDateString("en-US", { weekday: "long" })
      );
    }
    return previousDates;
  };

  const previousDates = getPreviousDates();
  return (
    <Container>
      <h2 className="my-4">Weekly-View</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name of the Habit</th>
            {previousDates.map((date) => (
              <th key={date}>{date === today ? "Today" : date}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {habits.map((habit) => (
            <tr key={habit.id}>
              <td>{habit.title}</td>
              {previousDates.map((date) => (
                <td key={date}>
                  <Form.Control
                    as="select"
                    value={habit.status[date] || "None"}
                    onChange={(e) =>
                      handleUpdateStatus(habit.id, date, e.target.value)
                    }
                  >
                    <option value="None">None</option>
                    <option value="Done">Done</option>
                    <option value="Not Done">Not Done</option>
                  </Form.Control>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default WeeklyView;
