import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsName = Object.keys(options);
  return (
    <div className={css.list}>
      {optionsName.map(option => (
        <button className={css.btn}
          type="button" onClick={() => onLeaveFeedback(option)}
          key={option}>
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;






