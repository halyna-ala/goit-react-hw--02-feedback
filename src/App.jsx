import React, { Component } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/Feedback/Feedback';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
  // Стейт
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));

    // const label = event.target.textContent;

    // this.setState(prevState => ({ [label]: (prevState[label] += 1) }));
  };

  // Метод, який сумує значкння відгуків
  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral;
    // const total = Object.keys(this.state).reduce(
    //   (acc, value) => acc + this.state[value],
    //   0,
    // );

    // return total;
  };

  // щитає процент гарних відгуків (добрих множимо на 100 і робимо на загальне количество)
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    // const percent = Math.round(
    //   (this.state.good * 100) / this.countTotalFeedback(),
    // );

    // return percent;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options} // Передаем в компонент кнопок весь стейт
            onLeaveFeedback={this.onLeaveFeedback} // Метод для назви  кнопок і інкрименту
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={this.countTotalFeedback}
            // total={this.countTotalFeedback} 
            positivePercentage={this.countPositiveFeedbackPercentage()} 
          />
        </Section>
      </div>
    );
  }
}

export default App;