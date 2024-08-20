import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import MoviePage from './MoviePage';
import MovieList from './MovieList';
import Login from './Login';
import Signup from './Signup';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [cartCount, setCartCount] = useState(0);


  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const handleCloseForms = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  const handleCartCount = () => {
    setCartCount(prevCount => prevCount + 1); // Increment cart count
  };

  return (
    <>
      <div className="App">
        <NavigationBar 
          cartCount={cartCount}  // Pass cartCount to NavigationBar
          onLoginClick={handleLoginClick} 
          onSignupClick={handleSignupClick} 
        />
        
        {/* Show Login and Signup Forms */}
        {showLogin && <Login onClose={handleCloseForms} />}
        {showSignup && <Signup onClose={handleCloseForms} />}

        {/* Movie Page Sections */}
        <MoviePage onAddToCart={handleCartCount} />  {/* Pass handleCartCount to MoviePage */}

        {/* Movie List */}
        <MovieList />
      </div>
    </>
  );
}

export default App;
