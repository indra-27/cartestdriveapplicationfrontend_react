import { useState } from "react";
import Reacts from "react";
import carServices from "../services/CarServices";
import { useEffect } from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import './UserHome.css'


function CarCards({carArray}) {
    const navigate = useNavigate()
    console.log(carArray);
    return (

        <div className="container">
            <div className="row"  >
                    {   
                        carArray.map((car) => (
                                <div key={car.carId} className="card col-sm-4">
                                    <img className="card-img-top" src={car.image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h3 className="card-title"><b>{car.modelName}</b></h3>
                                        <p className="card-text">{car.description}</p>
                                    </div>
                                    <div className="card-body">
                                        <button className="card-link btn btn-dark" onClick={()=>navigate('cardetail/'+car.modelName)}>Details</button>
                                        <button className="card-link btn btn-primary" onClick={()=>navigate('/booking/'+car.modelName)} >Book Now</button>
                                        <button className="card-link btn btn-dark" onClick={()=>navigate('/AddRating/'+car.modelName)}> Rate Now</button>
                                    </div>
                                </div> 
                        )
                        )
                        
                    }
            </div >
        </div >
    );
}




export default function UserHome() {
    let [car, setCar] = useState([{}]);

    useEffect(() => {
        //Runs only on the first render
        loadAllData();
    }, []);

    const loadAllData = () => {

        carServices.getAllCars()
            .then(
                (resp) => {
                    console.log(resp.data);
                    //accounts = resp.data;
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
            {
                car.length > 0 ? <CarCards carArray={car} /> : <h3> No Accounts found.</h3>
            }
        </>
    );
}


