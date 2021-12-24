import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackState from "./components/FeedbackState";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./components/FeedbackContext";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackState />
                  <FeedbackList />
                </>
              }
            />

            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
