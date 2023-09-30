import React, { Component } from 'react'; // Импортируем React и Component из библиотеки react
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Используем camelCase для названий методов
  goodIncr = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutralIncr = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badIncr = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();

    if (totalFeedback === 0) {
      return 0;
    }

    const positivePercentage = (good / totalFeedback) * 100;
    return Math.round(positivePercentage);
  };

  render() {
    return (
      <>
        <FeedbackOptions
          goodIncr={this.goodIncr}
          neutralIncr={this.neutralIncr}
          badIncr={this.badIncr}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}
