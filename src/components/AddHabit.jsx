import { useState } from "react";
import { addHabit } from "../actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";

function AddHabit() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddHabit = () => {
    if (title.trim() !== "" && description.trim() !== "") {
      const newHabit = {
        id: Date.now(),
        title,
        description,
      };
      dispatch(addHabit(newHabit));
      setTitle("");
      setDescription("");
      navigate("/");
    }
  };

  return (
    <Container>
      <h2 className="my-4">Add New Habit</h2>
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            as="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddHabit}>
          Add Habit
        </Button>
      </Form>
    </Container>
  );
}

export default AddHabit;
