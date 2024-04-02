import './StaffLogin.css';
import React, { useState } from 'react';
import StaffService from '../service/StaffService';
const StaffLogin = () => {
    const [staffEmail, setStaffEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const loginData = {
            staffEmail,
            phone: phoneNumber
        };
        // Call the service function to login
        StaffService.login(loginData)
            .then(response => {
                console.log('Login successful:', response.data);
                // Do something after successful login
            })
            .catch(error => {
                console.error('Login failed:', error);
            });
    };

    return (
        <form onSubmit={handleLogin}>
            <label>
                Staff Email:
                <input type="email" value={staffEmail} onChange={(e) => setStaffEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Phone Number:
                <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
    );
};

export default StaffLogin;

