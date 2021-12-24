import Card from "./shared/Card";
import { useState, useEffect } from "react";
import Buttom from "./shared/Buttom";
import RatingSelect from "./RatingSelect";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { FeedbackContext } from "./FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [selectedRating, setSelectedRating] = useState(10);
  const { addItem, itemEdit, updateItem } = useContext(FeedbackContext);

  const handleTextChange = (e) => {
    if (text === "") {
      setMessage(null);
      setIsDisabled(true);
    } else if (text !== "" && text.trim().length <= 10) {
      setIsDisabled(true);
      setMessage("You have to type more than 10 characters");
    } else {
      setIsDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };
  const handleRating = (e) => {
    setSelectedRating(e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const addaItem = { text: text, rating: selectedRating, id: uuidv4() };
      if (itemEdit.isEdit === true) {
        updateItem(itemEdit.item.id, addaItem.text, addaItem.rating);
      } else {
        addItem(addaItem);
      }
      setText("");
    }
  };
  useEffect(
    (e) => {
      if (itemEdit.isEdit === true) {
        setText(itemEdit.item.text);
        setIsDisabled(false);
        setSelectedRating(itemEdit.item.rating);
      }
      //setIsDisabled(true);
    },
    [itemEdit]
  );

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us</h2>
        <RatingSelect handleRating={handleRating} />
        <div className="input-group">
          <input
            type="text"
            onChange={handleTextChange}
            placeholder="Write a review here"
            value={text}
          ></input>
          <Buttom type="submit" isDisabled={isDisabled}>
            Send
          </Buttom>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
