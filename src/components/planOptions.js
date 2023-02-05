import React from 'react';
import Plan from 'components/snippets/plan';

const PlanOptions = () => {
    return (
        <div>
            Select your plan
            You have the option of monthly or yearly billing.

            <Plan title="Arcade" cost={9} />
            <Plan title="Advanced" cost={12} />
            <Plan title="Pro" cost={15} />

            Monthly
            Yearly

            Go Back
            Next Step
        </div>
    );
};

export default PlanOptions;
