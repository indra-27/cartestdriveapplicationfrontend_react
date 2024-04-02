import React, { useState } from 'react';
import AdminService from "./adminServices/AdminService";

// function UpdateForm(car)
// {
//     let [message, setMessage] = useState("");
//     let [errorMessage, setErrorMessage] = useState("");

//     let [updateCar, setUpdateCar] = useState(car); // assign incoming props to component state

//     const handleCarChange = (e) => {
//         setUpdateCar({ ...car, [e.target.name]: e.target.value });

//     }


//     const handleUpdate = (e) => {
//         e.preventDefault();

//         console.log(updateCar);
//         AdminService.updateCarDetails(updateCar)
//             .then(
//                 (resp) => {
//                     console.log(resp.data);
//                     setUpdateCar(resp.data);
//                     setMessage("Car Updated success!");
//                     setErrorMessage("");
//                    //onUpdateCompletion();// set isUpdate to false
//                 }
//             )
//             .catch(
//                 (err) => {
//                     console.log(err.response.data);
//                     setMessage("");
//                     //setErrorMessage("Errors accured in fallowing fields:" + JSON.stringify(err.response.data));
//                     setErrorMessage(err.response.data);
//                 }
//             )


//     }


//     return(
//         <>
//             <h4>Update Car Details:</h4>
//             {
//                 message && <h3 className="alert alert-success">{message}</h3>
//             }
//             {
//                 errorMessage && <h3 className="alert alert-danger">{errorMessage}</h3>
//             }
//             <form className="form" onSubmit={handleUpdate}>
//                 <table className="tables">
//                     <tr>
//                         <td><label>Car Model Name:</label></td>
//                         <td><input type="text" name="modelName" value={updateCar.modelName} onChange={handleCarChange} pattern="[A-Za-z]{3,}" required title="Car Model Name should be a valid one" ></input></td>
//                     </tr>
//                     <tr>
//                         <td><label>Car Company:</label></td>
//                         <td><input type="text" name="company" value={updateCar.company} onChange={handleCarChange} pattern="[A-Za-z]{3,}" required title="Car Company should be a valid one" ></input></td>
//                     </tr>
//                     <tr>
//                         <td><label>Car Colour:</label></td>
//                         <td><input type="text" name="color" value={updateCar.color} onChange={handleCarChange} pattern="[A-Za-z]{3,}" required title="Car Colour should be a valid one" ></input></td>
//                     </tr>
//                     <tr>
//                         <td><label>Car Price:(Rs.)</label></td>
//                         <td><input type="number" name="carPrice" value={updateCar.carPrice} onChange={handleCarChange} min="100000" required title="Car Price should be a valid one"></input></td>
//                     </tr>
//                     <tr>
//                         <td><label>Engine Model:</label></td>
//                         <td><input type="text" name="engineModel" value={updateCar.engineModel} onChange={handleCarChange} pattern="[A-Za-z0-9]{3,}" required title="Engine Model should be a valid one" ></input></td>
//                     </tr>
//                     <tr>
//                         <td><label>Car Type:</label></td>
//                         <td><input type="text" name="vehicleType" value={updateCar.vehicleType} onChange={handleCarChange} pattern="[A-Za-z]{3,}" required title="Car Type should be a valid one" ></input></td>
//                     </tr>
//                     <tr>
//                         <td><label>Car Fuel Type:</label></td>
//                         <td><input type="text" name="fuelType" value={updateCar.fuelType} onChange={handleCarChange} pattern="[A-Za-z]{3,}" required title="Car Colour should be a valid one" ></input></td>
//                     </tr>
//                     <tr>
//                         <td><label>Car Seater:</label></td>
//                         <td><input type="number" name="seater" value={updateCar.seater} onChange={handleCarChange} required title="Car Seater should be a valid one"></input></td>
//                     </tr>
//                     <tr>
//                         <td><label>Car Mileage:</label></td>
//                         <td><input type="number" name="mileage" value={updateCar.mileage} onChange={handleCarChange} required title="Car Mileage should be a valid one"></input></td>
//                     </tr>
//                     <tr>
//                         <td><label>Car Rpm:</label></td>
//                         <td><input type="number" name="rpm" value={updateCar.rpm} onChange={handleCarChange} required title="Car RPM should be a valid one"></input></td>
//                     </tr>
//                     <tr>
//                         <td><label>Car Image URL:</label></td>
//                         <td><input type="text" name="image" value={updateCar.image} onChange={handleCarChange} pattern="[A-Za-z0-9,-/.]{3,}" required title="Car Image URL should be a valid one" ></input></td>
//                     </tr>
//                     <tr>
//                         <td><label>Description:</label></td>
//                         <td><input type="text" name="description" value={updateCar.description} onChange={handleCarChange} required title="Car Description should be a valid one" ></input></td>
//                     </tr>
//                 </table>
//                 <button type="submit" className="btn btn-primary">Update</button>
//                 {/* <button onClick={onUpdateCompletion}>Back</button> */}
//             </form>
            
            
//         </>
//     );
// }


