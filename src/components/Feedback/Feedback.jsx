import PropTypes from 'prop-types';

import styles from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <button
          className={styles.button}
          type={options.type}
          onClick={onLeaveFeedback}>
          Good
        </button>
      </li>
      <li className={styles.item}>
        <button
          className={styles.button}
          type={options.type}
          onClick={onLeaveFeedback}>
          Neutral
        </button>
      </li>
      <li className={styles.item}>
        <button
          className={styles.button}
          type={options.type}
          onClick={onLeaveFeedback}>
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;