import { Link, Outlet } from "react-router-dom";
import './LayoutAdmin.css';
export default function LayoutAdmin(){
    return(
        <>
        <nav class="navbar navbar-expand-sm bg-info">
                <div class="container-fluid">
                    <ul class="nav navbar-nav">
                        <li class="nav-item">
                            <Link to = '/add-car'>Add Car</Link>
                        </li>
                        <li class="nav-item">
                            <Link to = '/display-car'>Display Car</Link>
                        </li>
                        <li class="nav-item">
                            <Link to = '/display-booking'>Display Booking</Link>
                        </li>
                        <li class="nav-item">
                            <Link to = '/add-staff'>Add Staff</Link>
                        </li>
                        <li class="nav-item">
                            <Link to = '/display-staff'>Display Staff</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet></Outlet>
        </>
    );
}