import PropTypes from 'prop-types';
import {
  Controls,
  Btn,
} from 'components/FeedbackOptions/FeedbackOptionsStyled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Controls>
      {options.map((item, idx) => {
        return (
          <li key={idx}>
            <Btn onClick={onLeaveFeedback} name={item}>
              {item}
            </Btn>
          </li>
        );
      })}
    </Controls>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
