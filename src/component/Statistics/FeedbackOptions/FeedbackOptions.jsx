import React from "react";
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        options.map(option => (
            <button
                type="button"
                key={option}
                onClick={() => onLeaveFeedback(option)}
            >
                {option}
            </button>
        ))
    );
};

FeedbackOptions.PropTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;