import React, { useState, useEffect } from 'react';
import AdminService from "./adminServices/AdminService";
import { useNavigate } from 'react-router-dom';

const CarDetails = () => {
    const [car, setCar] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    let [modelName, setmodelName] = useState("");
    let [isUpdate, setIsUpdate] = useState(false);
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
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const loadAllData = () => {

        AdminService.getCarDetailsByModelName(modelName)
            .then(
                (resp) => {
                    console.log(resp.data);
                    setCar(resp.data);
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
    }

    const handleUpdate = (updateCar) => {
        console.log(updateCar);
        setUpdateCar(updateCar);
        setIsUpdate(true);

    }


    useEffect(() => {
        const fetchCarDetails = async () => {
            try {
                const carDetails = await AdminService.getCarDetails(); 
                setCar(carDetails);
                console.log(carDetails);
                setCar(carDetails.data);
            } catch (error) {
                setErrorMessage('Failed to fetch car details');
            }
        };

        fetchCarDetails();
    }, []);

    const deleteCarById = (id)=>{
        AdminService.deleteCarById(id)
        .then((resp) => {
            console.log(resp.data);
            setCar(car.filter((c) => c.carId !== id));
            setErrorMessage("");
            alert("Car with id: " + id + " will be deleted");
        })
        .catch((err) => {
            console.log(err.response.data);
            setErrorMessage("Error in deleting car with id: " + id);
        })
    }
   
    return (
        <div>
            <h4>Car Details:</h4>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Car Company</th>
                        <th>Car Model</th>
                        <th>Car Image</th>
                        <th>Car Description</th>
                        <th>Car Color</th>
                        <th>Car Price</th>
                        <th>Car Engine Model</th>
                        <th>Car Type</th>
                        <th>Car Fuel Type</th>
                        <th>Car Seater</th>
                        <th>Car Mileage</th>
                        <th>Car Rpm</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody className="table-light">
                    {car.map(c => (
                        <tr key={c.carId}>
                            <td>{c.company}</td>
                            <td>{c.modelName}</td>
                            <td><img src={c.image} style={{ height: '100px', width: '160px' }} alt="car" /></td>
                            <td>{c.description}</td>
                            <td>{c.color}</td>
                            <td>{c.carPrice}</td>
                            <td>{c.engineModel}</td>
                            <td>{c.vehicleType}</td>
                            <td>{c.fuelType}</td>
                            <td>{c.seater}</td>
                            <td>{c.mileage}</td>
                            <td>{c.rpm}</td>
                            <td><button onClick={() => deleteCarById(c.carId || 0)} className="btn btn-danger">Delete</button></td>
                            <td><button onClick={() => navigate('/update-car')} className="btn btn-primary">Update</button></td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CarDetails;
