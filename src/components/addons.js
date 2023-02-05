import React from 'react';
import Addon from 'components/snippets/addon';
const Addons = () => {
    return (
        <div>
            {/* <!-- Step 3 start --> */}

            Pick add-ons
            Add-ons help enhance your gaming experience.

            <Addon title="Online service" description="Access to multiplayer games" cost={1} />
            <Addon title="Larger storage" description="Extra 1TB of cloud save" cost={2} />
            <Addon title="Customizable Profile" description="Custom theme on your profile" cost={2} />

            Go Back
            Next Step

            {/* <!-- Step 3 end --> */}
        </div>
    );
};

export default Addons;