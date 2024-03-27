import { useState } from "react";
import CustomerService from "../services/CustomerService";
import React from "react";
import { Form, Button,Row } from 'react-bootstrap';
import './AddCustomer.css';
import { useNavigate } from "react-router-dom";




function AddCustomer(){
let[customer,setCustomer]=useState({
    "customerName":'',
    "mobileNumber":0,
    "address":'',
    "customerEmail":'',
    "password":''

});
let[message,setMessage]=useState("");
let[errorMessage,setErrorMessage]=useState("");
const [errors, setErrors] = useState("");
const navigate=useNavigate();

const handleCustomerChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });

}
// const handleMobileNumberChange=(e)=>{
//   setCustomer({...customer,[e.target.name]:e.target.value});
// }




const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(customer);
    // let errors = {};
    // Object.keys(customer).forEach((key) => {
    //   const inputElement = document.getElementsByName(key)[0];
    //   if (!customer[key]) {
    //     errors[key] = inputElement.getAttribute('title');
    //   }
    // });

    // setErrors(errors);

    // if (Object.keys(errors).length === 0) {
    //   // Form submission logic
    //   console.log('Form submitted successfully');
    // }

   


    CustomerService.addCustomer(customer).
    then(
        (resp)=>{
         console.log(resp.data);
         setMessage("Customer registered successfully.");
         setErrorMessage("");
         navigate('/login');
         

        }
    )
    .catch(
        (err) => {
            console.log(err.response.data);
            setMessage("");
            setErrorMessage("Errors accured in fallowing fields:" + JSON.stringify(err.response.data));
        }
    )
}



return(
    <>
{/*     
    <h3>Register:</h3> 

 {
    message && <h3 className="alert alert-success">{message}</h3>
 }
{
    errorMessage && <h3 className="alert alert-danger">{errorMessage}</h3>
}  

    <form onSubmit={handleSubmit}>

    <p>
       CustomerName: <input type="text" name="customerName" id="customerName" value={customer.customerName} onChange={handleCustomerChange} required pattern="[a-zA-Z ]{3,16}" title="Name should contain min 3 & max 16 chars , no digits and special chars allowed."></input>
        </p>
        <p>
       Mobile Number: <input type="number" name="mobileNumber" id="mobileNumber" value={customer.mobileNumber} onChange={handleMobileNumberChange} required pattern="[0-9]{10}" title="Mobile number should contain only 10 digits. "></input>  
        </p>
        <p>
       Address : <input type="text" name="address" id="address" value={customer.address} onChange={handleCustomerChange} required pattern="[a-zA-Z ]{3,16}" title="Address should contain min 3 & max 16 chars , no digits and special chars allowed."></input>
       </p>
       <p>
       Email: <input type="text" name="customerEmail" value={customer.customerEmail} onChange={handleCustomerChange} required></input>
         </p>
<p>
                    Password: <input type="text" name="password" value={customer.password} onChange={handleCustomerChange} required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"></input>
                </p>
                <button type="submit">Register</button>
               
</form>   */}



 <h3>Register </h3>
 <form onSubmit={handleSubmit}>
 <label htmlFor="customerName">CustomerName: </label>
 <input type="text" name="customerName" id="customerName" value={customer.customerName} onChange={handleCustomerChange} required pattern="[a-zA-Z ]{3,16}" title="Name should contain min 3 & max 16 chars , no digits and special chars allowed."></input>
 {errors.customerName && <span style={{ color: 'red' }}>{errors.customerName}</span>}


  <label htmlFor="mobileNumber">MobileNumber: </label>
  <input type="text" name="mobileNumber" id="mobileNumber" value={customer.mobileNumber} onChange={handleCustomerChange} required pattern="[0-9]{10}" title="Mobile number should contain only 10 digits. "></input>  

  <label htmlFor="address">Address: </label>
  <input type="text" name="address" id="address" value={customer.address} onChange={handleCustomerChange} required pattern="[a-zA-Z ]{3,16}" title="Address should contain min 3 & max 16 chars , no digits and special chars allowed."></input>

  <label htmlFor="customerEmail">CustomerEmail: </label>
  <input type="text" name="customerEmail" value={customer.customerEmail} onChange={handleCustomerChange} required></input>

  <label htmlFor="password">Password: </label>
  <input type="text" name="password" value={customer.password} onChange={handleCustomerChange} required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"></input>
  <br></br>
  <br></br>
  <button type="submit">Register</button>
</form> 

    </>



        );
}

export default AddCustomer;
