import { useState } from "react";
import BookingService from "../services/BookingService";
import './CreateNewBooking.css'
function CreateNewBooking() {
    let [bookingInput, setBookingInput] = useState({
        "customerEmailId": '',
        "carModelName": '',
        'slotNo':0,
        "date": '',
        "bookingDate": ''
    });

    let [bookingOutput, setBookingOutput] = useState({
        'bookId':0,
        "customerEmailId": '',
        "carModelName": '',
        'slotNo':0,
        "date": '',
        "bookingDate": '',
        'staffName':'',
        'staffMobileNumber':'',
        'status':''
    });

    let [message, setMessage] = useState("");
    let [errorMessage, setErrorMessage] = useState("");


    const handleBookingChange = (e) => {
        setBookingInput({ ...bookingInput, [e.target.name]: e.target.value });
        // setBookingOutput({ ...bookingOutput, [e.target.carModelName]: e.target.value });
        // setBookingOutput({ ...bookingOutput, [e.target.slotNo]: e.target.value });
        // setBookingOutput({ ...bookingOutput, [e.target.date]: e.target.value });
        // setBookingOutput({ ...bookingOutput, [e.target.bookingDate]: e.target.value });
    

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(bookingInput);
        BookingService.createNewBooking(bookingInput)
            .then(
                (resp) => {
                    console.log(resp.data);
                    setMessage("Successfully Booked");
                    setBookingOutput({...bookingOutput,[e.target.name]:resp.data.value});

                    setErrorMessage("");
                }
            )
            .catch(
                (err) => {
                    console.log(err.response.data);
                    setMessage("");
                    setErrorMessage(JSON.stringify(err.response.data));
                }
            )


    }
    return (
        <>
            <h3>Book Now:</h3>

            {
                message && <h3 className="alert alert-success">{message}</h3>
            }
            {
                errorMessage && <h3 className="alert alert-danger">{errorMessage}</h3>
            }


            <form onSubmit={handleSubmit}>
                <table className="tables">
                    <tbody>
                    <tr>
                        <td><label>Email ID</label></td>
                        <td><input type="email" name="customerEmailId" value={bookingInput.customerEmailId} onChange={handleBookingChange}  pattern="^[a-z0-9]{3,}@[a-z]{3,5}.[a-z]{2,3}$"  required  title="Email should be a valid one" ></input></td>
                    </tr>
                    <tr>
                        <td><label>Car Model Name</label></td>
                        <td><input type="text" name="carModelName" value={bookingInput.carModelName} onChange={handleBookingChange} required pattern="[a-zA-Z ]{3,16}" title="Name should contain min 3 & max 16 chars."></input></td>
                    </tr>
                    <tr>
                    <td><label>Slot No</label></td>
                    <td><input type="number" name="slotNo" value={bookingInput.slotNo} onChange={handleBookingChange} min = "1" max="8" required></input></td>
                    </tr>
                    <tr>
                    <td><label>Car Book Date</label></td>
                    <td><input type="date" name="date" value={bookingInput.date} onChange={handleBookingChange} required ></input></td>
                    </tr>
                    <tr>
                        <td><label>Today Date</label></td>
                        <td> <input type="date" name="bookingDate" value={bookingInput.bookingDate} onChange={handleBookingChange} required ></input></td>
                    </tr>
                    </tbody>
                    
                    
                </table>
                <button type="submit">Book</button>
            </form>
        </>
    );
}

export default CreateNewBooking; 