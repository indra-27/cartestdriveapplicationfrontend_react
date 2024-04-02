import React, { useState,useEffect } from "react";
import RatingService from "../services/RatingService";
import { useParams } from "react-router-dom";
const AddRating = () => {
  const [rating, setRating] = useState({
    customerEmailId: "",
    ratingStars: "",
    comments: "",
    carModelName: ""
  });

  let {modelName}= useParams();
  let [customerEmail,setCustomerEmail] = useState("");
  useEffect(() => {
    //Runs only on the first render
 const customerEmail=  localStorage.getItem("customerEmail");

    setCustomerEmail(customerEmail);
}, []);
rating.customerEmailId=customerEmail;
rating.carModelName = modelName;




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
          <input type="text" name="customerEmailId" value={customerEmail} disabled/>
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
          <input type="text" name="carModelName" value={modelName} disabled/>
        </label>
        <br />
        <button type="submit">Submit Rating</button>
      </form>
    </div>
  );
};

export default AddRating;
