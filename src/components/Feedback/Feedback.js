import PropTypes from 'prop-types';

const FeedbackBtn = ({ feedback, onLeaveFeedback }) => {
  return (
    <button type="button" data-feedback={feedback} onClick={onLeaveFeedback}>
      {feedback}
    </button>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <FeedbackBtn
      key={option}
      feedback={option}
      onLeaveFeedback={onLeaveFeedback}
    />
  ));
};

FeedbackOptions.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
