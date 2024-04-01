import { useState } from "react";
import CustomerService from "../services/CustomerService";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './DisplayCustomer.css'
// import UpdateCustomer from "./UpdateCustomer";
import { useNavigate } from "react-router-dom";

function UpdateCustomer({ customer, onUpdateCompletion }) {
    let [message, setMessage] = useState("");
    let [errorMessage, setErrorMessage] = useState("");



    let [updateCustomer, setUpdateCustomer] = useState(customer); // assign incoming props to component state

    const handleCustomerChange = (e) => {
        setUpdateCustomer({ ...customer, [e.target.name]: e.target.value });

    }


    const handleUpdate = (e) => {
        e.preventDefault();

        console.log(updateCustomer);
        CustomerService.updateCustomer(updateCustomer)
            .then(
                (resp) => {
                    console.log(resp.data);
                    setMessage("Account Updated success!");
                    setErrorMessage("");
                   //onUpdateCompletion();// set isUpdate to false
                }
            )
            .catch(
                (err) => {
                    console.log(err.response.data);
                    setMessage("");
                    //setErrorMessage("Errors accured in fallowing fields:" + JSON.stringify(err.response.data));
                    setErrorMessage("Could not update !");
                }
            )


    }

    return (
        <>
        <div className="container">
            <div className="update">
            <h3>UPDATE YOUR DETAILS</h3>
            {
                message && <h3 className="alert alert-success">{message}</h3>
            }
            {
                errorMessage && <h3 className="alert alert-danger">{errorMessage}</h3>
            }


            <form onSubmit={handleUpdate}>
               <label htmlFor="customerName">CustomerName</label>
                    <input type="text" name="customerName" value={updateCustomer.customerName} onChange={handleCustomerChange} required pattern="[a-zA-Z ]{3,16}" title="Name should contain min 3 & max 16 chars , no digits and special chars allowed."></input>
              

                    <label htmlFor="mobileNumber">MobileNumber</label>
                   <input type="text" name="mobileNumber" value={updateCustomer.mobileNumber} onChange={handleCustomerChange}  required pattern="[0-9]{10}" title="Mobile number should contain exactly 10 digits."></input>

               <label htmlFor="customerEmail">CustomerEmail</label>
                    <input type="email" name="customerEmail" value={updateCustomer.customerEmail} onChange={handleCustomerChange} disabled></input>
               
               <label htmlFor="address">Address</label>
               <input type="text" name="address" value={updateCustomer.address} onChange={handleCustomerChange} required pattern="[a-zA-Z ]{3,16}" title="Address should contain min 3 & max 16 chars , no digits and special chars allowed."></input>
                

                
                <label htmlFor="password">Password</label>
                <input type="text" name="password" value={updateCustomer.password} onChange={handleCustomerChange} required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"></input>
                

                <br>
                </br>
                <br></br>
                <button type="submit">Update Account</button><br></br>
                <button onClick={onUpdateCompletion}>Back</button>

            </form>
            </div>
            </div>
        </>
    )
}







function DisplayCustomer() {
    // const DisplayCustomer = ({ customer }) => {

    //let accounts;

    let [customer, setCustomer] = useState([]);
    let [isUpdate, setIsUpdate] = useState(false);
    let [updateCustomer, setUpdateCustomer] = useState({});
    let [message, setMessage] = useState("");
    let [errorMessage, setErrorMessage] = useState("");
    // const [customerEmail, setCustomerEmail] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        //Runs only on the first render
     const customerEmail=  localStorage.getItem("customerEmail");

        loadAllData(customerEmail);
    }, []);

    const loadAllData = (customerEmail) => {
        console.log(customerEmail);
         
        CustomerService.getCustomerByEmail(customerEmail)
            .then(
                (resp) => {
                    console.log(resp.data);
                    //accounts = resp.data;
                    setCustomer(resp.data);
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

//  loadAllData();

    const handleDelete = (customerEmail) => {
        console.log(customerEmail);
        // if(alert("Do you want to Delete account email:"+customerEmail)){
        CustomerService.deleteCustomer(customerEmail)
            .then(
                (resp) => {
                    console.log(resp);
                    setCustomer(customer.filter((a) => a.customerEmail !== customerEmail))
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                }
            )
    }
    
    const handleUpdate = (updateCustomer) => {
        console.log(updateCustomer);
        setUpdateCustomer(updateCustomer);
        setIsUpdate(true);
        // navigate('/update-customer',updateCustomer);

    }

    
    return (
        <>
        <div >
            
               
            {customer && !isUpdate &&(
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3><i>CUSTOMER DETAILS</i></h3>
                <table>
                  
                        <tr>
                           <td id="head">CustomerName:</td>
                           <td>{customer.customerName}</td>
                           
                        </tr>
                 
                
                        <tr>
                        <td id="head">Mobile Number:</td>
                           <td>{customer.mobileNumber}</td>
                            
                        </tr>

                        <tr>
                           <td id="head">Address:</td>
                           <td>{customer.address}</td>
                           
                        </tr>
                        <tr>
                           <td id="head">CustomerEmail:</td>
                           <td>{customer.customerEmail}</td>
                           
                        </tr>
                        <tr>
                           <td id="head">Password:</td>
                           <td>{customer.password}</td>
                           
                        </tr>
                        
                    
                   
                </table>
                </div>
                </div>
                <br>
                </br>
               
                <button onClick={() => handleUpdate(customer)} id="updbtn">Update</button>&nbsp;&nbsp;
              <button onClick={() => handleDelete(customer.customerEmail)} id="delbtn">Delete</button>

</div>
                      
                
            )}
           
          
        </div>
         {
              isUpdate && <UpdateCustomer customer={updateCustomer} onUpdateCompletion={() => { setIsUpdate(false); loadAllData() }}></UpdateCustomer> 


                // accounts.length > 0 ? <AccountsTable accountArray={accounts} handleDelete={handleDelete} handleUpdate={handleUpdate} /> : <h3> No Accounts found.</h3>
        }
           </>    
    );
}

export default DisplayCustomer;