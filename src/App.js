import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
        <Route path='/' element={<LayoutAdmin/>}>
          <Route path='/add-car' element={<AddCar/>}/>
          <Route path='/display-car' element={<DisplayCar/>}/>
          <Route path='/update-car' element={<UpdateCar/>}/>
          <Route path='/display-booking' element={<DisplayBooking/>}/>
          <Route path='/add-staff' element={<AddStaff/>}/>
          <Route path='/display-staff' element={<DisplayStaff/>}/>
          {/* <Route path='/demos' element={<AllDemo/>}/>
          <Route path='*' element={<Nopage/>}/> */}
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

