import React, { useState } from 'react';
import CustomerService from '../services/CustomerService';
import './Login.css'
import { useNavigate } from 'react-router-dom';

function UserLogin() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message,setMessage]=useState('');
  const[errorMessage,setErrorMessage]=useState('');

const navigate=useNavigate();

  const handleLogin =  (e) => {
    e.preventDefault();
    // location.reload();

    const loginDto = {userName: userName, password:password }; // Corrected to use state variables directly
    CustomerService.login(loginDto)
      .then((resp) => {
        // console.log(customerEmail);
        console.log(resp.data);
        localStorage.setItem('customerEmail', userName);
        setMessage("Logged in success");
        setErrorMessage("");
        navigate('/displayCustomer')
        // setLoggedInUser(customerEmail); // Assuming you have a function to set the logged-in user

      })
      .catch((err) => {
        setErrorMessage("Invalid username or password");
        setMessage("");
        console.log(err);
      })
      .finally(() => {
        console.log("Loaded all data from Server");
      });
  };

  return (
    <>
    <h3>Login</h3>
    {
    message && <h3 className="alert alert-success">{message}</h3>
 }
{
    errorMessage && <h3 className="alert alert-danger">{errorMessage}</h3>
}
    <form onSubmit={handleLogin} className='formlogin'>
    
      <label htmlFor="email">UserName: </label>
      <input type="email" id="email" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Enter your Email' required pattern="[A-Za-z0-9. _]{3,}[@A-Za-z]{3,}.[a-z]{2,3}" title='Email is not valid (e.g.name@ford.com)'/>
      <label htmlFor="password">Password: </label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"></input>
  <br></br><br></br>
      <button className='submitbtn' type="submit">Login</button>
    </form>

    </>
  );
};

export default UserLogin;
