// import React, { Component } from "react";
import { useState } from 'react';
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import css from "./App.module.css";


// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }
export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = {good, neutral, bad}

// handleClick = option => {
//   this.setState(prevState => ({
//   [option]: prevState[option] + 1,
// }));
// }

const handleClick = event => {
  
  switch (event) {
    case 'good':
      setGood(prevState => prevState + 1);
      break;

    case 'neutral':
      setNeutral(prevState => prevState + 1);
      break;

    case 'bad':
      setBad(prevState => prevState + 1);
      break;

    default:
      return;
  }
};


// countTotalFeedback() {
//   let total = 0;
//   const values = Object.values(this.state);
//   for (let value of values) {
//     total += value;
//   }
//   return total;
// };

const countTotalFeedback = () => {
  return (good + neutral + bad)
};

// countPositiveFeedbackPercentage() {
//   return this.countTotalFeedback === 0 ? 0 : Math.floor((this.state.good / this.countTotalFeedback()) * 100);
// };

 const countPositiveFeedbackPercentage = () => {
  const positivePercentage = (good / countTotalFeedback()) * 100;
  return Math.round(positivePercentage);
};


  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleClick}
          />
        </Section>
        <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
    
  )


// render() {
//   const { good, neutral, bad } = this.state;
//   const total = this.countTotalFeedback();
//   return (
//     <div className={css.container}>
//       <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={this.state}
//             onLeaveFeedback={this.handleClick}
//           />
//         </Section>
//         <Section title="Statistics">
//         {total === 0 ? (
//           <Notification message="There is no feedback" />
//         ) : (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.countPositiveFeedbackPercentage()}
//           />
//         )}
//       </Section>
//     </div>
    
//   )
// }
}





