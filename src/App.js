import './App.css';
import UserHome from './userside/component/UserHome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPageFound from './userside/component/NoPageFound';
import CarDetails from './userside/component/CarDetails';
import Layout from './userside/component/Layout';
import CreateNewBooking from './userside/component/CreateNewBooking';
import ViewCustomerBooking from './userside/component/ViewCustomerBooking';
import Profile from './userside/component/Profile';
import LayoutAdmin from './admin/LayoutAdmin';
import AddCar from './admin/AddCar';
import DisplayCar from './admin/DisplayCar';
import DisplayBooking from './admin/DisplayBooking';
import AddStaff from './admin/AddStaff';
import DisplayStaff from './admin/DisplayStaff';
import UpdateCar from './admin/UpdateCar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<UserHome/>}></Route>
      <Route path='/cardetail' element={<CarDetails/>}></Route>
      <Route path='/booking' element={<CreateNewBooking/>}></Route>
      <Route path='/booking/user' element={<ViewCustomerBooking/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/add-car' element={<AddCar/>}/>
          <Route path='/display-car' element={<DisplayCar/>}/>
          <Route path='/update-car' element={<UpdateCar/>}/>
          <Route path='/display-booking' element={<DisplayBooking/>}/>
          <Route path='/add-staff' element={<AddStaff/>}/>
          <Route path='/display-staff' element={<DisplayStaff/>}/>
      <Route path='*' element={<NoPageFound/>}></Route>
      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

