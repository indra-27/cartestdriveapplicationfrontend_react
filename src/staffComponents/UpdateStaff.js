import React, { useState } from 'react';
import StaffService from './service/StaffService';

const UpdateStaff = ({ staff }) => {
   
    const [updateStaff, setUpdateStaff] = useState({...staff});
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
   
    const handleStaffChange = (e) => {
        setUpdateStaff({ ...updateStaff, [e.target.name]: e.target.value });
    }
    

    const handleUpdate = (e) => {
        e.preventDefault();
        
        StaffService.updateStaff(updateStaff)
            .then((resp) => {

                console.log(resp.data);
                setMessage('Staff Updated successfully!');
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
                <p>Name: <input type="text" name="staffName" value={updateStaff.staffName} onChange={handleStaffChange} required /></p>
                <p>Email: <input type="email" name="staffEmail" value={updateStaff.staffEmail} /></p>
                <p>Mobile Number: <input type="number" name="phoneNumber" value={updateStaff.phoneNumber} onChange={handleStaffChange} required /></p>
                <button type="submit">Update Account</button>
                {/* <button onClick={onUpdateCompletion}>Back</button> */}
            </form>
        </>
    );
};

export default UpdateStaff;
