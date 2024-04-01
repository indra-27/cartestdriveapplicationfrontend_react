import {axiosInstance} from "./axios-http-client"
class BookingService{

    getAllUserBookingByEmail(email){
        return axiosInstance.get('http://localhost:8090/booking/user/all/'+email);
    }

    deleteBooking(id){
        return axiosInstance.delete('http://localhost:8090/booking/'+id);
    }

    createNewBooking(bookingInput){
        return axiosInstance.post('http://localhost:8090/booking/new',bookingInput);
    }
    updateBooking(bookingInput){
        return axiosInstance.put('http://localhost:8090/booking',bookingInput);
    }
    
}

export default new BookingService();