import React from 'react';
import Steps from 'components/steps';
import PersonalForm from 'components/personalForm';
import PlanOptions from 'components/planOptions';
import Addons from 'components/addons';
import Summary from 'components/summary';
import Thanks from 'components/thanks';

const App = () => {
    return (
        <div>
            <Steps />
            <PersonalForm />
            <PlanOptions />
            <Addons />
            <Summary />
            <Thanks />
        </div>
    );
};

export default App;
