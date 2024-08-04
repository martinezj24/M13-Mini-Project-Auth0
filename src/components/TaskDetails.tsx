import { useParams, Link } from 'react-router-dom';
import { Container, Button, Card } from 'react-bootstrap';
import { useAppContext } from '../context/AppContext';

const TaskDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { tasks } = useAppContext();
  
  // Find the task with the matching ID
  const task = tasks.find(task => task.id === Number(id));


  return (
    <Container>
      <h1>Task Details</h1>
      <Card>
        <Card.Body>
          <Card.Title>Current Task: {task.title}</Card.Title>
          <Card.Text>Description: {task.description}</Card.Text>
          <Button as={Link} to="/dashboard" variant="primary">
            Back to Dashboard
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TaskDetails;
