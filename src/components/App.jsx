import React from 'react';
import { Component } from 'react';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    feedback: 0,
  };}

  GoodIncr = GoodIncr => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  NeutralIncr = NeutralIncr => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  BadIncr = BadIncr => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  // countPositiveFeedbackPercentage()
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;

    // Проверка на ноль, чтобы избежать деления на ноль
    if (totalFeedback === 0) {
      return 0; // Если нет общей обратной связи, процент положительных отзывов равен 0%
    }

    const positivePercentage = (good / totalFeedback) * 100;
    return Math.round(positivePercentage); // Округляем до целого числа
  };

  render() {
    return (
      <>
        <FeedbackOptions
          GoodIncr={this.GoodIncr}
          NeutralIncr={this.NeutralIncr}
          BadIncr={this.BadIncr}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()} // Вызываем метод для вычисления процента положительных отзывов
        />
      </>
    );
  }
}
