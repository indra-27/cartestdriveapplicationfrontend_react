import { axiosInstance } from "../../axios-http-client";
class AccountService{

    getCarDetails(){
        return axiosInstance.get('http://localhost:8090/admin/car/all');
    }

    deleteCarById(id){
        return axiosInstance.delete('http://localhost:8090/admin/car/delete/'+id);
    }

    addNewCar(car){
        return axiosInstance.post('http://localhost:8090/admin/car',car);
    }
    updateCarDetails(car){
        return axiosInstance.put('http://localhost:8090/admin/car/update',car);
    }
    getCarDetailsByModelName(modelName){
        return axiosInstance.get('http://localhost:8090/admin/car/search/'+modelName);
    }
    
}

export default new AccountService();