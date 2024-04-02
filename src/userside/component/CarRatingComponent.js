import React, { useState, useEffect } from "react";
import RatingService from "../services/RatingService";

const CarRatingComponent = () => {
  const [ratings, setRatings] = useState([]);
  const [carModel, setCarModel] = useState("Figo"); // Default car model

  const fetchRatings = (model) => {
    RatingService.getRatingByCarName(model)
      .then(response => {
        // console.log(response.data);
        setRatings(response.data);
      })
      .catch(error => {
        console.error("Error fetching ratings for car model:", error);
      });
  };

  useEffect(() => {
    fetchRatings(carModel);
  }, [carModel]);

  const handleCarModelChange = (e) => {
    setCarModel(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRatings(carModel);
  };

  return (
    <div>
      <h2>Ratings for Car Model: {carModel}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Car Model:
          <input type="text" value={carModel} onChange={handleCarModelChange} />
        </label>
        <button type="submit">Fetch Ratings</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Rating Stars</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {ratings.map(rating => (
            <tr key={rating.id}>
              <td>{rating.ratingStars}</td>
              <td>{rating.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarRatingComponent;
