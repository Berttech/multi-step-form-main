import React from 'react';

const Step = (props) => {
    const { index, title } = props;
    return (
        <div>
            Step {index}
            {title}
        </div>
    );
};

export default Step;
