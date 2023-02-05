import React from 'react';

const Plan = (props) => {
    const { title, cost } = props;
    return (
        <div>
            {title}
            ${cost}/mo
        </div>
    );
};

export default Plan;
