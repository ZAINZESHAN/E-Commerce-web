import React, { useState } from 'react'
import { auth, createUserWithEmailAndPassword } from "../firbase";
import { useAuth } from '../Contexts/AuthContext';

const SignUp = () => {

    const { login } = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            login(userCredential.user)
            console.log('Your Acount Created');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.log(error.message)
        }

    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignUp}>
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
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default SignUp