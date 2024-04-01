import {Link, Outlet } from "react-router-dom";
import './Layout.css'

export default function Layout()
{
    return (
        <>
        <nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                        </li>

                         <li className="nav-item">
                            <Link to='/profile' className="nav-link">Profile</Link>
                        </li>

                        {/*<li className="nav-item">
                            <Link to='/account' className="nav-link">Add Accounts</Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/demos' className="nav-link">Demos</Link>
                        </li> */}
                    </ul>
                </div>

            </nav>
        <Outlet></Outlet>
        </>
    );
}