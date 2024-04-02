import './App.css';
import UserHome from './userside/component/UserHome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPageFound from './userside/component/NoPageFound';
import CarDetails from './userside/component/CarDetails';
import Layout from './userside/component/Layout';
import CreateNewBooking from './userside/component/CreateNewBooking';
import ViewCustomerBooking from './userside/component/ViewCustomerBooking';
import Profile from './userside/component/Profile';
import AddCar from './admin/AddCar';
import DisplayCar from './admin/DisplayCar';
import DisplayBooking from './admin/DisplayBooking';
import AddStaff from './admin/AddStaff';
import DisplayStaff from './admin/DisplayStaff';
import UpdateCar from './admin/UpdateCar';
import DisplayCustomer from './userside/component/DisplayCustomer';
import UpdateCustomer from './userside/component/UpdateCustomer';
import UserLogin from './userside/component/UserLogin';
import AddCustomer from './userside/component/AddCustomer';


import AddRating from './userside/component/AddRating';
import RatingTable from './userside/component/RatingTable';
import CarRatingComponent from './userside/component/CarRatingComponent';
import CustomerRatingComponent from './userside/component/CustomerRatingComponent';

import AddStaff from './staffComponents/AddStaff';
import StaffLogin from './staffComponents/StaffLogin';
import DisplayStaff from './staffComponents/DisplayStaff';
import UpdateStaff from './staffComponents/UpdateStaff';
import StaffBookings from './staffComponents/StaffBookings';

function App() {
  // const [loggedInUser, setLoggedInUser] = useState('');
 
 
          
  return (
    <div className="App">
      <BrowserRouter>


     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<UserHome/>}></Route>
      <Route path='/cardetail/:modelName' element={<CarDetails/>}></Route>
      <Route path='/booking/:modelName' element={<CreateNewBooking/>}></Route>
      <Route path='/booking/user' element={<ViewCustomerBooking/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/login' element={<UserLogin />}></Route>

          <Route path='/customer' element={<AddCustomer />}></Route>
          <Route path='/displayCustomer' element={<DisplayCustomer  />} ></Route>
          <Route path='/update-customer' element={<UpdateCustomer/>}></Route>
          <Route path='/add-car' element={<AddCar/>}/>
          <Route path='/display-car' element={<DisplayCar/>}/>
          <Route path='/update-car' element={<UpdateCar/>}/>
          <Route path='/display-booking' element={<DisplayBooking/>}/>
          <Route path='/add-staff' element={<AddStaff/>}/>
          <Route path='/display-staff' element={<DisplayStaff/>}/>
          <Route path="/AddRating/:modelName" element={<AddRating />} />
          <Route path="/ratingtable" element={<RatingTable />} />
          <Route path="/ratingtableCarModel" element={<CarRatingComponent />} />
          <Route path="/ratingtableCustomerMail" element={<CustomerRatingComponent />} />
          <Route path='/staff' element={<AddStaff/>}></Route>
          <Route path='/login' element={<StaffLogin/>}></Route>
          <Route path='/displaystaff' element={<DisplayStaff/>}></Route>
          <Route path='/updatestaff' element={<UpdateStaff/>}></Route>
          <Route path='/staffBookings' element={<StaffBookings/>}></Route>

          <Route path='*' element={<NoPageFound/>}></Route>
      </Route>
     </Routes>
     </BrowserRouter>
        
    </div>
  );
}

export default App;

