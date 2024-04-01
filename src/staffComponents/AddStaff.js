import { useState } from "react";
import StaffService from "../service/StaffService";
function AddStaff() {
    let [staff, setStaff] = useState({
        "staffName": String,
        "phoneNumber": String,
        "staffEmail": String,
        "modelName": String
    });

    let [message, setMessage] = useState("");
    let [errorMessage, setErrorMessage] = useState("");


    const handleStaffChange = (e) => {
        setStaff({ ...staff, [e.target.name]: e.target.value });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(staff);
        StaffService.addStaff(staff)
            .then(
                (resp) => {
                    console.log(resp.data);
                    setMessage("Staff Added success!");
                    setStaff({ ...staff, [e.target.name]: e.target.value });
                    setErrorMessage("");
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
    return (
        <>
            <h3>Add new Staff:</h3>

            {
                message && <h3 className="alert alert-success">{message}</h3>
            }
            {
                errorMessage && <h3 className="alert alert-danger">{errorMessage}</h3>
            }


            <form onSubmit={handleSubmit}>
                <p>
                    Name: <input type="text" name="staffName" value={staff.staffName} onChange={handleStaffChange}    required pattern="[a-zA-Z ]{3,16}" title="Name should contain min 3 & max 16 chars , no digits and special chars allowed."></input>
                </p>

                <p>
                    Email: <input type="email" name="staffEmail" value={staff.staffEmail} onChange={handleStaffChange} required></input>
                </p>

                <p>
                    Phone Number : <input type="number" name="phoneNumber" value={staff.phoneNumber} onChange={handleStaffChange} required pattern="[0-9]{10}"></input>
                </p>
                <p>
                    modelName: <input type="text" name="modelName" value={staff.modelName} onChange={handleStaffChange}></input>
                </p>
                <button type="submit">Add Staff</button>
            </form>
        </>
    );
}

export default AddStaff; 

// import React, { useState } from 'react';
// import StaffService from '../service/StaffService';
// const StaffForm = () => {
//     const [staffName, setStaffName] = useState('');
//     const [staffEmail, setStaffEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [modelName, setModelName] = useState('');


//     const handleSubmit = (e) => {
//         e.preventDefault();
        
//         const staffData = {
//             staffName,
//             staffEmail,
//             phone,
//             modelName
//         };

//         // Call the service functions
//         StaffService.addStaff(staffData)
//             .then(response => {
//                 console.log('Staff added successfully:', response.data);
//                 // Do something with the response if needed
//             })
//             .catch(error => {
//                 console.error('Error adding staff:', error);
//             });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Staff Name:
//                 <input type="text" value={staffName} onChange={(e) => setStaffName(e.target.value)} />
//             </label>
//             <br />
//             <label>
//                 Staff Email:
//                 <input type="email" value={staffEmail} onChange={(e) => setStaffEmail(e.target.value)} />
//             </label>
//             <br />
//             <label>
//                 Phone:
//                 <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
//             </label>
//             <label>
//                 Model Name:
//                 <input type="text" value={modelName} onChange={(e) => setModelName(e.target.value)} />
//             </label>
//             <br />
//             <button type="submit">Add Staff</button>
//         </form>
//     );
// };

// export default StaffForm;
