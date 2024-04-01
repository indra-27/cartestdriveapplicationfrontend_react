import React, { useState, useEffect } from "react";
import RatingService from "./service/RatingService";


const CustomerRatingComponent = () => {
  const [ratings, setRatings] = useState([]);
  const [customerMailId, setCustomerMailId] = useState("");
  const [carModel, setCarModel] = useState("");

  const fetchRatings = (mailId) => {
      RatingService.getRatingByCustomerMailID(mailId)
      .then(response => {
        setRatings(response.data);
        if (response.data.length > 0) {
          setCarModel(response.data[0].carModelName);
        }
      })
      .catch(error => {
        console.error("Error fetching ratings for customer email ID:", error);
      });
  };

  useEffect(() => {
    if (customerMailId) {
      fetchRatings(customerMailId);
    }
  }, [customerMailId]);

  const handleCustomerMailIdChange = (e) => {
    setCustomerMailId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRatings(customerMailId);
  };

  return (
    <div>
      <h2>Ratings for Customer: {customerMailId}</h2>
      <h3>Car Model: {carModel}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Customer Email ID:
          <input type="text" value={customerMailId} onChange={handleCustomerMailIdChange} />
        </label>
        <button type="submit">Fetch Ratings</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Car Model</th>
            <th>Rating Stars</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {ratings.map(rating => (
            <tr key={rating.id}>
              <td>{rating.carModelName}</td>
              <td>{rating.ratingStars}</td>
              <td>{rating.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerRatingComponent;

