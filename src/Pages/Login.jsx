import React, { useState } from 'react'
import { auth, signInWithEmailAndPassword } from "../firbase";
import { useAuth } from '../Contexts/AuthContext';

const Login = () => {

  const { login } = useAuth();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      login(userCredential.user);
      console.log('Your Loged Succesfully');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error.message)
    }

  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login