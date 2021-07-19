import PropTypes from 'prop-types';

import Notification from '../Notification';

import shortid from 'shortid';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => {
  // const liNameId = shortid.generate();

  return (
    <>
      {total > 0 && (
        <ul>
          <li key={shortid.generate()}>Good: {good}</li>
          <li key={shortid.generate()}>Neutral: {neutral}</li>
          <li key={shortid.generate()}>Bad: {bad}</li>
          <li key={shortid.generate()}>Total: {total}</li>
          <li key={shortid.generate()}>
            Positive feedback: {positiveFeedbackPercentage}%
          </li>
        </ul>
      )}
      {total === 0 && <Notification message="No feedback given" />}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number,
};

export default Statistics;
