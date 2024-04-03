// src/components/SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';

function SignupForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/registration', formData);
            console.log(response.data);
            alert('Signup successful!');
        } catch (error) {
            console.error("Signup failed: ", error.response.data);
            alert('Signup failed!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <div>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignupForm;
