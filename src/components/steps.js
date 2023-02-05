import React from 'react';
import Step  from 'components/snippets/step';

const Steps = (props) => {
    return (
        <div className="">
            <Step index={1} title="Your info" />
            <Step index={2} title="Select plan" />
            <Step index={3} title="Add-ons" />
            <Step index={4} title="Summary" />
        </div>
    );
};

export default Steps;
