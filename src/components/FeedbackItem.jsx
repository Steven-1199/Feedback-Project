import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { FeedbackContext } from "./FeedbackContext";

function FeedbackItem({ item }) {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("Example");
  const { handlerDeleteItem, handleEdit } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button
        onClick={(e) => {
          handlerDeleteItem(item.id);
        }}
        className="close"
      >
        <FaTimes color="purple" />
      </button>
      <button onClick={() => handleEdit(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
