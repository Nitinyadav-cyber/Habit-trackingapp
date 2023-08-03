import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

function Home() {
  const habits = useSelector((state) => state.habits.allHabits);
  const getTodayStatus = (habit) => {
    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    return habit.status[today] || "None";
  };
  return (
    <Container>
      <h1 className="my-4">Habit Tracker</h1>
      <Card className="my-3">
        <Card.Body>
          <h2>Today Statuses:</h2>
          <ul>
            {habits.map((habit) => (
              <li key={habit.id}>
                <h3>{habit.title}</h3>
                <p>Status: {getTodayStatus(habit)}</p>
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
