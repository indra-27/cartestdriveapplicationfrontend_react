import React, { useState } from 'react';
import CustomerService from '../services/CustomerService';


const UpdateCustomer = ({ customer }) => {
   
    const [updateCustomer, setUpdateCustomer] = useState({...customer});
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
   
    const handleCustomerChange = (e) => {
        setUpdateCustomer({ ...updateCustomer, [e.target.name]: e.target.value });
    }
    

    const handleUpdate = (e) => {
        e.preventDefault();
        
        CustomerService.updateCustomer(updateCustomer)
            .then((resp) => {

                console.log(resp.data);
                setMessage('Customer Updated successfully!');
                setErrorMessage('');
            })
            .catch((err) => {
                setErrorMessage('Could not update!');
                setMessage('');
            });
    }

    return (
        <>
            <h3>Update your account:</h3>
            {message && <h3 className="alert alert-success">{message}</h3>}
            {errorMessage && <h3 className="alert alert-danger">{errorMessage}</h3>}

            <form onSubmit={handleUpdate}>
                <p>Name: <input type="text" name="customerName" value={updateCustomer.customerName} onChange={handleCustomerChange} required /></p>
                <p>Email: <input type="email" name="customerEmail" value={updateCustomer.customerEmail} /></p>
                <p>Address: <input type="text" name="address" value={updateCustomer.address} onChange={handleCustomerChange} /></p>
                <p>Mobile Number: <input type="number" name="mobileNumber" value={updateCustomer.mobileNumber} onChange={handleCustomerChange} required /></p>
                <p>Password: <input type="text" name="password" value={updateCustomer.password} onChange={handleCustomerChange} required /></p>
                <button type="submit">Update Account</button>
                {/* <button onClick={onUpdateCompletion}>Back</button> */}
            </form>
        </>
    );
};

export default UpdateCustomer;
