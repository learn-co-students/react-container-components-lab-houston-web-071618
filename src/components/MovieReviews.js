import React from "react";
const MovieReviews = props => {
  return (
    <div className="review-list">
      {props.reviews.map((oneReviewInfo, idx) => (
        <li className="review" key={idx}>
          {oneReviewInfo.display_title}
        </li>
      ))}
    </div>
  );
};
export default MovieReviews;
