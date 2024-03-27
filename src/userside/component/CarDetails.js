import { useEffect } from "react";
import { useState } from "react";
import carServices from "../services/CarServices";
import './CarDetails.css';
export default function CarDetails() {
    let [carModelName, setCarModelName] = useState("");
    let [car, setCar] = useState({});

    // useEffect(() => {
    //     //Runs only on the first render
    //     loadAllData();
    // }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const loadAllData = () => {

        carServices.getCarDetailsByModelName(carModelName)
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


    return (
        <>
            <h5>Car details </h5>
            <form onSubmit={handleSubmit}>
                <label>ModelName</label>
                <input type="text" value={carModelName} onChange={(e) => setCarModelName(e.target.value)}></input>
                <button type="submit" onClick={loadAllData} >Submit</button>
            </form>
            {
                car ? <CarTable car={car}/> : <h3></h3>
            }

            
        </>
    );
}

function CarTable(car)
{
    return (
        <>
        {/* {JSON.stringify(car)} */}
        <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <img src={car.car.image} alt="Car Image" />
                    </div>
                        <table className="carTable">
                            <tr>
                                <td className="carstd"><b>MODEL NAME</b></td>
                                <td className="carstd">{car.car.modelName}</td>
                            </tr>
                            <tr>
                                <td className="carstd"><b>COMPANY</b></td>
                                <td className="carstd">{car.car.company}</td>
                            </tr>
                            <tr>
                                <td className="carstd"><b>PRICE</b></td>
                                <td className="carstd">{car.car.carPrice }</td>
                            </tr>
                            <tr>
                                <td className="carstd"><b>COLOR</b></td>
                                <td className="carstd">{car.car.color }</td>
                            </tr>
                            <tr>
                                <td className="carstd"><b>ENGINE MODEL</b></td>
                                <td className="carstd">{car.car.engineModel }</td>
                            </tr>
                            <tr>
                                <td className="carstd"><b>FUEL TYPE</b></td>
                                <td className="carstd">{car.car.fuelType }</td>
                            </tr>
                            <tr>
                                <td className="carstd"><b>MILEAGE</b></td>
                                <td className="carstd">{ car.car.mileage }</td>
                            </tr>
                            <tr>
                                <td className="carstd"><b>RPM</b></td>
                                <td className="carstd">{car.car.rpm }</td>
                            </tr>
                            <tr>
                                <td className="carstd"><b>SEATER</b></td>
                                <td className="carstd">{car.car.seater }</td>
                            </tr>
                            <tr>
                                <td className="carstd"><b>VEHICLE TYPE</b></td>
                                <td className="carstd">{car.car.vehicleType }</td>
                            </tr>
                        </table>
                </div>
                <div className="row col-lg-4" id="btn">
                    <button className="btn btn-primary">Book Now!</button>
                </div>
            </div>
        </>
    );
}