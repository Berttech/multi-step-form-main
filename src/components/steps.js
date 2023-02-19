import React from 'react';
import Step  from 'components/snippets/step';

const Steps = (props) => {
    return (
        <div className="lg:bg-[url('/assets/images/bg-sidebar-desktop.svg')] lg:h-[35.5rem] lg:w-[17.125rem]">
            <div className="ml-8 pt-10 ">
                <Step index={1} title="Your info" />
                <Step index={2} title="Select plan" />
                <Step index={3} title="Add-ons" />
                <Step index={4} title="Summary" />
            </div>
        </div>
    );
};

export default Steps;
