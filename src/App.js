import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddAccount from './customerComponents/AddCustomer';
import DisplayCustomer from './customerComponents/DisplayCustomer';
import UpdateCustomer from './customerComponents/UpdateCustomer';
import UserLogin from './customerComponents/UserLogin';
import { useState } from 'react';


function App() {
  // const [loggedInUser, setLoggedInUser] = useState('');
          
  return (
    <div className="App">
       <BrowserRouter>
       
      
        <Routes>

        <Route path='/login' element={<UserLogin />}></Route>
            <Route path='/customer' element={<AddAccount />}></Route>
          <Route path='/displayCustomer' element={<DisplayCustomer  />} ></Route>
         <Route path='/update-customer' element={<UpdateCustomer/>}></Route>
         {/* <Route path='/login' element={<UserLogin />}><UserLogin setLoggedInUser={setLoggedInUser} /></Route> */}
         {/* <Route path="/login" exact>
  <UserLogin setLoggedInUser={setLoggedInUser} />
</Route>  */}
</Routes> 

       

      </BrowserRouter>
    </div>
  );
}

export default App;
