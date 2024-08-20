import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './Login.css'; // Import your custom CSS file

const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with', email, password);
    onClose();
  };

  return (
    <Modal show onHide={onClose} centered> {/* Center the modal for better aesthetics */}
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="login-form"> {/* Add a class for styling */}
          <Form.Group controlId="formEmail" className="form-group"> {/* Add a class for styling */}
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="form-group"> 
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control" 
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="login-button">
            Login
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
