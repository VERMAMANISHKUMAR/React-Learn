import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './NavigationBar.css';

const NavigationBar = ({ onLoginClick, onSignupClick, cartCount }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3698/3698776.png"
          alt="Logo"
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
        MovieApp
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#hindi-movies">Hindi Movies</Nav.Link>
          <Nav.Link href="#english-movies">English Movies</Nav.Link>
          <Nav.Link href="#telugu-movies">Telugu Movies</Nav.Link>
        </Nav>
        <Form className="d-flex search-form">
          <FormControl
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </Form>
        <Button variant="outline-info" className="ml-3">
          Search
        </Button>
        <Nav className="ml-auto">
          <Button variant="outline-info" className="ml-3" onClick={onLoginClick}>
            Login
          </Button>
          <Button variant="outline-info" className="ml-3" onClick={onSignupClick}>
            Signup
          </Button>
          <Nav.Link href="#cart" className="ml-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
              alt="Cart"
              width="30"
              height="30"
            />
            <span className="cart-count">{cartCount}</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
