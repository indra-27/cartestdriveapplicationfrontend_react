import { useEffect } from "react";
import { useState } from "react";
import bookingService from "../services/BookingService";
import './ViewCustomerBooking.css';


function UpdateBooking({ bookingInput, onUpdateCompletion }) {
    let [message, setMessage] = useState("");
    let [errorMessage, setErrorMessage] = useState("");



    let [updateBooking, setUpdateBooking] = useState(bookingInput); // assign incoming props to component state

    const handleBookingChange = (e) => {
        setUpdateBooking({ ...bookingInput, [e.target.name]: e.target.value });

    }


    const handleUpdate = (e) => {
        e.preventDefault();

        console.log(updateBooking);
        bookingService.updateBooking(updateBooking)
            .then(
                (resp) => {
                    console.log(resp.data);
                    setUpdateBooking(resp.data);
                    setMessage("Booking Updated success!");
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

    return (
        <>
            <h3>Update Booking</h3>
            {
                message && <h3 className="alert alert-success">{message}</h3>
            }
            {
                errorMessage && <h3 className="alert alert-danger">{errorMessage}</h3>
            }


            <form onSubmit={handleUpdate}>
                <p>
                    Email <input type="email" name="customerEmailId" value={updateBooking.customerEmailId} onChange={handleBookingChange} disabled ></input>
                </p>

                <p>
                    Car Model Name <input type="text" name="carModelName" value={updateBooking.carModelName} onChange={handleBookingChange} ></input>
                </p>

                <p>
                    Slot No: <input type="number" name="slotNo" value={updateBooking.slotNo} onChange={handleBookingChange} min="1" required></input>
                </p>
                <p>
                    Date: <input type="date" name="date" value={updateBooking.date} onChange={handleBookingChange} required ></input>
                </p>
                <p>
                    Booking Date: <input type="date" name="bookingDate" value={updateBooking.bookingDate} onChange={handleBookingChange} required ></input>
                </p>
                <button type="submit">Update Booking</button>
                <button onClick={onUpdateCompletion}>Back</button>

            </form>
        </>
    )
}


function BookTable({bookingOutput, handleDelete, handleUpdate})
{
    let [bookingInput,setBookingInput] = useState([]);
    return (
        <>
        {/* {JSON.stringify(bookingOutput)} */}
        <table className="booktable">
            <thead>
            <tr>
                {/* <th>Book Id</th>
                <th>Customer EmailId</th> */}
                <th>Car Model Name</th>
                <th>Slot No</th>
                <th>Test Drive Booking Date</th>
                <th>Booking Date</th>
                <th>Staff Name</th>
                <th>Staff Mobile Number</th>
                
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                bookingOutput.map((book)=>(
                <tr key={book.bookId}>
                {/* <td>{book.bookId}</td>
                <td>{book.customerEmailId}</td> */}
                <td>{book.carModelName}</td>
                <td>{book.slotNo}</td>
                <td>{book.date}</td>
                <td>{book.bookingDate}</td>
                <td>{book.staffName}</td>
                <td>{book.staffMobileNumber}</td>
                <td><button className="btn btn-danger" onClick={() => handleDelete(book.bookId)}>Delete</button></td>
                <td><button className="btn btn-info" onClick={() => handleUpdate(book)} >Update</button></td>

            </tr>
                ))
            }
            
        </tbody>
    </table>
        </>
    );
}

export default function ViewCustomerBooking() {
    //let [customerEmail, setcustomerEmail] = useState("");
    let [bookingOutput, setBookingOutput] = useState([]);
    
    let [isUpdate, setIsUpdate] = useState(false);
    let [updateBooking, setUpdateBooking] = useState({
        "customerEmailId": '',
        "carModelName": '',
        'slotNo':0,
        "date": '',
        "bookingDate": ''
    });

    useEffect(() => {
        //Runs only on the first render
     const customerEmail=  localStorage.getItem("customerEmail");

        loadAllData(customerEmail);
    }, []);
    

    // useEffect(() => {
    //     //Runs only on the first render
    //     loadAllData();
    // }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const loadAllData = (customerEmail) => {
        console.log("Email"+customerEmail);
        bookingService.getAllUserBookingByEmail(customerEmail)
            .then(
                (resp) => {
                    console.log(resp.data);
                    setBookingOutput(resp.data);
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

    const handleDelete = (id) => {
        alert("Delete this id: "+id);
        console.log(id);
        bookingService.deleteBooking(id)
            .then(
                (resp) => {
                    console.log(resp);
                    setBookingOutput(bookingOutput.filter((a) => a.id !== id))
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                }
            )
    }

    const handleUpdate = (updateBooking) => {
        console.log(updateBooking);
        setUpdateBooking(updateBooking);
        setIsUpdate(true);

    }


    return (
        <>
            {/* <h5>My Bookings</h5>
            <form onSubmit={handleSubmit}>
                <label>Mail Id</label>
                <input type="text" value={customerEmail} onChange={(e) => setcustomerEmail(e.target.value)}></input>
                <button type="submit" onClick={loadAllData} >Submit</button>
            </form> */}
            {
                isUpdate ? <UpdateBooking bookingInput={updateBooking} onUpdateCompletion={() => { setIsUpdate(false); loadAllData() }}></UpdateBooking> :
                bookingOutput ? <BookTable bookingOutput={bookingOutput} handleDelete={handleDelete} handleUpdate={handleUpdate} /> : <h3></h3>
            }

            
        </>
    );
}

