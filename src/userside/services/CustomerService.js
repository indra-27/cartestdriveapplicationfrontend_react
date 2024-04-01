import { axiosInstance } from "../../axios-http-client";



class CustomerService{
    addCustomer(customer){
        return axiosInstance.post('http://localhost:8090/customer',customer);
    }
    getCustomerByEmail(customerEmail){
        return axiosInstance.get('http://localhost:8090/customer/allCustomers/'+customerEmail);
    }
    
    deleteCustomer(customerEmail){
        return axiosInstance.delete("http://localhost:8090/customer/delete/"+customerEmail);
      }
      updateCustomer(customer){
        return axiosInstance.put("http://localhost:8090/customer/updateCustomer",customer);
      }
      login(loginDto){
        return axiosInstance.post("http://localhost:8090/customer/login",loginDto);
      }

}

export default new CustomerService();