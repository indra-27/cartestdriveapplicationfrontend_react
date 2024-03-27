import {axiosInstance} from "./axios-http-client"
class BookingService{

    // getAllBookings(){
    //     return axiosInstance.get('http://localhost:8090/accounts');
    // }

    // deleteAccountById(id){
    //     return axiosInstance.delete('http://localhost:8090/account/'+id);
    // }

    createNewBooking(bookingInput){
        return axiosInstance.post('http://localhost:8090/booking/new',bookingInput);
    }
    // updateAccount(account){
    //     return axiosInstance.put('http://localhost:8090/account',account);
    // }
    
}

export default new BookingService();