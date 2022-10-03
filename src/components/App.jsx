import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotal = () => {
    return good + neutral + bad;
  };

  const countPercentage = () => {
    const total = countTotal();
    const percentage = +((good * 100) / total).toFixed();

    return total ? percentage : null;
  };

  const handleFeedback = e => {
    const name = e.currentTarget.name;

    switch (name) {
      case 'good':
        return setGood(prew => prew + 1);
      case 'neutral':
        return setNeutral(prew => prew + 1);
      case 'bad':
        return setBad(prew => prew + 1);
      default:
        return;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotal() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal()}
            positivePercentage={countPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
      <GlobalStyle />
    </>
  );
};
