import React, { useState } from "react";
import RatingService from "./service/RatingService";
const AddRating = () => {
  const [rating, setRating] = useState({
    customerEmailId: "",
    ratingStars: "",
    comments: "",
    carModelName: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    RatingService.AddRating(rating)
      .then(response => {
        console.log("Rating added successfully:", response.data);
        // You can add further actions here after successful addition
      })
      .catch(error => {
        console.error("Error adding rating:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRating((prevRating) => ({
      ...prevRating,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>Add a Rating</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Customer Email ID:
          <input type="text" name="customerEmailId" value={rating.customerEmailId} onChange={handleChange} />
        </label>
        <br />
        <label>
          Rating Stars:
          <input type="text" name="ratingStars" value={rating.ratingStars} onChange={handleChange} />
        </label>
        <br />
        <label>
          Comments:
          <input type="text" name="comments" value={rating.comments} onChange={handleChange} />
        </label>
        <br />
        <label>
          Car Model Name:
          <input type="text" name="carModelName" value={rating.carModelName} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit Rating</button>
      </form>
    </div>
  );
};

export default AddRating;