export default function UpdateCar(){
 
    let [car, setCar] = useState({
        "carId": 0,
        "company": '',
        "modelName": '',
        "color": '',
        'carPrice': 0,
        "engineModel": '',
        "vehicleType": '',
        "fuelType": '',
        'seater': 0,
        'mileage': 0,
        'rpm': 0,
        "image": '',
        "description": ''
    });


    let [message, setMessage] = useState("");
    let [errorMessage, setErrorMessage] = useState("");

    let [updateCar, setUpdateCar] = useState({
        "carId": 0,
        "company": '',
        "modelName": '',
        "color": '',
        'carPrice': 0,
        "engineModel": '',
        "vehicleType": '',
        "fuelType": '',
        'seater': 0,
        'mileage': 0,
        'rpm': 0,
        "image": '',
        "description": ''
    }); // assign incoming props to component state
    let updateStatus = false;
    const handleCarChange = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    }
    
    const getCarDetails = () => {
        AdminService.getCarDetailsByModelName(car.modelName).then((res) => {
            setCar(res.data);
            console.log(res.data);
            updateStatus = true;
            // updateStatus ? <UpdateForm car={car}></UpdateForm> : <h2></h2>
        });
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(car.carId);
        console.log(car);
        AdminService.updateCarDetails(car)
            .then(
                (resp) => {
                    console.log(resp.data);
                    setUpdateCar(resp.data);
                    setMessage("Car Updated successfully!");
                    setErrorMessage("");
                   //onUpdateCompletion();// set isUpdate to false
                }
            )
            .catch(
                (err) => {
                    console.log(err.response.data);
                    setMessage("");
                    //setErrorMessage("Errors accured in fallowing fields:" + JSON.stringify(err.response.data));
                    setErrorMessage(err.response.data);
                }
            )


    }



    return(<>
        <h4>Update!</h4>
        <h5>Enter Car Model Name to be updated:</h5>
        <input type="text" name="modelName" value={car.modelName} onChange={handleCarChange} pattern="[A-Za-z]{3,}" required title="Car Model Name should be a valid one" ></input>
        <button onClick={getCarDetails}>Search</button>
            {
            message && <h3 className="alert alert-success">{message}</h3>
            }
            {
                errorMessage && <h3 className="alert alert-danger">{errorMessage}</h3>
            }
        <form className="form" onSubmit={handleUpdate}>
                <table className="tables">
                <tr>
                        <td><label>Car Id</label></td>
                        <td><input type="number" name="carId" value={car.carId} onChange={handleCarChange} ></input></td>
                    </tr>
                    <tr>
                        <td><label>Car Model Name:</label></td>
                        <td><input type="text" name="modelName" value={car.modelName} onChange={handleCarChange} pattern="[A-Za-z]{3,}" required title="Car Model Name should be a valid one" ></input></td>
                    </tr>
                    <tr>
                        <td><label>Car Company:</label></td>
                        <td><input type="text" name="company" value={car.company} onChange={handleCarChange} pattern="[A-Za-z]{3,}" required title="Car Company should be a valid one" ></input></td>
                    </tr>
                    <tr>
                        <td><label>Car Colour:</label></td>
                        <td><input type="text" name="color" value={car.color} onChange={handleCarChange} pattern="[A-Za-z]{3,}" required title="Car Colour should be a valid one" ></input></td>
                    </tr>
                    <tr>
                        <td><label>Car Price:(Rs.)</label></td>
                        <td><input type="number" name="carPrice" value={car.carPrice} onChange={handleCarChange} min="100000" required title="Car Price should be a valid one"></input></td>
                    </tr>
                    <tr>
                        <td><label>Engine Model:</label></td>
                        <td><input type="text" name="engineModel" value={car.engineModel} onChange={handleCarChange} pattern="[A-Za-z0-9]{3,}" required title="Engine Model should be a valid one" ></input></td>
                    </tr>
                    <tr>
                        <td><label>Car Type:</label></td>
                        <td><input type="text" name="vehicleType" value={car.vehicleType} onChange={handleCarChange} pattern="[A-Za-z]{3,}" required title="Car Type should be a valid one" ></input></td>
                    </tr>
                    <tr>
                        <td><label>Car Fuel Type:</label></td>
                        <td><input type="text" name="fuelType" value={car.fuelType} onChange={handleCarChange} pattern="[A-Za-z]{3,}" required title="Car Colour should be a valid one" ></input></td>
                    </tr>
                    <tr>
                        <td><label>Car Seater:</label></td>
                        <td><input type="number" name="seater" value={car.seater} onChange={handleCarChange} required title="Car Seater should be a valid one"></input></td>
                    </tr>
                    <tr>
                        <td><label>Car Mileage:</label></td>
                        <td><input type="number" name="mileage" value={car.mileage} onChange={handleCarChange} required title="Car Mileage should be a valid one"></input></td>
                    </tr>
                    <tr>
                        <td><label>Car Rpm:</label></td>
                        <td><input type="number" name="rpm" value={car.rpm} onChange={handleCarChange} required title="Car RPM should be a valid one"></input></td>
                    </tr>
                    <tr>
                        <td><label>Car Image URL:</label></td>
                        <td><input type="text" name="image" value={car.image} onChange={handleCarChange} pattern="[A-Za-z0-9,-/.]{3,}" required title="Car Image URL should be a valid one" ></input></td>
                    </tr>
                    <tr>
                        <td><label>Description:</label></td>
                        <td><input type="text" name="description" value={car.description} onChange={handleCarChange} required title="Car Description should be a valid one" ></input></td>
                    </tr>
                </table>
                <button type="submit" className="btn btn-primary">Update</button>
                {/* <button onClick={onUpdateCompletion}>Back</button> */}
            </form>
        </>
    );
}

