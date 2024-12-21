import React, { useContext, useState } from 'react';
import '../CSS/LoginSignup.css';
import { signup, login, logout } from '../firebase/auth.js';
import toast from 'react-hot-toast';
import { ShopContext } from '../Contexts/ShopContext.jsx';

const LoginSignUp = ({ setAuthType }) => {
  const {login: contextLogin} = useContext(ShopContext)
  const [isSignUp, setIsSignUp] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false); // Checkbox state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password });

    if (!agree) {
      toast.error("You must agree to the terms and privacy policy.");
      return;
    }

    try {
      if (isSignUp) {
        // Sign Up
        await signup(email, password);
        toast.success("You are Sign Up Successfully!");
      } else {
        // Login
        await login(email, password);
        toast.success('You are Login Successfully!');
      }

      contextLogin(); // Call the login function from context

      // Clear fields
      setName('');
      setEmail('');
      setPassword('');
      setAgree(false); // Reset checkbox state

    } catch (error) {
      console.error("Error:", error); // Log the error for debugging
      toast.error("Error: " + error.message);
    }
  };

  return (
    <div className={isSignUp ? 'loginsignup' : 'login'}>
      <div className={isSignUp ? 'loginsignup-container' : 'login-container'}>
        <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
        <form onSubmit={handleSubmit}>
          <div className='loginsignup-fields'>
            {isSignUp && (
              <input
                type="text"
                placeholder='Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            )}
            <input
              type="email"
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Continue</button>
        </form>
        <p className="loginsignup-login">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <span onClick={() => {
            setIsSignUp(!isSignUp);
            setAuthType(isSignUp ? 'Login' : 'Sign Up'); // Update auth type
          }}>
            {isSignUp ? ' Login here' : ' Sign Up here'}
          </span>
        </p>
        <div className="loginsignup-agree">
          <input
            type="checkbox"
            id="agree"
            checked={agree}
            onChange={() => setAgree(!agree)} // Toggle checkbox state
          />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
