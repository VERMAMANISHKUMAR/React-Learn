import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './Signup.css'; // Import your custom CSS file

const Signup = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signing up with', email, password);
    onClose();
  };

  return (
    <Modal show onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Signup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="signup-form"> 
          <Form.Group controlId="formEmail" className="form-group"> 
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
          <Button variant="primary" type="submit" className="signup-button"> 
            Signup
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Signup;

