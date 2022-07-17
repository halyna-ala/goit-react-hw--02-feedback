import PropTypes from 'prop-types';

import styles from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.list}>
      {options.map(option => (
        <li className={styles.item} key={option}>
            <button
              className={styles.button}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        ))}
    </ul>
  );
};


FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

// {Object.keys(options).map(btnName => {
//   return (
//     <li className={styles.item} key={btnName}>
//       <button
//         className={styles.button}
//         type="button"
//         onClick={onLeaveFeedback}
//       >
//         {btnName}
//       </button>
//     </li>
//   );
// }