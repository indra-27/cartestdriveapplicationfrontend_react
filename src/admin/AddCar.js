import AdminService from "./adminServices/AdminService";
import { useState } from "react";
import './AddCar.css';
export default function AddCar() {

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

    const handleCarChange = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(car);
        AdminService.addNewCar(car)
            .then(
                (resp) => {
                    console.log(resp.data);
                    setMessage("Car successfully added!");
                    setCar({ ...car, [e.target.name]: resp.data.value });
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
            <h4>Add Car Details:</h4>
            {
                message && <h3 className="alert alert-success">{message}</h3>
            }
            {
                errorMessage && <h3 className="alert alert-danger">{errorMessage}</h3>
            }
            <form className="form">
                <table className="tables">
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
            </form>
            <button onClick={handleSubmit} className="btn btn-primary">Add</button>
        </>
    );
}

