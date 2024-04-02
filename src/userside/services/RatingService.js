import { axiosInstance } from "./axios-http-client";
class RatingService{

    getAllRating(){
        return axiosInstance.get('http://localhost:8090/rating/all');
    }

    deleteRatingById(id){
        return axiosInstance.delete('http://localhost:8090/rating/delete/'+id);
    }

    AddRating(rating){
        return axiosInstance.post('http://localhost:8090/rating/create',rating);
    }
    getRatingByCarName(carModel)
    { return axiosInstance.get('http://localhost:8090/rating/DTOCarName/'+carModel); }


    
    getRatingByCustomerMailID(customerMailId)
    { return axiosInstance.get('http://localhost:8090/rating/DTO/'+customerMailId); }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new RatingService();