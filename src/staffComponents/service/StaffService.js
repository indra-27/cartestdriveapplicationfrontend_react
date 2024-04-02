import {axiosInstance} from "./axios-http-client";
class StaffService{

    getAllAccounts(){
        return axiosInstance.get('http://localhost:8090/getAllStaffs');
    }

    deleteStaff(staffId){
        return axiosInstance.delete('http://localhost:8090/staff/delete/'+staffId);
    }

    addStaff(account){
        return axiosInstance.post('http://localhost:8090/staff',account);
    }
    updateAccount(account){
        return axiosInstance.put('http://localhost:8090/Staff/update',account);
    }
    login(loginDto){
        return axiosInstance.post("http://localhost:8090/staff/login",loginDto);
      }
      getStaffByEmail(staffEmail){
        return axiosInstance.get('http://localhost:8090/getStaffbyEmail/'+staffEmail);
    }
    getUserBookings(staffEmail){
        return axiosInstance.get('http://localhost:8090/booking/staff/all/'+staffEmail);
    }
    
}

export default new StaffService();