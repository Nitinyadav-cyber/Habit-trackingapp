import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import AddHabit from "./AddHabit";
import DailyView from "./DailyView";
import HabitList from "./HabitList";
import Home from "./Home";
import WeeklyView from "./WeeklyView";
import NavbarComponent from "./Navbar";

function App() {
  return (
    <>
      <Routers>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-habit" element={<AddHabit />} />
          <Route path="/daily-view" element={<DailyView />} />
          <Route path="/habit-list" element={<HabitList />} />
          <Route path="/weekly-view" element={<WeeklyView />} />
        </Routes>
      </Routers>
    </>
  );
}

export default App;
