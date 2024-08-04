import { Container, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Dashboard = () => {
  const { tasks } = useAppContext();

  return (
    <Container>
      <h1>Task Dashboard</h1>
      <Button variant="primary" className="mb-3" as={Link} to="/create-task">
        Add Task
      </Button>

      <ListGroup className="mt-3">
        {tasks.map(task => (
          <ListGroup.Item key={task.id}>
            <h5>{task.title}</h5>
            <Button variant="info" as={Link} to={`/task/${task.id}`}>
              Task Details
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Dashboard;

