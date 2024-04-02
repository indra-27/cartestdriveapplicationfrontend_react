import {axiosInstance} from "./axios-http-client"
class CarServices{

    getAllCars(){
        return axiosInstance.get('http://localhost:8090/admin/car/all');
    }
    getCarDetailsByModelName(modelName)
    {
        return axiosInstance.get('http://localhost:8090/admin/car/search/'+modelName);
    }

    
}

export default new CarServices();