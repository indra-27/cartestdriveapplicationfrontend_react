import React, { useState } from 'react';
import StaffService from '../staffComponents/service/StaffService';

const DisplayStaff = () => {
const [staffEmail, setstaffEmail] = useState('');
// const [staffId, setstaffId] = useState(Number);
const [staffDetails, setStaffDetails] = useState(null);

const handleSubmit = async (e) => {
e.preventDefault();
// const response = await fetch(`http://localhost:8080/api/staff?email=${email}`);
// const data = await response.json();
// setStaffDetails(data);
StaffService.getStaffByEmail(staffEmail)
.then((resp) => {
    console.log(resp.data);
    //accounts = resp.data;
    setStaffDetails(resp.data);
}
)
.catch(
(err) => {
    console.log(err);
}
)
.finally(
() => {
    console.log("Loaded all data from Server");
}
)
};

return (
<div>
<form onSubmit={handleSubmit}>
<h3>Staff Details</h3>

    <label htmlFor='staffEmail'>Staff Email</label>
<input type="text" name='staffEmail' value={staffEmail} onChange={(e) => setstaffEmail(e.target.value)} /><br></br><br></br>
<button type="submit">Get Staff Details</button>
</form>
{staffDetails && (
    
<div>
{/* <p>Id: {staffDetails.staffId}</p> */}
<p>Name: {staffDetails.staffName}</p>
<p>Email: {staffDetails.staffEmail}</p>

<p>Phone Number: {staffDetails.phoneNumber}</p>
{/* <button onClick={() => handleDelete(staffDetails.staffEmail)}>Delete</button> */}

{/* Add more staff details here */}
</div>
)}
</div>
);
};

export default DisplayStaff;





