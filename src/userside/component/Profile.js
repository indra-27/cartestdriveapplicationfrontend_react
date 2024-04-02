import {Routes, Route, useNavigate} from 'react-router-dom';

export default function Profile()
{
    const navigate = useNavigate();
    return(
        <>
        <button className="card-link btn btn-dark" onClick={()=>navigate('/booking/user')}>View Bookings</button>
        </>
    );

}