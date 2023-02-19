import React from 'react';
import Steps from 'components/steps';
import PersonalForm from 'components/personalForm';
import PlanOptions from 'components/planOptions';
import Addons from 'components/addons';
import Summary from 'components/summary';
import Thanks from 'components/thanks';

const App = () => {
    return (
        <div className="flex p-4">
            <Steps />
            <div className="mx-25 mt-10">
                <PersonalForm />
                <PlanOptions />
                <Addons />
                <Summary />
                <Thanks />
            </div>
        </div>
    );
};

export default App;
