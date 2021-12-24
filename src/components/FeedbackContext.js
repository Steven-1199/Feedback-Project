import { createContext, useState, useEffect } from "react";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [itemEdit, setItemEdit] = useState({ item: {}, isEdit: false });
  useEffect(() => fetchFeedback(), []);
  const fetchFeedback = async () => {
    const respone = await fetch(`http://localhost:5000/feedback`);
    const data = await respone.json();
    setFeedback(data);
  };
  const handleEdit = (e) => {
    setItemEdit({ item: e, isEdit: true });
  };

  const handlerDeleteItem = async (DeleteItemId) => {
    await fetch(`http://localhost:5000/feedback/${DeleteItemId}`, {
      method: "DELETE",
    });

    setFeedback((prev) => prev.filter((e) => e.id !== DeleteItemId));
  };
  const addItem = async (e) => {
    const respone = await fetch(`http://localhost:5000/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(e),
    });
    const data = await respone.json();
    setFeedback((prev) => [data, ...prev]);
  };
  const updateItem = async (id, text, rating) => {
    const respone = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, rating }),
    });
    //const data = await respone.json();
    setFeedback(feedback.map((e) => (e.id === id ? { id, text, rating } : e)));
    //console.log(id, items);
  };
  console.log(feedback);
  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        handlerDeleteItem: handlerDeleteItem,
        addItem: addItem,
        handleEdit: handleEdit,
        itemEdit: itemEdit,
        updateItem: updateItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
