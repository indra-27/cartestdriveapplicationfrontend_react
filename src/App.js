import './App.css';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import AddRating from './AddRating';
import RatingTable from './RatingTable';
import CarRatingComponent from './CarRatingComponent';
import CustomerRatingComponent from './CustomerRatingComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/AddRating">Add Rating</Link></li>
            <li><Link to="/ratingtable">Rating Table</Link></li>
            <li><Link to="/ratingtableCarModel">Car Rating Table</Link></li>
            <li><Link to="/ratingtableCustomerMail">Customer Rating Table</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<AddRating />} />
          <Route path="/AddRating" element={<AddRating />} />
          <Route path="/ratingtable" element={<RatingTable />} />
          <Route path="/ratingtableCarModel" element={<CarRatingComponent />} />
          <Route path="/ratingtableCustomerMail" element={<CustomerRatingComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
