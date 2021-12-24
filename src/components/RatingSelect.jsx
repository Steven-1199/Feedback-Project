import { useState, useContext, useEffect } from "react";
import { FeedbackContext } from "./FeedbackContext";

function RatingSelect({ handleRating }) {
  const [select, setSelect] = useState(10);
  const { itemEdit } = useContext(FeedbackContext);
  const handleChange = (e) => {
    setSelect(+e.target.value);
    handleRating(+e.target.value);
  };
  useEffect(() => {
    if (itemEdit.isEdit === true) {
      setSelect(itemEdit.item.rating);
    }
  }, [itemEdit]);

  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          id="num1"
          name="rating"
          checked={select === 1}
          onChange={handleChange}
          value="1"
        ></input>
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
          type="radio"
          id="num2"
          name="rating"
          checked={select === 2}
          onChange={handleChange}
          value="2"
        ></input>
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
          type="radio"
          id="num3"
          name="rating"
          checked={select === 3}
          onChange={handleChange}
          value="3"
        ></input>
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input
          type="radio"
          id="num4"
          name="rating"
          checked={select === 4}
          onChange={handleChange}
          value="4"
        ></input>
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input
          type="radio"
          id="num5"
          name="rating"
          checked={select === 5}
          onChange={handleChange}
          value="5"
        ></input>
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input
          type="radio"
          id="num6"
          name="rating"
          checked={select === 6}
          onChange={handleChange}
          value="6"
        ></input>
        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input
          type="radio"
          id="num7"
          name="rating"
          checked={select === 7}
          onChange={handleChange}
          value="7"
        ></input>
        <label htmlFor="num7">7</label>
      </li>
      <li>
        <input
          type="radio"
          id="num8"
          name="rating"
          checked={select === 8}
          onChange={handleChange}
          value="8"
        ></input>
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input
          type="radio"
          id="num9"
          name="rating"
          checked={select === 9}
          onChange={handleChange}
          value="9"
        ></input>
        <label htmlFor="num9">9</label>
      </li>
      <li>
        <input
          type="radio"
          id="num10"
          name="rating"
          checked={select === 10}
          onChange={handleChange}
          value="10"
        ></input>
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  );
}

export default RatingSelect;
