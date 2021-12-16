import React from "react";
import { PropTypes } from "prop-types";
import "./FeedbackOptions.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="buttons-container">
    {Object.keys(options).map((item) => (
      <button
        className="option-button"
        key={item}
        onClick={() => onLeaveFeedback(item)}
      >
        {item}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};

export default FeedbackOptions;
