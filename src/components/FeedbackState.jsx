import { useContext } from "react";
import { FeedbackContext } from "./FeedbackContext";

function FeedbackState() {
  const { feedback } = useContext(FeedbackContext);
  const averageRating =
    feedback.reduce((arr, cur) => arr + cur.rating, 0) / feedback.length;
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(averageRating) ? "0" : averageRating}</h4>
    </div>
  );
}

export default FeedbackState;
