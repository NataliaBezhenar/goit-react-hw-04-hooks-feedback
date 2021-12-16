import React, { Component } from "react";
import "./App.css";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (btnName) => {
    this.setState((prev) => ({ [btnName]: prev[btnName] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = (totalFeedbackCount) => {
    return totalFeedbackCount === 0
      ? 0
      : Math.round((this.state.good * 100) / totalFeedbackCount);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage(totalFeedback);

    return (
      <div className="App">
        <Section
          className="AppStatistics"
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.handleClick}
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
}

export default App;
