import { Container } from 'react-bootstrap';
import AuthButton from '../components/AuthButton';

const Home = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h1>Welcome to the Task Manager</h1>
      <p>The Perfect Daily Manager Tool!</p>
      <AuthButton /> 
    </Container>
  );
};

export default Home;

