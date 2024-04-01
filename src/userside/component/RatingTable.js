import React, { useState, useEffect } from "react";
import RatingService from "../services/RatingService";
import './RatingTable.css';
const RatingTable = () => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    RatingService.getAllRating()
      .then(response => {
        const mappedRatings = response.data.map(item => ({
          id: item.id,
          customerEmailId: item.customer.customerEmail,
          ratingStars: item.ratingStars,
          comments: item.comments,
          carModelName: item.car.modelName
        }));
        setRatings(mappedRatings);
      })
      .catch(error => {
        console.error("Error fetching ratings:", error);
      });
  }, []);

  return (
    <div className="rating-table-container">
      <h2>Rating Table</h2>
      <table>
        <thead>
          <tr>
            <th>Customer Email ID</th>
            <th>Rating Stars</th>
            <th>Comments</th>
            <th>Car Model Name</th>
          </tr>
        </thead>
        <tbody>
          {ratings.map(rating => (
            <tr key={rating.id}>
              <td>{rating.customerEmailId}</td>
              <td>{rating.ratingStars}</td>
              <td>{rating.comments}</td>
              <td>{rating.carModelName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RatingTable;
