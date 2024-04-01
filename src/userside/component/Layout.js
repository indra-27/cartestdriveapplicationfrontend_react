import {Link, Outlet, useNavigate, useSearchParams } from "react-router-dom";
import './Layout.css'
import { useState } from "react";
import { useEffect } from "react";

export default function Layout()
{
    const navigate = useNavigate();
    let [customerEmail,setCustomerEmail] = useState(""); 
    // useEffect(() => {
    //     //Runs only on the first render
    //     const email=  localStorage.getItem("customerEmail");
    //     setCustomerEmail(email);
    // },[]);

   
    

    function logout()
    {
        localStorage.clear();
        navigate('/login');
    }
    
    //console.log(customerEmail);
    return (
        <>
        <nav className="navbar navbar-expand-sm ">
                <div className="container-fluid">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/displayCustomer' className="nav-link">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/login' className="nav-link">Login</Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/customer' className="nav-link">Register</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to='/logout' onClick={()=>{logout()}} className="nav-link">Logout</Link>
                        </li>
                        
                    </ul>
                </div>

            </nav>
        <Outlet></Outlet>
        </>
    );
}