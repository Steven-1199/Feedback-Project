import React from "react";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { FeedbackProvider } from "./FeedbackContext";
import { useContext } from "react";
import { FeedbackContext } from "./FeedbackContext";

function FeedbackList({ handlerDeleteItem }) {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No feedback</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((e) => (
          <motion.div
            key={e.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={e.id}
              item={e}
              handlerDelete={(e) => {
                handlerDeleteItem(e);
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
