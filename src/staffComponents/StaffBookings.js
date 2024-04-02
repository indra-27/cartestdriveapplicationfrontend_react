import React, { useState, useEffect } from 'react';
import StaffService from '../service/StaffService';
const StaffBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetchStaffBookings();
    }, []);

    const fetchStaffBookings = () => {
        // Assuming the staff email is available to identify the bookings
        const staffEmail = 'staff@example.com'; // Replace with the actual staff email

        // Call the service function to get bookings for the staff
        StaffService.getUserBookings(staffEmail)
            .then(response => {
                setBookings(response.data);
            })
            .catch(error => {
                console.error('Error fetching staff bookings:', error);
            });
    };

    return (
        <div>
            <h2>Staff Bookings</h2>
            <table>
                <thead>
                    <tr>
                        <th>Customer Email</th>
                        <th>Customer Phone Number</th>
                        <th>Car Model</th>
                        <th>Customer Name</th>
                        <th>Slot No</th>
                        <th>Test Drive Booking Date</th>
                        <th>Booking Date</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map(booking => (
                        <tr key={booking.bookingId}>
                            <td>{booking.customerEmail}</td>
                            <td>{booking.customerPhoneNumber}</td>
                            <td>{booking.carModel}</td>
                            <td>{booking.customerName}</td>
                            <td>{booking.slotNumber}</td>
                            <td>{booking.testDriveBookingDate}</td>
                            <td>{booking.bookingDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StaffBookings;