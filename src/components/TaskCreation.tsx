import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useAppContext } from '../context/AppContext';

const TaskCreation = () => {
  const { addTask } = useAppContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Add the new task
    addTask({ id: Date.now(), title, description });
    
    // Show success message and navigate back to dashboard
    setSuccessMessage('Task successfully added!');
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000); // Redirect after 2 seconds to allow message to be seen
  };

  return (
    <Container>
      <h1>Create New Task</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="taskTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="taskDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Save Task
        </Button>
      </Form>

      {successMessage && (
        <Alert variant="success" className="mt-3">
          {successMessage}
        </Alert>
      )}
      <Button variant="primary" onClick={() => navigate('/dashboard')} className="mt-3">
        Back to Dashboard
      </Button>
    </Container>
  );
};

export default TaskCreation;
