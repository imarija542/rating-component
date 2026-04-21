import React, { useState } from "react";
import "./App.css";

function App() {
  const [rating, setRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="app">
        <div className="card thank-you-card">
          <div className="thank-you-img">⭐</div>
          <div className="selection-badge">You selected {rating} out of 5</div>
          <h1>Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="card">
        <div className="star-icon">★</div>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <div className="rating-group">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              type="button"
              className={`rating-btn ${rating === num ? "active" : ""}`}
              onClick={() => handleRatingClick(num)}
            >
              {num}
            </button>
          ))}
        </div>

        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={!rating}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default App;
