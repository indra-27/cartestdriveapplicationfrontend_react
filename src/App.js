import logo from './logo.svg';
import './App.css';
import UserHome from './userside/component/UserHome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPageFound from './userside/component/NoPageFound';
import CarDetails from './userside/component/CarDetails';
import Layout from './userside/component/Layout';
import CreateNewBooking from './userside/component/CreateNewBooking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<UserHome/>}></Route>
      <Route path='/cardetail' element={<CarDetails/>}></Route>
      <Route path='/booking' element={<CreateNewBooking/>}></Route>
      <Route path='*' element={<NoPageFound/>}></Route>
      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
