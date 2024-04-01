import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
            <Route path='/staff' element={<AddStaff/>}></Route>
            <Route path='/login' element={<StaffLogin/>}></Route>
            <Route path='/displaystaff' element={<DisplayStaff/>}></Route>
            <Route path='/updatestaff' element={<UpdateStaff/>}></Route>
            <Route path='/staffBookings' element={<StaffBookings/>}></Route>

        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
