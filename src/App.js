import React, { Component, useState } from "react";
import "./App.css";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (btnName) => {
    console.log(btnName);
    switch (btnName) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
    }
  };

  const countPositiveFeedbackPercentage = (totalFeedbackCount) => {
    return totalFeedbackCount === 0
      ? 0
      : Math.round((good * 100) / totalFeedbackCount);
  };

  const totalFeedback = good + neutral + bad;
  const positive = countPositiveFeedbackPercentage(totalFeedback);

  return (
    <div className="App">
      <Section
        className="AppStatistics"
        title="Please leave feedback"
        children={
          <FeedbackOptions
            options={{ good, neutral, bad }}
            onLeaveFeedback={handleClick}
          />
        }
      />

      <Section
        className="AppStatistics"
        title="Statistics"
        children={
          totalFeedback === 0 ? (
            <Notification msg="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positive}
            />
          )
        }
      />
    </div>
  );
}
